import React from 'react';

import { Button, Nav } from 'react-bootstrap';
import footer from './footer.css'; 


export default function Footer() {
  
  return (
  <>
    <Nav className={footer.footerStyle} defaultActiveKey="/home">
      <a href="https://github.com/akabab/starwars-api" target="_blank">Api Star Wars !</a>
      <a>Made by Thomas Chalanson</a>
      <a href="https://www.linkedin.com/in/thomas-chalanson/?originalSubdomain=fr">linkedin</a>
    </Nav>
  </>
  );
}