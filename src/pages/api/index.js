import connection from "backend/db-models/db";


export default function handler(req, res) {
  connection.DB.sync();
  res.status(200).json();
}