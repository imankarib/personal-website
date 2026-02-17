import { NextResponse } from "next/server";

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

export async function POST(request: Request) {
  const body = (await request.json()) as { password?: string };
  const loginPassword = process.env.SITE_LOGIN_PASSWORD;
  const authSecret = process.env.SITE_AUTH_SECRET;

  if (!loginPassword || !authSecret || body.password !== loginPassword) {
    return NextResponse.json({ error: "Wrong password" }, { status: 401 });
  }

  const value = "authenticated";
  const signature = await hmacSign(value, authSecret);
  const cookieValue = `${value}.${signature}`;

  const response = NextResponse.json({ success: true });
  response.cookies.set("site-auth", cookieValue, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
  });

  return response;
}
