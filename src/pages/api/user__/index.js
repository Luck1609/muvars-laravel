import { User } from "backend/db-models/db";
import nc from "next-connect";

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})


handler.get(async (req, res, next) => {
  const users = await User.findAll();

  console.log('all users', users)

  res.status(200).json({users});

});

export default handler;