const bcrypt = require('bcrypt');

const PasswordUtil = {

    async hashPassword(password) {
        try {
            const saltRounds = 11;
            return await bcrypt.hash(password, saltRounds);
        } catch (error) {
            console.error("Error with hashing password: ", error);
            throw new Error("Error with hashing password");
        }
    },

    async verifyPassword(plainPassword, hashedPassword) {
        try {
            return bcrypt.compare(plainPassword, hashedPassword);
        } catch (error) {
            console.error("Error with verifying password: ", error);
            throw new Error("Error with verifying password");
        }
    }
}

module.exports = PasswordUtil;