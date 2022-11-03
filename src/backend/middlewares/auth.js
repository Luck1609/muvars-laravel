import { User } from "backend/db-models/db";
import { unstable_getServerSession } from "next-auth"
import { authOptions } from "src/pages/api/auth/[...nextauth]"


export default async function auth(req, res, next) {
    const session = await unstable_getServerSession(req, res, authOptions)
    if (!session) return res.status(401).json({message: 'unauthenticated'})
    const user = await User.findOne({ where: {email: session.user.email}, raw: true});

// console.log('Middlware session', user)
    req.user = user
    
    next()
}


// export default function auth(handler) {
//   return async (req, res) => {
//     const session = await unstable_getServerSession(req, res, authOptions)
//     if (!session) return res.status(401).json({message: 'unauthenticated'})
//     const user = await User.findOne({ where: {email: session.user.email}, raw: true});

// console.log('Middlware session', user)
//     req.user = user
//     return handler(req, res)
//   }
// }

