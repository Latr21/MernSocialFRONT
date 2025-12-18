import React, { useState } from "react";

const List = () => {
  const [inputData, setInputData] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!inputData.length) return;

    const text = inputData.trim();

    if (!text) return;

    setList((prevState) => [...prevState, text]);
    setInputData("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}
          placeholder="Ajouter du texte.."
        />
        <button type="submit">+ Ajouter</button>
      </form>
      <ul>
        {list.map((word, idx) => (
          <li key={idx}>{word}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
