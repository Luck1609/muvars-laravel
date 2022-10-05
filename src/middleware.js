import { withAuth } from "next-auth/middleware";
import { getToken } from "next-auth/jwt"
// import { unstable_getServerSession } from "next-auth/next"
// import { NextRequest, NextResponse } from "next/server";

export default withAuth(
 async function middleware(req, res) {
    // const user_token = await getToken({req})
  // console.info('Middlwarea cookies', req.cookies)
  // console.info('Middlwarea cookies', req.cookies.response.cookies)
  // console.info('Middlwarea cookies', Object.values(req.cookies.response.cookies))

    // return NextResponse

        // console.log('Middleware function token', user_token)
  //   // return res.redirect('/')
  }
  ,
  {
    callbacks: {
      async authorized({token}) {
        // token = "Yo fish!"
        // console.log('Callback middleware token', token)
        return true
      }
    }
  }
)


export const config = {
  matcher: [
    '/',
    '/management/dashboard',
    '/management/tickets/pending',
    '/management/schedule',
  ]
}