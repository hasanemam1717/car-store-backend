export const USER_ROLE = {
    admin: 'admin',
    user: 'user',
} as const;

export interface TUser {
    name: string;
    email: string;
    password: string;
    role: "admin" | "user";
    isBlocked: boolean;
}

export type TUserRole = keyof typeof USER_ROLE;