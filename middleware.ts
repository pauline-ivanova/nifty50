import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Add X-Robots-Tag header for all HTML pages
  // This complements the robots meta tag in HTML
  // Default: index, follow (same as robots meta tag)
  const robotsValue = 'index, follow';
  
  // For API routes and non-HTML content, you might want different values
  if (request.nextUrl.pathname.startsWith('/api/')) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  } else {
    response.headers.set('X-Robots-Tag', robotsValue);
  }
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};

