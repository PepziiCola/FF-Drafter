const PasswordUtil = require('../security/PasswordUtil');
const User = require("./Account");

class Account {

    static UserRole = Object.freeze({
        USER: "user",
        EXPERT: "expert",
        ADMIN: "admin"
    })

    constructor(userId, username, email, hashedPassword) {
        // * Base
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.emailVerified = false;
        this.hashedPassword = hashedPassword;
        this.storedImage = null;
        this.roles = [User.UserRole.USER];

        // * Stats
        this.createdAt = new Date();

        // * Password
        this.passwordResetToken = null;
        this.passwordResetExpires = null;
        this.lastPasswordChange = null;

        // * Security - 2fa
        this.mfaEnabled = false;
        this.mfaType = null;
        this.mfaToken = null;

        // * Device Information
        this.ipAddresses = [];
        this.loginDeviceInfo = [];
        this.themePreferences = 'dark';

    }

    // * Email
    checkEmail(newEmail) {
        return newEmail === this.email;
    }

    setNewEmail(newEmail) {
        if (this.checkEmail(newEmail)) {
            this.email = newEmail;
            return true;
        } else {
            return false;
        }
    }

    // * Password
    async checkPassword(newPassword) {
        return await PasswordUtil.verifyPassword(newPassword, this.hashedPassword);
    }

    async setNewPassword(newPassword) {
        const isValid = await this.checkPassword(newPassword);
        if (isValid) {
            this.hashedPassword = await PasswordUtil.hashPassword(newPassword);
            return true;
        } else {
            return false;
        }
    }

    // * Role
    hasRole(role) {
        return this.roles.includes(role);
    }

    addRole(role) {
        if (!Object.values(User.UserRole).includes(role)) {
            throw new Error("Invalid role: ", role);
        }
        if (!this.roles.includes(role)) {
            this.roles.push(role);
        }
    }

    removeRole(role) {
        this.roles = this.roles.filter(r => r !== role);
    }

    // * Document
    toDocument() {
        return {
            userId: this.userId,
            username: this.username,
            email: this.email,
            hashedPassword: this.hashedPassword,
            storedImage: this.storedImage,
            roles: this.roles
        };
    }

    static fromDocument(document) {
        return new Account(
            // * Base
            document.userId,
            document.username,
            document.email,
            document.emailVerified,
            document.hashedPassword,
            document.storedImage,
            document.roles,
            document.createdAt,

            // * Password
            document.passwordResetToken,
            document.passwordResetExpires,
            document.lastPasswordChange,

            // * Security - 2fa
            document.mfaEnabled,
            document.mfaType,
            document.mfaToken,

            // * Device Information
            document.ipAddresses,
            document.loginDeviceInfo,
            document.themePreferences
        );
    }
}

module.exports = Account;