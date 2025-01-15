import jwt from "jsonwebtoken";

export const setAuthCookie = (req, res, next) => {
  try {
    const { userId } = req.body; 
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    //set cookie in the response
    res.cookie('auth_token', token, {
      httpOnly: true,
      secure: true, //Use HTTPS
      sameSite: 'Strict', //to avoid cross-site cookie usage
    });

    next();
  } catch (error) {
    console.error('Error setting cookie:', error);
    res.status(500).send('Failed to set authentication cookie.');
  }
};
