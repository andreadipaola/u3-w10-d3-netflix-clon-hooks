import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const params = useParams();

  console.log(params);

  const fetchMovie = async () => {
    const searchApi = "http://www.omdbapi.com/?apikey=c326b3e7&i=";
    try {
      const response = await fetch(searchApi + params.movieId);

      if (response.ok) {
        const data = await response.json();
        setMovie(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      {movie ? (
        <Container className="pt-20">
          <Row className="justify-content-center">
            <Col md={6}>
              <Card className="bg-custom-dark shadow rounded">
                <Card.Img variant="top" src={movie.Poster} />
                <Card.Body className="p-4">
                  <Card.Text className="text-custom-darkgray mb-1">{movie.Year}</Card.Text>
                  <Card.Title className="text-custom-white display-5 mb-4">{movie.Title}</Card.Title>
                  <Card.Text className="text-custom-darkgray">{movie.Plot}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Container>
      )}
    </>
  );
};

export default MovieDetails;
