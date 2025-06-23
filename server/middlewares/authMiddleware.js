import jwt from "jsonwebtoken";
export const authenticateJWT = (req, res, next) => {
    const token = req.cookies?.auth_token || req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const actualToken = token.startsWith('Bearer ') ? token.slice(7) : token;
        const decoded = jwt.verify(actualToken, process.env.JWT_SECRET); 
        req.user = decoded; 
        next();
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
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', 
            sameSite: 'Strict',
        });

        next();
    } catch (error) {
        console.error('Error setting cookie:', error.message);
        res.status(500).send('Failed to set authentication cookie.');
    }
};

export function authMiddleware(app) {
    import('cookie-parser').then(module => {
        app.use(module.default());
    });
}
