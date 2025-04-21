export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value
  
    // Redirect if not authenticated
    if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
      const loginUrl = request.nextUrl.clone()
      loginUrl.pathname = '/login'
      return NextResponse.redirect(loginUrl)
    }
  
    return NextResponse.next()
  }