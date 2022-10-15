import { useState, useEffect } from "react";
import { GifItem } from "./GifItem";
// import { getGifs } from "../helpers/getGifs"
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

  // Primera utilización de un custom hook

  const { images, isLoading } = useFetchGifs(category);


  return (
    <>
      <h3>{category}</h3>

    {
      isLoading && ( <h2>Cargando...</h2> )
    }

      <div className="card-grid">
        {
          images.map((image) =>
            <GifItem
              key={image.id}
              {...image} //Esparcir image: Todas las propiedades que vengan de image las estoy esparciendo en GifItem
            />
          )
        }
      </div>
    </>
  )
}
