function Step({ requette, handlechamps, setRequette, champs, setChamps }) {
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

  return (
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
      <div>
        <button type="button" onClick={handleValid}>
          Valider les etapes
        </button>
      </div>
    </div>
  );
}

export default Step;
