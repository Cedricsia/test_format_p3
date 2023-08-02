import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [test, setTest] = useState(null);
  const [recette, setRecette] = useState(null);
  const [requette, setRequette] = useState({ name: "", step: { 1: "" } });
  const [champs, setChamps] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/ingredient")
      .then((res) => setTest(res.data));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/recette")
      .then((res) => setRecette(res.data));
  }, []);

  const addName = (e) => {
    setRequette({ ...requette, name: e.target.value });
  };

  const handlechamps = (e) => {
    setChamps(e.target.value);
  };

  const addStep = (key, champs) => {
    if (champs.trim() !== "") {
      const newStep = { ...requette.step };
      newStep[key] = champs; /// ca me prend l'objet[(rentre la key (index))] =(cette key a cette valeur) modif(c'est la valeur du state )
      newStep[parseInt(key) + 1] = "";
      setRequette((prev) => ({ ...prev, step: newStep }));
      setChamps("");
    }
  };
  const modifyStep = (index, modif) => {
    if (champs.trim() !== "") {
      const newStep = { ...requette.step };
      newStep[index] = modif;
      setRequette((prev) => ({ ...prev, step: newStep }));
    }
  };
  const handleValid = () => {
    const array = Object.keys(requette.step);
    const currentKey = array.length;
    const newStep = { ...requette.step };
    newStep[currentKey] = champs;
    setRequette((prev) => ({ ...prev, step: newStep }));
  };

  const handlePost = () => {
    axios
      .post("http://localhost:5000/recette", requette)
      .then((res) => console.log("post ok "))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div id="form">
        <form action="">
          <div>
            <label htmlFor="Nom de la recette">Nom de la recette</label>
            <input type="text" onChange={addName} />
          </div>

          <div>
            <div>
              <h1> Etapes </h1>
            </div>
            <div>
              {Object.entries(requette.step).map(([key]) => (
                <div key={key}>
                  <label htmlFor="etape"> etape{key}</label>
                  <input type="text" name="" id="" onChange={handlechamps} />
                  <button
                    type="button"
                    onClick={() => {
                      addStep(key, champs);
                    }}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      modifyStep(key, champs);
                    }}
                  >
                    ⚙️
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div>
            <button type="button" onClick={handleValid}>
              Valider les etapes
            </button>
          </div>
          <div>
            <button onClick={handlePost}> Envoyer la recette </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
