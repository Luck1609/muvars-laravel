import { User } from "backend/db-models/db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";


export const authOptions = ({
  session: {
    strategy: 'jwt',  
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize({ email, password }) {
        // Add logic here to look up the user from the credentials supplied
        const user = await User.scope('showPassword').findOne({ where: { email: email } });
        console.log('Authorization credentaials', password, email)
        const authencticated = user.authenticate(password)

        if (user && authencticated) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          console.log("User not found in records");
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  pages: {
    signIn: '/',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  callbacks: {
    signIn: async ({user, account, profile, credentials}) => {
      return true
    },
    redirect: async ({url, baseUrl}) => {
      // console.log('Url value', url, 'base url', baseUrl)
      return baseUrl
    },
    jwt: async ({account, ...params}) => {
      // console.log('Decoded token values', account, params)
      const data = params.user?.dataValues ?? params.token;

      let username =  {};
      if (account?.provider !== 'credentials') {
        const names = data.name.split(' ');
        username.lastname = names.pop()
        username.firstname = names.join() 
      }
      const [user, created] = await User.findOrCreate({
        where: {email: data.email},
        defaults: username
      });

      const {firstname, lastname, email, isAdmin, agencyId} = user;


      return {name: `${firstname} ${lastname}`, email, isAdmin, agencyId}
    },
  },
});


export default NextAuth(authOptions);