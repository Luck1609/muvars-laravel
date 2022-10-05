import { UPDATED } from "backend/db-models/app-messages";
import { Agency } from "backend/db-models/db"

export default async function handler(req, res) {
  try {
    await Agency.create(req.body);
    
    res.status(200).json({message: `Agency ${UPDATED}`})
  } catch({message}) {
    res.status(400).json({message})
  }
}