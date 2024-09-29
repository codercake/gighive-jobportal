const express = require('express');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { LINKEDIN_CLIENT_ID, LINKEDIN_CLIENT_SECRET, JWT_SECRET } = process.env;

router.get('/auth/linkedin', (req, res) => {
  const redirectUri = 'http://localhost:5000/auth/linkedin/callback';
  const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${LINKEDIN_CLIENT_ID}&redirect_uri=${redirectUri}&scope=r_liteprofile%20r_emailaddress`;
  res.redirect(authUrl);
});

router.get('/auth/linkedin/callback', async (req, res) => {
  const { code } = req.query;
  const redirectUri = 'http://localhost:5000/auth/linkedin/callback';

  try {
    const tokenResponse = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', null, {
      params: {
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
        client_id: LINKEDIN_CLIENT_ID,
        client_secret: LINKEDIN_CLIENT_SECRET,
      },
    });

    const { access_token } = tokenResponse.data;
    const userResponse = await axios.get('https://api.linkedin.com/v2/me', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const userEmailResponse = await axios.get('https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const user = userResponse.data;
    const email = userEmailResponse.data.elements[0]['handle~'].emailAddress;

    const token = jwt.sign({ email, name: user.localizedFirstName }, JWT_SECRET);
    res.redirect(`http://localhost:3000/dashboard?token=${token}`);
  } catch (error) {
    console.error('Error during LinkedIn authentication:', error);
    res.status(500).send('Authentication failed');
  }
});

module.exports = router;
