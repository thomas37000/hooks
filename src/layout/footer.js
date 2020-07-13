import React from 'react';

// import { Link, useHistory } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap';

export default function Footer() {
  
  // const location = useLocation();
  // const history = useHistory();

  // const randomNumber = () => {
  //   const random = Math.floor(Math.random() * 89);
  //   return random;
  // };

  return (
  <>
    <Nav defaultActiveKey="/home">
      <a href="https://github.com/akabab/starwars-api" target="_blank">Api Star Wars !</a>
    </Nav>
  </>
  );
}