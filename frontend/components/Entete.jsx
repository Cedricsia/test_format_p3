function Entete({ setRequette, requette, handlechamps, champs }) {
  const addName = (e) => {
    setRequette({ ...requette, name: e.target.value });
  };

  const handledifff = (e) => {
    setRequette({ ...requette, difficulty: e.target.value });
  };
  const handleprepa = () => {
    setRequette({ ...requette, cooking_time: parseInt(champs) });
  };
  const handletime = () => {
    setRequette({ ...requette, time: parseInt(champs) });
  };

  return (
    <div>
      <div>
        <label htmlFor="Nom de la recette">Nom de la recette</label>
        <input type="text" onChange={addName} />
      </div>
      <div>
        <div id="dif">
          <label htmlFor="diff-select">choississez une difficulter:</label>
          <select name="pets" id="pet-select" onChange={handledifff}>
            <option value="">--choissiez une option--</option>
            <option value="apprentis">apprentis</option>
            <option value="cuisinier">cuisinier</option>
            <option value="chef">chef</option>
          </select>
        </div>
        <div id="prepa">
          <input
            onChange={handlechamps}
            type="number"
            name=""
            id=""
            placeholder="temps de prepation en min"
          />
          <button type="button" onClick={handleprepa}>
            ✅
          </button>
        </div>
        <div id="time">
          {" "}
          <input
            onChange={handlechamps}
            type="text"
            name=""
            id=""
            placeholder="temps total en min"
          />
          <button type="button" onClick={handletime}>
            ✅
          </button>
        </div>
      </div>
    </div>
  );
}

export default Entete;
