import NextAuth from "next-auth";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import User from "backend/models/user";



export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize({ email, password }) {
        // Add logic here to look up the user from the credentials supplied
        // console.log('Authorization credentaials', email, password)
        const user = await User.findOne({where: {email: email}});

        if (user) {
          const check = await bcrypt.compare(password, user.password);
          // const check = await bcrypt.compare(password, user.password);

          console.log('Check is ', user.toJSON())
          if (check) return {name: `${user.toJSON().firstname} ${user.toJSON().lastname}`, email: user.toJSON().email}
          // else return null
          // Any object returned will be saved in `user` property of the JWT
          // return user
        } else {
          console.log('User not found in records')
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  // pages: {
  //   signIn: '/management',
  //   signOut: '/auth/signout',
  //   error: '/auth/error', // Error code passed in query string as ?error=
  //   verifyRequest: '/auth/verify-request', // (used for check email message)
  //   newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  // }
})
