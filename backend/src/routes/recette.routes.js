import express from "express";
import {
  browse,
  findOne,
  createOne,
  removeOne,
  modifyOne,
} from "../controller/recette.controler.js";

const router = express.Router();

router.get("/", browse);
router.get("/:id", findOne);
router.post("/", createOne);
router.delete("/:id", removeOne);
router.put("/:id", modifyOne);

export default router;
