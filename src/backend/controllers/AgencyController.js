import { CREATED, UPDATED } from "backend/db-models/app-messages";
import { Agency } from "backend/db-models/db";
import dayjs from "dayjs";


export const getAllAgencies = async (req, res) => {
  const agencies = await Agency.findAll();
  res.status(200).json({agencies});
}

export const createAgency = async (req, res) => {
  const starting_hour = new Date(dayjs(`2022-09-16 ${req.body.starting_hour}`))
  const closing_time = new Date(dayjs(`2022-09-16 ${req.body.closing_time}`))
  const agency = await Agency.create({...req.body, starting_hour, closing_time});

  agency.setUsers(req.user);
  res.status(200).json({message: `Agency ${CREATED}`})
}

export const updateAgency = async (req, res) => {
  const starting_hour = new Date(dayjs(`2022-09-16 ${req.body.starting_hour}`))
  const closing_time = new Date(dayjs(`2022-09-16 ${req.body.closing_time}`))
  // const agency = await Agency.create({...req.body, starting_hour, closing_time});

  res.status(200).json({message: `Agency ${UPDATED}`})
}