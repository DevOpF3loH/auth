import { SessionOptions } from "iron-session";

export interface sessionData {
  userId?: string;
  username?: string;
  img?: string;
  isPro?: boolean;
  isBlocked?:boolean;
  isLoggedIn: boolean;
}

export const defaultSession: sessionData = {
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  password: process.env.SECRET_KEY!,
  cookieName: "auth-session",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
};
