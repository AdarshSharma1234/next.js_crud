//Middleware can be exicuting before routing and
// middleware is use special Authtication in called middleware.

import { NextResponse } from "next/server";

export function middleware(request){
  
    return NextResponse.redirect(new URL("/login",request.url))
}

//Spefic Routing
export const config={
    matcher:["/about/:path*","/student_list/:path*"]
}