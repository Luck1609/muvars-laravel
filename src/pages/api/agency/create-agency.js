import { CREATED } from "backend/db-models/app-messages";
import { Agency } from "backend/db-models/db"
import auth from "backend/middlewares/auth";
import dayjs from "dayjs";

const handler = async (req, res) => {
  try {
    const starting_hour = new Date(dayjs(`2022-09-16 ${req.body.starting_hour}`))
    const closing_time = new Date(dayjs(`2022-09-16 ${req.body.closing_time}`))
    const agency = await Agency.create({...req.body, starting_hour, closing_time});

    agency.setUsers(req.user);
    res.status(200).json({message: `Agency ${CREATED}`})
  } catch({message}) {
    res.status(400).json({message})
  }
}

export default auth(handler)