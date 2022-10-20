import express from 'express';
import { Product } from '../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
//   const entries = await Entry.findAll({ order: [['id', 'DESC']] });
  const productDB = await Product.findAll({});
  const initState = { productDB };
  res.render('Layout', { initState });
});

router.get('/home', async (req, res) => {
  //   const entries = await Entry.findAll({ order: [['id', 'DESC']] });
  const productDB = await Product.findAll({});
  res.json({ productDB });
});

export default router;
