import db from "./db.js";

export const getAll = () => {
  return db.query("SELECT * FROM ingredient");
};

export const getOne = (id) => {
  return db.query("SELECT * FROM ingredient where id= ?", [id]);
};

export const addOne = ({ name, categorie, nutrition }) => {
  const stepJSON = JSON.stringify(nutrition); // Convertir l'objet step en chaîne JSON valide

  return db.query(
    "INSERT INTO ingredient (name, categorie, nutrition) VALUES (?, ?, ?)",
    [name, categorie, stepJSON]
  );
};

export const deleteOne = (id) => {
  return db.query("DELETE from ingredient WHERE id = ?", [id]);
};

export const updateOne = ({ content, id }) => {
  return db.query("UPDATE ingredient set content = ? WHERE id = ?", [
    content,
    id,
  ]);
};
