import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

async function hmacSign(value: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(value));
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/login") ||
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    /\.(ico|png|jpg|jpeg|svg|webp|gif|css|js|woff|woff2)$/.exec(pathname)
  ) {
    return NextResponse.next();
  }

  const cookie = request.cookies.get("site-auth")?.value;
  const secret = process.env.SITE_AUTH_SECRET;

  if (!cookie || !secret) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const [value, signature] = cookie.split(".");
  if (!value || !signature) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const expected = await hmacSign(value, secret);
  if (signature !== expected) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
