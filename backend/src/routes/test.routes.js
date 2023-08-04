import express from "express";
import {
  browse,
  findOne,
  createOne,
  removeOne,
  modifyOne,
  findOneLike,
} from "../controller/test.controler.js";

const router = express.Router();

router.get("/", browse);
router.get("/:content", findOneLike);
router.get("/:id", findOne);
router.post("/", createOne);
router.delete("/:id", removeOne);
router.put("/:id", modifyOne);

export default router;
