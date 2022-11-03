import { User } from "backend/db-models/db";
import { appConfig } from "backend/helper";

const handler = appConfig

handler.get(async (req, res, next) => {
  if (req.body.password !== req.body.password_confirmation) throw new Error('Passwords do not match')
  
  const { password_confirmation, ...payload } = req.body;

  const user = await User.create(payload);

  console.log('Registered user', user)

  res.status(200).json({message: 'Registration successful'});
})

export default handler;