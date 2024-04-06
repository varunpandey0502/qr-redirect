import { NextResponse, NextRequest } from "next/server";
import redirectDataJson from "./redirectData.json";

type RedirectEntry = {
  destination: string;
};

const redirectData: Record<string, RedirectEntry> = redirectDataJson;

// Middleware function to handle redirects
export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the current path is in the redirect data
  const data: RedirectEntry = redirectData[pathname];

  // If a redirect is found, redirect to the destination
  if (data) {
    return NextResponse.redirect(data.destination, { status: 301 });
  }

  // No redirect found, continue without redirecting
  return NextResponse.next();
}
