import { Router } from 'express';
import { getPosts, createPost, deletePost } from "../controllers/postsController.js";

const router = Router();

router.get("/posts", getPosts);
router.post("/posts", createPost);
router.delete("/posts/:id", deletePost);

export default router;