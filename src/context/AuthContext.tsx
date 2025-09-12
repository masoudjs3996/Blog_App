"use client";

import { AuthAction, AuthContextType, AuthState } from "@models/auth";
import {
  getUserApi,
  signinService,
  signupService,
} from "@services/authServices";
import { useRouter } from "next/navigation";
import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
} from "react";
import toast from "react-hot-toast";

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {

  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "rejected":
      return {
        ...state,
        error: action.payload,
      };
    case "signin":
      return {
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case "signup":
      return {
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case "user/loaded":
      return {
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    default:
      return state;
  }
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export  const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [{ error, isAuthenticated, isLoading, user }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  async function signin(values: any) {
    dispatch({ type: "loading" });
    try {
      const { message, user } = await signinService(values);
      toast.success(message);
      dispatch({ type: "signin", payload: user });
      router.push("/profile");
    } catch (err: any) {
      const errorMessage = err.response?.data?.message;
      dispatch({ type: "rejected", payload: errorMessage });
      toast.error(errorMessage || "خطایی رخ داد");
    }
  }
  async function signup(values: any) {
    dispatch({ type: "loading" });
    try {
      const { message, user } = await signupService(values);
      toast.success(message);
      dispatch({ type: "signup", payload: user });
      router.push("/profile");
    } catch (err: any) {
      const errorMessage = err.response?.data?.message;
      dispatch({ type: "rejected", payload: errorMessage });
      toast.error(errorMessage || "خطایی رخ داد");
    }
  }
  async function getUser() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    dispatch({ type: "loading" });
    try {
      const { user } = await getUserApi();
      dispatch({ type: "user/loaded", payload: user });
    } catch (err: any) {
      const errorMessage = err.response?.data?.message;
      dispatch({ type: "rejected", payload: errorMessage });
      // toast.error(errorMessage || "خطایی رخ داد");
    }
  }
  useEffect(() => {
    const getUserInfo = async () => {
      await getUser();
    };
    getUserInfo();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        error,
        isAuthenticated,
        isLoading,
        user,
        signin,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
