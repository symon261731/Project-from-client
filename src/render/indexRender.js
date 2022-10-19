import express from 'express';
import { Product } from '../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
//   const entries = await Entry.findAll({ order: [['id', 'DESC']] });
  const productDB = await Product.findAll();
  console.log(productDB);
  const initState = { productDB };
  res.render('Layout', { initState });
});

router.get('/reg', async (req, res) => {
  res.render('Layout', { initState });
});

export default router;
