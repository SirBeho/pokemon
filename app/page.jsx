"use client";
import React, { useState, useEffect } from "react";
import CardPokemon from "@/components/CardPokemon";

export default function Home() {
  const [data, setData] = useState([]);
  const [selecciones, setSelecciones] = useState([]);

  const getData = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=5000"
    );
    let data = await response.json();
    data = data.results;
    data = data.sort(() => Math.random() - 0.5);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="contenedor">
      <h1 style={{ color: "white", fontSize: "60px" }}>Poke-dex</h1>
      <div>
        {selecciones.map((url, index) => (
          <CardPokemon key={index} url={url} selecciones={false} />
        ))}
      </div>

      <h1 style={{ color: "white", fontSize: "60px" }}>Elije Bien</h1>

      <div>
        {data.map((el, index) => (
           
          <CardPokemon
            key={index}
            url={el.url}
            setSelecciones={setSelecciones}
            selecciones={selecciones}
          />

        ))}
      </div>
    </div>
  );
}
