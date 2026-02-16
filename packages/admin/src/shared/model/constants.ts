export const BASE_API_URL = "http://localhost:3000";

export const API_KEYS = {
  auth: "auth",
  users: "users",
} as const;

export const SERVICE_KEYS = {
  login: "login",
  register: "register",
  logout: "logout",
  me: "me",
} as const;

export const PAGE_KEYS = {
  register: "register",
  login: "/",
} as const;
