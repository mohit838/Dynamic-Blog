import express from "express";
import { addPost } from "./../controllers/posts.js";

const router = express.Router();

router.get("/create-post", addPost);

export default router;
