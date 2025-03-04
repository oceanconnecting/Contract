import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

export function middleware(request: NextRequest) {
  return createMiddleware({
    locales: ['en', 'fr','ar'],
    defaultLocale: ' fr',
  })(request);
}

export const config = {
  matcher: ['/((?!_next|static|favicon.ico).*)'],
};
