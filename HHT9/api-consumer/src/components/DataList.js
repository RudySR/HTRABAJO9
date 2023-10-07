import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function DataList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Reemplaza 'TU_API_KEY' con la API key que obtuviste de TMDb.
    const apiKey = '01c5a45b93e5979ed8c9b91cbbb6338b';

    // URL de la API de TMDb para obtener películas populares.
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es`;

    axios.get(apiUrl)
      .then((response) => {
        setMovies(response.data.results);
        console.log(response.data.results); // Agrega esta línea
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API:', error);
      });
  }, []);

  return (
    <Container>
      <h1>Películas Populares</h1>
      <Row>
        {movies.map((movie) => (
          <Col key={movie.id} md={4} style={{ marginBottom: '10px' }}>
            <Link to={`/data-details/${movie.id}`}> {/* Ruta a la página de detalles */}
              <Card>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  onError={(e) => {
                    e.target.src = 'URL_DE_LA_IMAGEN_DE_MARCADOR_DE_POSICIÓN'; // Reemplaza con la URL de tu imagen de marcador de posición
                  }}
                />
                {/* Contenido de la película */}
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default DataList;
