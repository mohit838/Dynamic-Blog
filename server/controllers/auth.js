import bcrypt from 'bcrypt';
import { db } from '../db.js';

export const register = (req, res) => {
  const q = 'SELECT * FROM users WHERE email = ? OR username = ?';

  db.query(q, [res.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(400).json('User already exits!!');
  });

  const salt = bcrypt.genSaltSync(10);
  const hashPass = bcrypt.hashSync(req.body.password, salt);
};

export const login = (req, res) => {
  res.json('Auth!');
};

export const logOut = (req, res) => {
  res.json('Auth!');
};
