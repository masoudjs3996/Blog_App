import { config } from "./../middleware";
import { AxiosRequestConfig } from "axios";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export function setCookieOnReq(
  cookies: ReadonlyRequestCookies,
  method: "GET" | "POST" | "DELETE" | "PUT" = "GET"
): RequestInit {
  const accessToken = cookies.get("accessToken");
  const refreshToken = cookies.get("refreshToken");

  const options: RequestInit = {
    method: method,
    credentials: "include",
    headers: {
      Cookie: `${accessToken?.name ?? ""}=${accessToken?.value ?? ""}; ${
        refreshToken?.name ?? ""
      }=${refreshToken?.value ?? ""}`,
    },
  };

  return options;
}

export function setAxiosCookieConfig(
  cookies: ReadonlyRequestCookies,
  method: "GET" | "POST" | "DELETE" | "PUT" = "GET"
): AxiosRequestConfig {
  const accessToken = cookies.get("accessToken");
  const refreshToken = cookies.get("refreshToken");
  const config: AxiosRequestConfig = {
    method,
    withCredentials: true,
    headers: {
      Cookie: `${accessToken?.name ?? ""}=${accessToken?.value ?? ""}; ${
        refreshToken?.name ?? ""
      }=${refreshToken?.value ?? ""}`,
    },
  };
  return config;
}
