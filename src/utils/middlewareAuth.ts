import { NextRequest } from "next/server";

export async function middlewareAuth(req: NextRequest) {
  const accessToken = req?.cookies.get("accessToken");
  const refreshToken = req?.cookies.get("refreshToken");
  const options: RequestInit = {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: `${accessToken?.name}=${accessToken?.value}; ${refreshToken?.name}=${refreshToken?.value}`,
    },
  };
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`,
    options
  );
  const { data } = await res.json();
  const { user } = data || {};
  return user;
}
