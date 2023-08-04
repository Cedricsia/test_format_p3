import {
  getAll,
  getOne,
  addOne,
  deleteOne,
  updateOne,
  getOneLike,
} from "../models/test.model.js";

export const browse = async (req, res) => {
  try {
    const [result] = await getAll();
    res.json(result);
  } catch (e) {
    console.error(e);
    res.status(500).json({ msg: "Erreur" });
  }
};

export const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await getOne(id);
    if (result.length) {
      res.json(result[0]);
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ msg: "Erreur" });
  }
};

export const createOne = async (req, res) => {
  try {
    const content = req.body;
    const [result] = await addOne(content);
    if (result.affectedRows) {
      res.status(201).json({ id: result.insertId, ...content });
    } else {
      res.sendStatus(400);
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ msg: "Erreur" });
  }
};
export const removeOne = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await deleteOne(id);
    if (result.affectedRows) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ msg: "Erreur" });
  }
};
export const modifyOne = async (req, res) => {
  try {
    const content = req.body;
    const { id } = req.params;

    const [result] = await updateOne({ id, ...content });

    if (result.affectedRows) {
      res.json({ id, ...content });
    } else {
      res.sendStatus(400);
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ msg: "Erreur " });
  }
};

export const findOneLike = async (req, res) => {
  try {
    const { content } = req.params;
    const [result] = await getOneLike(content);
    if (result.length) {
      res.json(result);
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ msg: "Erreur" });
  }
};
