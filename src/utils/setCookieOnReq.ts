import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export function setCookieOnReq(cookies: ReadonlyRequestCookies): RequestInit {
  const accessToken = cookies.get("accessToken");
  const refreshToken = cookies.get("refreshToken");

  const options: RequestInit = {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: `${accessToken?.name ?? ""}=${accessToken?.value ?? ""}; ${
        refreshToken?.name ?? ""
      }=${refreshToken?.value ?? ""}`,
    },
  };

  return options;
}
