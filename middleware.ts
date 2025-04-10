import { authRoutes, privateRoutes } from "@/routes";
import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  const isLoggedIn = !!req.auth;
  const { pathname } = req.nextUrl;
  const baseURL = req.nextUrl.origin;

  const res = NextResponse.next();

  const isPrivateRoute = privateRoutes.includes(pathname);

  // const isPublicRoute = publicRoutes.includes(pathname);

  const isAuthRoute = authRoutes.includes(pathname);
  const isApiRoute = pathname.startsWith("/api");

  // const isAdminRoute =
  //   pathname.startsWith(adminRoute + "/") || pathname === adminRoute;

  // API route
  if (isApiRoute) {
    return res;
  }

  // No token

  // // Authentication route
  // if (isAuthRoute) {
  //   if (isLoggedIn) {
  //     return NextResponse.redirect(new URL("/", baseURL));
  //   }
  //   return res;
  // }

  // Private route
  if (isPrivateRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", baseURL));
  }

  // Allow other access
  return res;
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
