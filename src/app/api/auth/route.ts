import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 15 * 60 * 1000; // 15 minutes

const attempts = new Map<string, { count: number; lockedUntil: number }>();

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

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  const now = Date.now();
  const record = attempts.get(ip);

  if (record && now < record.lockedUntil) {
    const minutesLeft = Math.ceil((record.lockedUntil - now) / 60000);
    return NextResponse.json(
      { error: `Too many attempts. Try again in ${minutesLeft} minute${minutesLeft === 1 ? "" : "s"}.` },
      { status: 429 },
    );
  }

  const body = (await request.json()) as { password?: string };
  const loginPassword = process.env.SITE_LOGIN_PASSWORD;
  const authSecret = process.env.SITE_AUTH_SECRET;

  if (!loginPassword || !authSecret || body.password !== loginPassword) {
    const count = (record && now >= record.lockedUntil ? 0 : record?.count ?? 0) + 1;
    attempts.set(ip, {
      count,
      lockedUntil: count >= MAX_ATTEMPTS ? now + LOCKOUT_MS : 0,
    });
    return NextResponse.json({ error: "Wrong password" }, { status: 401 });
  }

  attempts.delete(ip);

  const value = "authenticated";
  const signature = await hmacSign(value, authSecret);
  const cookieValue = `${value}.${signature}`;

  const response = NextResponse.json({ success: true });
  response.cookies.set("site-auth", cookieValue, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });

  return response;
}
