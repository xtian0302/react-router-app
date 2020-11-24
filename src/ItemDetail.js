import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function ItemDetail({ match }) {
  //same as componentDidMount
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({ images: {} });
  const fetchItem = async () => {
    const jsonData = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    ).then((d) => d.json());
    console.log(jsonData.data.item);
    setItem(jsonData.data.item);
  };
  return (
    <div>
      <h1>{item.name}</h1>
      <img
        src={item.images.background}
        alt=""
        style={{ backgroundColor: "black" }}
      />
    </div>
  );
}

export default ItemDetail;
