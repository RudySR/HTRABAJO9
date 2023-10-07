import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';

function DataDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Reemplaza 'TU_API_KEY' con la API key que obtuviste de TMDb.
    const apiKey = '01c5a45b93e5979ed8c9b91cbbb6338b';

    // URL de la API de TMDb para obtener los detalles de una película por su ID.
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es`;

    axios.get(apiUrl)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener detalles de la película:', error);
      });
  }, [id]);

  if (!movie) {
    return <p>Cargando...</p>;
  }

  return (
    <Container>
      <h1>{movie.title}</h1>
      <Card className="mb-3">
        <Card.Img variant="top"
  src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} // Cambia 'w500' por 'w185'
  alt={movie.title}
  onError={(e) => {
    e.target.src = 'URL_DE_LA_IMAGEN_DE_MARCADOR_DE_POSICIÓN'; // Reemplaza con la URL de tu imagen de marcador de posición
  }} className="custom-image-class" />
        
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.overview}</Card.Text>
          <p>Fecha de lanzamiento: {movie.release_date}</p>
          <p>Calificación promedio: {movie.vote_average}</p>
          {/* Agrega más detalles según tus necesidades */}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default DataDetails;
