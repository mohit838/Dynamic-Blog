import express from 'express';
import { logOut, login, register } from './../controllers/auth.js';

const router = express.Router();

router
  .post('/register', register)
  .post('/login', login)
  .post('/logout', logOut);

export default router;
