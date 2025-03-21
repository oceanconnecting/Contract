import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

export function middleware(request: NextRequest) {
  console.log('Incoming request URL:', request.nextUrl.pathname); // Debugging
  console.log('Detected locale:', request.nextUrl.locale); // Debugging

  return createMiddleware({
    locales: ['fr', 'en','de','es'],
    defaultLocale: 'fr',
  })(request);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
};