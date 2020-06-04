import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import Character from "./Character";

function CharacterList() {
  const [characters, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    const getCharacter = async () => {
      try {
        const res = await axios.get("https://rickandmortyapi.com/api/character");
        setCharacter(res.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getCharacter();
  }, []);

  const deleteGame = (id) => {
    const filteredGames = characters.filter((character) => character.id !== id);

    setCharacter(filteredGames);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <Container>
      <Row className="py-5">
        <Col>
          <Button block color={filter ? "success" : "warning"} onClick={() => setFilter(!filter)}>
            {filter ? "All games" : "Filter"}
          </Button>
        </Col>
      </Row>
      <Row>
        {characters
          .filter((character) => (filter ? characters.species === "Human" : true))
          .map((character) => (
            <Character {...character} key={character.id} handleClick={() => deleteGame(character.id)} />
          ))}
      </Row>
    </Container>
  );
}

export default CharacterList;