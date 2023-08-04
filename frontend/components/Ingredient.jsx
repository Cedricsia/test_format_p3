import { useState } from "react";
import axios from "axios";

function Ingredient() {
  const [result, setResult] = useState("");
  const [search, setSearch] = useState("");
  const [list, setList] = useState({});

  const handleSearchIng = () => {
    if (search != "") {
      axios
        .get(`http://localhost:5000/test/${search}`)
        .then((res) => setResult(res.data))
        .catch((err) => console.error(err));
    }
  };
  console.log(result);
  console.log(search);
  return (
    <div>
      <div>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button type="button" onClick={handleSearchIng}>
          🔎
        </button>
      </div>
      <div>
        <div id="resultat">
          {result !== "" && (
            <ul>
              {result.map((product, i) => (
                <div key={product.id}>
                  <li>{product.name}</li>
                  <button
                    type="button"
                    onClick={() => {
                      setList({ ...list, [i]: product });
                    }}
                  >
                    ✅
                  </button>
                </div>
              ))}
            </ul>
          )}
        </div>
        <div>
          <div>mes ingredient </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Ingredient;
