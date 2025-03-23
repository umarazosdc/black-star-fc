import { adminRoute, authRoutes, privateRoutes, publicRoutes } from "@/routes";

import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  const isLoggedIn = !!req.auth;
  const { pathname } = req.nextUrl;
  const baseURL = req.nextUrl.origin;

  const res = NextResponse.next();

  const role = req.auth?.user.role;
  console.log("Req role", role);
  const isAdmin = role === "admin";

  const dashboardUrl = isAdmin
    ? "/ad/dashboard"
    : role === "scout"
    ? "/scout/dashboard"
    : "/";

  const isPrivateRoute = privateRoutes.includes(pathname);
  const isPublicRoute = publicRoutes.includes(pathname);
  const isAuthRoute = authRoutes.includes(pathname);
  const isApiRoute = pathname.startsWith("/api");
  const isAdminRoute =
    pathname.startsWith(adminRoute + "/") || pathname === adminRoute;

  // API route
  if (isApiRoute) {
    return res;
  }

  // Authentication route
  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(dashboardUrl, baseURL));
    }
    return res;
  }

  // Private route
  if (isPrivateRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", baseURL));
  }

  // Public route
  if (isPublicRoute) {
    return res;
  }

  // Admin route
  if (isAdminRoute) {
    if (!isAdmin || !isLoggedIn) {
      return NextResponse.redirect(new URL("/unauthorized", baseURL));
    }
    return res;
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
