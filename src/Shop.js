import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Shop() {
  //same as componentDidMount
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const jsonData = await fetch(
      "https://fortnite-api.theapinetwork.com/items/popular"
    ).then((d) => d.json());
    setItems(jsonData.entries[1].entries);
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <h1 key={item.identifier}>
            <Link to={`/shop/${item.identifier}`}>{item.name}</Link>
          </h1>
        );
      })}
    </div>
  );
}

export default Shop;
