import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

export function middleware(request: NextRequest) {
  return createMiddleware({
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  })(request);
}

export const config = {
  matcher: ['/((?!_next|static|favicon.ico).*)'],
};
