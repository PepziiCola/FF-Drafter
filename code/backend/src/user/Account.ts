import { PasswordUtil } from "../security/PasswordUtil";

export enum UserRole {
    USER = "user",
    EXPERT = "expert",
    ADMIN = "admin",
}

export interface AccountDocument {
    userId: string;
    username: string;
    email: string;
    emailVerified?: boolean;
    hashedPassword: string;
    storedImage?: string | null;
    roles: UserRole[];
    createdAt: Date;

    // Password
    passwordResetToken?: string | null;
    passwordResetExpires?: Date | null;
    lastPasswordChange?: Date | null;

    // Security - 2FA
    mfaEnabled?: boolean;
    mfaType?: string | null;
    mfaToken?: string | null;

    // Device Information
    ipAddresses?: string[];
    loginDeviceInfo?: string[];
    themePreferences?: string;
}

export class Account {
    userId: string;
    username: string;
    email: string;
    emailVerified: boolean = false;
    hashedPassword: string;
    storedImage: string | null = null;
    roles: UserRole[] = [UserRole.USER];
    createdAt: Date = new Date();

    // Password
    passwordResetToken: string | null = null;
    passwordResetExpires: Date | null = null;
    lastPasswordChange: Date | null = null;

    // Security - 2FA
    mfaEnabled: boolean = false;
    mfaType: string | null = null;
    mfaToken: string | null = null;

    // Device Information
    ipAddresses: string[] = [];
    loginDeviceInfo: string[] = [];
    themePreferences: string = "dark";

    constructor(
        userId: string,
        username: string,
        email: string,
        hashedPassword: string
    ) {
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.hashedPassword = hashedPassword;
    }

    // Email
    checkEmail(newEmail: string): boolean {
        return newEmail === this.email;
    }

    setNewEmail(newEmail: string): boolean {
        if (this.checkEmail(newEmail)) {
            this.email = newEmail;
            return true;
        }
        return false;
    }

    // Password
    async checkPassword(newPassword: string): Promise<boolean> {
        return await PasswordUtil.verifyPassword(newPassword, this.hashedPassword);
    }

    async setNewPassword(newPassword: string): Promise<boolean> {
        const hashed = await PasswordUtil.hashPassword(newPassword); // Fixed hashing to not call verify for the new password
        if (await PasswordUtil.verifyPassword(newPassword, hashed)) {
            this.hashedPassword = hashed;
            this.lastPasswordChange = new Date(); // Automatically update lastPasswordChange
            return true;
        }
        return false;
    }

    // Role
    hasRole(role: UserRole): boolean {
        return (this.roles as UserRole[]).includes(role); // Explicitly cast roles
    }

    addRole(role: UserRole): void {
        if (!Object.values(UserRole).includes(role)) { // Check if role is valid
            throw new Error(`Invalid role: ${role}`);
        }
        if (!(this.roles as UserRole[]).includes(role)) { // Check if role already exists
            this.roles.push(role);
        }
    }

    removeRole(role: UserRole): void {
        this.roles = this.roles.filter((r) => r !== role);
    }

    // Document Conversion
    toDocument(): AccountDocument {
        return {
            userId: this.userId,
            username: this.username,
            email: this.email,
            hashedPassword: this.hashedPassword,
            storedImage: this.storedImage,
            roles: this.roles,
            createdAt: this.createdAt,
            passwordResetToken: this.passwordResetToken,
            passwordResetExpires: this.passwordResetExpires,
            lastPasswordChange: this.lastPasswordChange,
            mfaEnabled: this.mfaEnabled,
            mfaType: this.mfaType,
            mfaToken: this.mfaToken,
            ipAddresses: this.ipAddresses,
            loginDeviceInfo: this.loginDeviceInfo,
            themePreferences: this.themePreferences,
        };
    }

    static fromDocument(document: AccountDocument): Account {
        const account = new Account(
            document.userId,
            document.username,
            document.email,
            document.hashedPassword
        );

        // Set additional properties
        account.emailVerified = document.emailVerified ?? false;
        account.storedImage = document.storedImage ?? null;
        account.roles = document.roles || [UserRole.USER];
        account.createdAt = new Date(document.createdAt);

        // Password
        account.passwordResetToken = document.passwordResetToken ?? null;
        account.passwordResetExpires = document.passwordResetExpires ?? null;
        account.lastPasswordChange = document.lastPasswordChange ?? null;

        // Security - 2FA
        account.mfaEnabled = document.mfaEnabled ?? false;
        account.mfaType = document.mfaType ?? null;
        account.mfaToken = document.mfaToken ?? null;

        // Device Information
        account.ipAddresses = document.ipAddresses ?? [];
        account.loginDeviceInfo = document.loginDeviceInfo ?? [];
        account.themePreferences = document.themePreferences ?? "dark";

        return account;
    }
}