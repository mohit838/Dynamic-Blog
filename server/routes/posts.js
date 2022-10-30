import express from "express";
import { addPost } from "./../controllers/posts.js";
const router = express.Router();

router.post("/create-post", addPost);

module.exports = router;
