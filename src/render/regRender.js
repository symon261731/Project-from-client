import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const initState = {};
  res.render('Layout', { initState });
});

router.get('/getInfo', (req, res) => {
  res.redirect('Layout');
});

router.post('/getInfo', async (req, res) => {
  const {
    login, email, password, firstname, lastname, phone, city, avatar,
  } = req.body;
  User.create({
    login,
    email,
    password: await bcrypt.hash(password, 10),
    firstname,
    lastname,
    phone,
    city,
    avatar,
  });
  res.sendStatus(200);
});

export default router;
