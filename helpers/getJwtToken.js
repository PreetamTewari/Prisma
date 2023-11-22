const jwt = require('jsonwebtoken');
require('dotenv').config();
const getJwtToken = (userId) => {
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });

    return token;
}

module.exports = getJwtToken;