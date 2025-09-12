import { Dispatch } from "react";

export interface AuthState {
  user: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export type AuthAction =
  | { type: "user/loaded"; payload: string }
  | { type: "signup"; payload: string }
  | { type: "signin"; payload: string }
  | { type: "loading" }
  | { type: "rejected"; payload: string | null };

export interface AuthContextType extends AuthState {
  dispatch?: Dispatch<AuthAction>;
  signin: (value: any) => Promise<void>;
  signup: (value: any) => Promise<void>;
}
