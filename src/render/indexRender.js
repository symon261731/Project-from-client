import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
//   const entries = await Entry.findAll({ order: [['id', 'DESC']] });
  const initState = {};
  res.render('Layout', { initState });
});

export default router;
