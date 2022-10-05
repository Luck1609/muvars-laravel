import { User } from "backend/db-models/db";

export default async function handler(req, res) {
  const users = await User.findAll();

  console.log('all users', users)

  res.status(200).json({users});
}