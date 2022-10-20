import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';

const router = express.Router();

router.post('/reg', async (req, res) => {
  // проверка на аватарку
  if (req.body.avatar.includes('https://www') === false) { req.body.avatar = 'https://www.meme-arsenal.com/memes/fefac21eda463aa9a307c7cfdbea1bee.jpg'; }

  const {
    login,
    email,
    password,
    firstname,
    lastname,
    phone,
    city,
    avatar,
  } = req.body;

  // проверка на пароль
  if (!email || !password || !login) return res.sendStatus(400);

  const hashPassword = await bcrypt.hash(password, 10);

  try {
    if (await User.findOne({ where: { email } })) return res.json({ status: 400, message: 'такой email уже занят' });
    const newUser = await User.create({
      login,
      email,
      password: hashPassword,
      firstname,
      lastname,
      phone,
      city,
      avatar,
    });
    req.session.user = {
      id: newUser.id,
      email: newUser.email,
      firstname: newUser.firstname,
      lastname: newUser.lastname,
      phone: newUser.phone,
      city: newUser.city,
      avatar: newUser.avatar,
    };

    res.json({
      id: newUser.id,
      email: newUser.email,
      firstname: newUser.firstname,
      lastname: newUser.lastname,
      phone: newUser.phone,
      city: newUser.city,
      avatar: newUser.avatar,
    });
  } catch (err) {
    console.error(err);
  }
});

router.post('/auth', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({ message: 'email or password not valid' });
  try {
    const userFromDb = await User.findOne({ where: { email } });
    if (!userFromDb) return res.status(400).json({ message: 'email not found' });
    const isValid = await bcrypt.compare(password, userFromDb.password);

    if (!isValid) return res.status(400).json({ message: 'email or password is invalid' });

    req.session.user = { id: userFromDb.id, email: userFromDb.email };
    res.json({ id: userFromDb.id, email: userFromDb.email });
  } catch (err) {
    console.error(err);
  }
});

router.get('/auth/logout', async (req, res) => {
  res.clearCookie('user_sid'); // Удалить куку
  req.session.destroy(); // Завершить сессию
  res.sendStatus(200);
});

export default router;
