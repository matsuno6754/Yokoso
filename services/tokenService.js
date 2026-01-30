const jwt = require('jsonwebtoken');

const SECRET_KEY = 'your_secret_key';
const REFRESH_SECRET_KEY = 'your_refresh_secret_key';

// Function to generate JWT token
function generateToken(user) {
    return jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });
}

// Function to generate refresh token
function generateRefreshToken(user) {
    return jwt.sign({ id: user.id, username: user.username }, REFRESH_SECRET_KEY, { expiresIn: '7d' });
}

// Function to validate token
function validateToken(token) {
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        return { valid: true, decoded };
    } catch (err) {
        return { valid: false, err };
    }
}

module.exports = { generateToken, generateRefreshToken, validateToken };