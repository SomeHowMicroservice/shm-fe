import { NextResponse, NextRequest } from "next/server";
import { PATH } from "./constants/paths";
import { ACCESS_TOKEN } from "./constants/token";
import { cookies } from "next/headers";

const AUTH_PATHS = [PATH.LOGIN, PATH.REGISTER];

export async function middleware(request: NextRequest) {
  const token = (await cookies()).get(ACCESS_TOKEN)?.value;
  const { pathname } = request.nextUrl;

  if (!token && pathname.startsWith("/profile")) {
    return NextResponse.redirect(new URL(PATH.LOGIN, request.url));
  }

  if (token && AUTH_PATHS.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register", "/profile:path*"],
};
