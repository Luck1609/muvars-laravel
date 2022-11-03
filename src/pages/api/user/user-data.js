import { User } from "backend/db-models/db";
import { appConfig } from "backend/helper";
import auth from "backend/middlewares/auth";


const handler = appConfig

handler.use(auth)

handler.get(async (req, res) => {
  const user = await User.findOne({where: {email: req.user.email}, raw: true});
  
  return res.status(200).json({data: user, message: 'User info ready'})
})

export default handler;