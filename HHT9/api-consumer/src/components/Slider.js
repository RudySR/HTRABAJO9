import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider = () => {
  return (
    <Carousel>
      <div>
        <img src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/08/star-wars-2791631.jpg?tf=3840x" alt="Imagen 1" />
        <p className="legend">Explora nuestra selección de películas y encuentra tus favoritas.</p>
      </div>
      <div>
        <img src="https://imagenes.muyinteresante.es/files/composte_image/uploads/2023/06/22/64945b863c28f.jpeg" alt="Imagen 2" />
        <p className="legend">Descubre las últimas películas añadidas a nuestra colección.</p>
      </div>
      
      {/* Agrega más imágenes y descripciones según sea necesario */}
      
    </Carousel>
    
  );
};

export default Slider;
