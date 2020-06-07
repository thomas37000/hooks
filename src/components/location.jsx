import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import Axios from "axios";

import Character from "./Character";

function Location() {
  const [ names, setName ] = useState([]);
  const [ data, setData ] = useState([]);
  const [ error, setError ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ filter, setFilter ] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getResident= async () => {
      try {
        const res = await Axios.get("https://rickandmortyapi.com/api/location/");
        setName(res.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getResident();
  }, []);


  // useEffect(() => {
  //   const getResident = async () => {
  //     try {
  //       const res = await Axios.get("https://rickandmortyapi.com/api/location/");
  //       // eslint-disable-next-line eqeqeq
  //       setData(res.data);
  //       const where = res.data.find((resident) => resident.id == id).residents;
  //       setName(names);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getResident();
  // }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  const { dimension, name, residents, type } = data;
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
      {names
        .filter((game) => (filter ? game.rating >= 4.5 : true))
        .map((game) => (
          <Character {...name} key={name.id} />
        ))}
    </Row>
  </Container>

    // <Container>
    //   <Row>
    //     {names.map((i) => {
    //       return (
    //         <Col xs={6} key={i.id} cilassName="py-2">
    //           <ul>
    //             <li>{name}</li>
    //             <li>{type}</li>
    //             <li>{dimension}</li>
    //             <li>{residents}</li>  
    //           </ul>
    //         </Col>
    //       );
    //     })}
    //   </Row>
    // </Container>
  );
}

export default Location ;