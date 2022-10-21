import express from 'express';
// import bcrypt from 'bcrypt';
import { User } from '../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const initState = {};
  res.render('Layout', { initState });
});

router.post('/:id', async (req, res) => {
  try {
    const userId = Number(req.params.id);
    const newProfile = req.body;
    // console.log(req.body);
    await User.update(
      {
        firstname: newProfile.profile.firstName ?? '',
        city: newProfile.profile.city ?? '',
        phone: newProfile.profile.phone ?? '',
      },
      { where: { id: userId } },
    );
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

export default router;
