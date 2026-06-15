import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.hostname !== "www.useclarifyhome.us") {
    return NextResponse.next();
  }

  const destination = request.nextUrl.clone();
  destination.hostname = "useclarifyhome.us";
  destination.protocol = "https:";
  destination.port = "";

  return NextResponse.redirect(destination, 308);
}
