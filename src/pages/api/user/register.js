import { User } from "backend/db-models/db";

export default async function handler(req, res) {
  try {
    console.log('Request body', req.body)
    if (req.body.password !== req.body.password_confirmation) throw new Error('Passwords do not match')
    const { password_confirmation, ...payload } = req.body;

    const user = await User.create(payload);

    console.log('Registered user', user)

    res.status(200).json({message: 'Registration successful'});
  } catch({message}) {
    res.status(400).json({message});
  }
  
}