import bcrypt from "bcrypt";

export const PasswordUtil = {
    async hashPassword(password: string): Promise<string> {
        try {
            const saltRounds = 11;
            return await bcrypt.hash(password, saltRounds);
        } catch (error) {
            console.error("Error with hashing password: ", error);
            throw new Error("Error with hashing password");
        }
    },

    async verifyPassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
        try {
            return await bcrypt.compare(plainPassword, hashedPassword);
        } catch (error) {
            console.error("Error with verifying password: ", error);
            throw new Error("Error with verifying password");
        }
    },
};