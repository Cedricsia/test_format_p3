import db from "./db.js";

export const getAll = () => {
  return db.query("SELECT * FROM test");
};

export const getOne = (id) => {
  return db.query("SELECT * FROM test where id= ?", [id]);
};

export const addOne = ({
  name,
  energy,
  proteins,
  sugar,
  fat,
  fiber,
  unit_id,
}) => {
  return db.query(
    "INSERT INTO test (name, energy, proteins, sugar, fat , fiber, unit_id ) VALUES (?, ?, ?,? ,?,?,?)",
    [name, energy, proteins, sugar, fat, fiber, unit_id]
  );
};

export const deleteOne = (id) => {
  return db.query("DELETE from test WHERE id = ?", [id]);
};

export const updateOne = ({ content, id }) => {
  return db.query("UPDATE test set content = ? WHERE id = ?", [content, id]);
};

export const getOneLike = (content) => {
  return db.query(`SELECT * FROM test  WHERE name LIKE '%${content}%'`);
};
