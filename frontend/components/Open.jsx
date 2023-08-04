import React, { useState } from "react";

function Open() {
  const [name, setName] = useState("");
  const handleSearch = () => {
    if (categorie !== "" && name !== "") {
      axios
        .get(
          `https://fr.openfoodfacts.org/cgi/search.pl?action=process&search_terms=${name}&tag_0=${categorie}&json=1`
        )
        .then((res) => setResult(res.data.products))
        .catch((err) => console.error(err));
    }
    setOk(true);
  };
  return (
    <div>
      <div>
        <div>Ingredient</div>
        <div>
          <select name="" id="" onChange={(e) => setCategorie(e.target.value)}>
            <option value="">--choissiez une option--</option>
            <option value="apprentis">legumes</option>
          </select>
          <input type="text" onChange={(e) => setName(e.target.value)} />
          <button type="button" onClick={handleSearch}>
            🔎
          </button>
        </div>
        <div>
          {ok && (
            <div id="resultat">
              {result.map((product) => (
                <div key={product.id}>
                  <img src={product.image_front_small_url} alt="" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Open;
