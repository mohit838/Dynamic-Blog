import express from "express";
import { addUser } from "./../controllers/user.js";

const router = express.Router();

router.get("/new-user", addUser);

export default router;
