import bcrypt from "bcrypt";
import { db } from "../db.js";

export const register = (req, res) => {
  console.log(req.body);

  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(q, [res.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(400).json("User already exits!!");

    // Hashing Password
    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";

    const values = [req.body.username, req.body.email, hashPass];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      if (data.length) return res.status(200).json("User has been created!!");
    });
  });
};

export const login = (req, res) => {
  res.json("Auth!");
};

export const logOut = (req, res) => {
  res.json("Auth!");
};
