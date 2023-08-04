import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Entete from "../components/Entete";
import Step from "../components/Step";
import Ingredient from "../components/Ingredient";

function App() {
  const [champs, setChamps] = useState("");
  const [recette, setRecette] = useState(null);
  const [requette, setRequette] = useState({
    name: "",
    step: { 1: "" },
    difficulty: "",
    cooking_time: "",
    time: "",
    nutrition: {},
    initial_portion: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/recipe")
      .then((res) => setRecette(res.data));
  }, []);

  const handlechamps = (e) => {
    setChamps(e.target.value);
  };

  const handlePost = () => {
    axios
      .post("http://localhost:5000/recette", requette)
      .then((res) => console.log("post ok "))
      .catch((err) => console.error(err));
  };

  console.log(requette);
  console.log(champs);

  return (
    <>
      <div id="form">
        <div action="">
          <Entete
            setRequette={setRequette}
            requette={requette}
            handlechamps={handlechamps}
            champs={champs}
          />

          <Step
            requette={requette}
            handlechamps={handlechamps}
            setRequette={setRequette}
            champs={champs}
            setChamps={setChamps}
          />
          <Ingredient />
        </div>

        <div>
          <button type="button" onClick={handlePost}>
            Envoyer la recette{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
