import bcrypt from "bcrypt";
import { db } from "../db.js";

export const register = (req, res) => {
  console.log(req.body);

  const selectQuery = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(selectQuery, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length)
      return res.status(400).json({ error: "User already exists!" });

    // Hashing Password
    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(req.body.password, salt);

    const insertQuery =
      "INSERT INTO users(`username`, `email`, `password`) VALUES (?)";

    const values = [req.body.username, req.body.email, hashPass];

    db.query(insertQuery, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.affectedRows > 0)
        return res.status(200).json({ message: "User has been created!" });
    });
  });
};

export const login = (req, res) => {
  res.json("Auth!");
};

export const logOut = (req, res) => {
  res.json("Auth!");
};
