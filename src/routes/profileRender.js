import express from 'express';
// import bcrypt from 'bcrypt';
// import { User } from '../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const initState = {};
  res.render('Layout', { initState });
});

export default router;
