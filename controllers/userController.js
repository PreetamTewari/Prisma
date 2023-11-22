const prisma = require('../prisma/index');
const cookieToken = require('../utils/cookieToken');
const bcrypt = require('bcryptjs');

// user signup
exports.signup = async(req, res, next) => {
    try {
        const { name, email, password } = req.body;
        if(!name || !email || !password) {
            return res.status(400).json({
                status: 'fail',
                message: 'Please provide name, email and password'
            })
        }
        const encryptedPassword = await bcrypt.hash(password, 12);
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: encryptedPassword
            }
        });
        cookieToken(user, res);
    } catch (error) {
        throw new Error(error);
    }
}