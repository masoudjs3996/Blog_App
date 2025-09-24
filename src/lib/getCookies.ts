import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cookies } from "next/headers";

export async function getCookies() {
  const cookieStore: ReadonlyRequestCookies = await cookies();
  const accessToken = cookieStore.get("accessToken");
  const refreshToken = cookieStore.get("refreshToken");

  return {
    headers: {
      Cookie: `${accessToken?.name ?? ""}=${accessToken?.value ?? ""}; ${
        refreshToken?.name ?? ""
      }=${refreshToken?.value ?? ""}`,
    },
  };
}
