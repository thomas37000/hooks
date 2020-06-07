import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import Axios from "axios";

function Resultats() {
  const [resultats, setResultat] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getRick = async () => {
      try {
        const res = await Axios.get("https://rickandmortyapi.com/api/character/");
        // eslint-disable-next-line eqeqeq
        const results = res.data.find((rick) => rick.id == id).results;
        setResultat(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getRick();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <Container>
      <Row>
        {resultats.map((i) => {
          return (
            <Col xs={6} key={i.id} cilassName="py-2">
              <img src={i.location.image} alt="" className="img-fluid" />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Resultats ;