import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { PropTypes } from 'prop-types';

export const GifGrid = ({ category }) => {

  // Primera utilización de un custom hook
  const { images, isLoading } = useFetchGifs(category);


  return (
    <>
      <h3>{category}</h3>

      {
        isLoading && (<h2>Cargando...</h2>)
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

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}