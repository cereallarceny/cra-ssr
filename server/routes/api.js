// This file includes an optional API common in isomorphic applications
// Of course, you should probably spin up your API elsewhere... but you get the idea

import express from 'express';

const router = express.Router();

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

router.get('/', (req, res, next) => {
  res.json({});
});

export default router;
