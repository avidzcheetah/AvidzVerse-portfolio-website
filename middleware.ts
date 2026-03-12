import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Define paths that are protected
  const isProtectedPath = path.startsWith('/admin') && path !== '/admin/login';

  const authCookie = request.cookies.get('avidz_admin_session');

  // If trying to access protected path without cookie, redirect to login
  if (isProtectedPath && !authCookie?.value) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // If trying to access login page while already authenticated, redirect to dashboard
  if (path === '/admin/login' && authCookie?.value) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/admin/:path*'],
};
