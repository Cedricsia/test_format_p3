import db from "./db.js";

export const getAll = () => {
  return db.query("SELECT * FROM recettes");
};

export const getOne = (id) => {
  return db.query("SELECT * FROM recettes where id= ?", [id]);
};

export const addOne = ({ name, step }) => {
  const stepJSON = JSON.stringify(step); // Convertir l'objet step en chaîne JSON valide

  return db.query("INSERT INTO recettes (name, step) VALUES (?, ?)", [
    name,
    stepJSON,
  ]);
};

export const deleteOne = (id) => {
  return db.query("DELETE from recettes WHERE id = ?", [id]);
};

export const updateOne = ({ name, step, id }) => {
  const stepJSON = JSON.stringify(step);

  return db.query("UPDATE recettes set name = ?,step =? WHERE id = ?", [
    name,
    stepJSON,
    id,
  ]);
};
