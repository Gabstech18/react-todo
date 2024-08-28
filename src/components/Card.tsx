//import "./Card.css";

import { useState } from "react";
import Item_list from "./Item_list";

const Card = () => {
  //Functionality
  const [itemContent, setItemContent] = useState([]);
  const handleItemContent = () => {
    const useContent = [...itemContent, []];
    setItemContent(useContent);
  };

  //Elements
  return (
    <>
      <div className="card-title">
        <h1>To Do Today</h1>
      </div>

      <div className="card-quote">
        <p className="quote-content">
          Give me six hours to chop down a tree and I will spend the first four
          sharpening the axe.
        </p>
        <p className="quote-author">Abraham Lincoln</p>
      </div>

      <div className="card-items">
        {/* Aquí puedes agregar la lógica para mostrar los ítems */}
        <Item_list>Hola 1</Item_list>
        <Item_list>Hola 2</Item_list>
        <Item_list>Hola 3</Item_list>
        <Item_list>Hola 4</Item_list>
      </div>

      <div className="card-item-creator">
        <input
          type="text"
          id="item-input"
          name="item"
          placeholder="Add a new item"
        />
        <select
          name="card-item-priority-selector"
          id="card-item-priority-selector"
        >
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
        </select>
        <button>Add</button>
      </div>
    </>
  );
};

export default Card;
