import { Agency } from "backend/db-models/db";
import { getMethod } from "backend/helper";

export default async function handler(req, res) {
  try {
    getMethod(req.method, ['GET']);

    const agencies = Agency.findAll();
    res.status(200).json({agencies});
  } catch({message}) {
    res.status(400).json({message})
  }
}