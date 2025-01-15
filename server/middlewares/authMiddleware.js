import jwt from "jsonwebtoken";

export const authenticateJWT = (req, res, next) => {
    //check token in cookies or Authorization header
    const token = req.cookies?.auth_token || req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); 
        req.user = decoded; 
        next(); //Proceed to the next middleware or route
    } catch (error) {
        console.error('Token validation error:', error.message);
        res.status(401).json({ message: 'Invalid token' });
    }
};

export const setAuthCookie = (req, res, next) => {
    try {
        const { userId } = req.body; 
        const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
            expiresIn: '1d', 
        });

        res.cookie('auth_token', token, {
            httpOnly: true, //prevent access to the cookie via JavaScript
            secure: true, //Use HTTPS
            sameSite: 'Strict', //Prevent cross-site usage
        });

        next();
    } catch (error) {
        console.error('Error setting cookie:', error.message);
        res.status(500).send('Failed to set authentication cookie.');
    }
};
