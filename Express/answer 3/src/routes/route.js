import express from "express";
import {
  addBlog,
  getAllBlog,
  getBlog,
  updateBlog,
  deleteBlog,
} from "../controller/controller.js";

const router = express.Router();

router.post("/", addBlog);
router.get("/", getAllBlog);
router.get("/:id", getBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;