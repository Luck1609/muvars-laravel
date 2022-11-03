import nc from "next-connect";
import { User } from "backend/db-models/db";
import auth from "backend/middlewares/auth";


const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    console.log(req);
    res.status(404).end("Page is not found");
  },
})


handler.get('/', async (req, res, next) => {
  const users = await User.findAll();

  console.log('all users', users)

  res.status(200).json({users});

});

handler.get('/register', async (req, res, next) => {
  
    if (req.body.password !== req.body.password_confirmation) throw new Error('Passwords do not match')
    const { password_confirmation, ...payload } = req.body;

    const user = await User.create(payload);

    console.log('Registered user', user)

    res.status(200).json({message: 'Registration successful'});
});


handler.use(auth)

handler.get('/user-data', async (req, res, next) => {
  const user = await User.findOne({where: {email: req.user.email}, raw: true});
// console.log('Authenticated user info', user)
  return res.status(200).json({data: user, message: ''})

});




export default handler