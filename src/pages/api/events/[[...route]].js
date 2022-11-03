import { Event } from "backend/db-models/db";
import multer from "multer";
import path from "path";
import fs from "fs";
import uniqueSlug from "unique-slug";
import { appConfig } from "backend/helper";
import auth from "backend/middlewares/auth";
import { CREATED } from "backend/db-models/app-messages";
import dayjs from "dayjs";

export const config = {
  api: {
    bodyParser: false
  }
}

// const filePath = `${__dirname}./../../../../../public/uploads`

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const filePath = path.join(__dirname, `./../../../../../public/uploads/${req.user.email}`)
    fs.mkdirSync(filePath, {recursive: true} ,err => console.log('Path creation error', err))
    cb(null, filePath);
  },
  filename: function (req, file, cb) {
    const nameWithExt = file.originalname.split('.')
    nameWithExt.pop();
    const imageName = nameWithExt;
    
    cb(null, `${imageName}${path.extname(file.originalname)}`)
  }
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    cb(null, () => {
      console.log('File size', file)
      // const types = /image\/jpg|image\/jpeg|image\/png/;
      // const types = 
      return /me/.test(file.mimetype)
    })
  }
});

const fileUpload = upload.single('flyer');

const handler = appConfig;

handler.use(auth);
handler.use(fileUpload);

//'callcenter@sltf.gov.gh'
handler
  .post(async (req, res) => {
    // console.log("store event", req);
    const filepath = ((req.file.path.split(`${process.cwd()}\\public`)).pop()).split('\\').join('/')
    // console.log('Image file path', filepath)
    // console.log(req.body, req.file)
    const time = new Date(req.body.time.replace(' ', 'T'));
    
    console.log('Event time', time)
    const event = Event.create({
      ...req.body,
      time,
      slug: uniqueSlug(req.body.name),
      flyer: filepath
    });

    res.status(200).json({data: '', message: `Event ${CREATED}`});
  })
  .get(async (req, res) => {
    const events = await Event.findAll({ raw: true });

    res.status(200).json({ data: events, message: "" });
  });

export default handler;
