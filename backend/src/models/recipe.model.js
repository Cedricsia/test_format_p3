import db from "./db.js";

export const getAll = () => {
  return db.query("SELECT * FROM recipe");
};

export const getOne = (id) => {
  return db.query("SELECT * FROM recipe where id= ?", [id]);
};

export const addOne = ({ name, step, difficulty, cooking_time, time }) => {
  const stepJSON = JSON.stringify(step); // Convertir l'objet step en chaîne JSON valide

  return db.query(
    "INSERT INTO recipe (name, step, difficulty, cooking_time, time) VALUES (?, ?, ?, ?, ?)",
    [name, stepJSON, difficulty, cooking_time, time]
  );
};

export const deleteOne = (id) => {
  return db.query("DELETE from recipe WHERE id = ?", [id]);
};

export const updateOne = ({ name, step, id }) => {
  const stepJSON = JSON.stringify(step);

  return db.query("UPDATE recipe set name = ?,step =? WHERE id = ?", [
    name,
    stepJSON,
    id,
  ]);
};
