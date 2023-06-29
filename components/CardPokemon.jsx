'use client'

import Link from "next/link";
import React, { useState, useEffect } from 'react';
import Loading from "./Loading";

function ButtonWithEffect({url, selecciones,setSelecciones }) {
  const [hideContent, setHideContent] = useState(selecciones);
  const [dataPokemon, setDataPokemon] = useState([]);
  const [imagePokemon, setImagePokemon] = useState([]);
  const [loading, setLoading] = useState(true);


  async function getData(){
    const response = await fetch(url);
    const data = await response.json();
    setDataPokemon(data);
    setImagePokemon(data.sprites.front_default)
    setLoading(false);
  }


  useEffect(() => {
    getData();
  }, []);


  // console.log(dataPokemon)
  // console.log(imagePokemon)
  
  const cambiar = () => {
      if(!selecciones || selecciones.length >4){
        console.log("no exiset");
        return;
     }
    setSelecciones([...selecciones, url])
    setHideContent(!hideContent);
  };

  return (
    <div className={`cardPokemon `}>
      {loading ? (
        
          <Loading />
      ) : (
        hideContent ? (
            <img src="/logo.png" alt="" onClick={cambiar} className={`imagen `} />
        ) : (
          <Link href={`/info/${dataPokemon.id}`}>
            <div>
              <img src={imagePokemon} alt="Spiderman" />
            </div>
            <h1>{dataPokemon.name}</h1>
            <p>{dataPokemon.id}</p>
          </Link>
        )
      )}
    </div>
  );
}


export default ButtonWithEffect;