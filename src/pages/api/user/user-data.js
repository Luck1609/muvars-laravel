import { User } from "backend/db-models/db";
import auth from "backend/middlewares/auth";

const handler = async (req, res) => {
  try {
    const user = await User.findOne({where: {email: req.user.email}, raw: true});
// console.log('Authenticated user info', user)
    return res.status(200).json({data: user, message: ''})
  } catch({message}) {
    res.status(400).json({message})
  }
}

export default auth(handler);