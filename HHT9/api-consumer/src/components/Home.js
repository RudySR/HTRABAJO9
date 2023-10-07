import React from 'react';
import Slider from './Slider'; // Importa el componente Slider

function Home() {
  return (
    <div>
        <div className="container">
        <h1>Bienvenido a Mi Aplicación</h1>
        <p>EN ESTA PAGINA ENCONTRARAS PELICULAS DE LA API : 
        https://api.themoviedb.org/3/movie/popular?api_key
        </p>
      </div>
      <Slider /> {/* Aquí se agrega el componente Slider */}

      
    </div>
  );
}

export default Home;
