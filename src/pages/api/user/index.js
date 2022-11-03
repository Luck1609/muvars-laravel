import { User } from "backend/db-models/db";
import { appConfig } from "backend/helper";

// export default async function handler(req, res) {
//   const users = await User.findAll();

//   console.log('all users', users)

//   res.status(200).json({users});
// }

const handler = appConfig;

handler.get(async (req, res, next) => {
  const users = await User.findAll();

  console.log('all users', users)

  res.status(200).json({users});
})

export default handler