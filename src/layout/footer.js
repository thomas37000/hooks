import React from 'react';

import { Button, Nav } from 'react-bootstrap';
import './footer.css';

export default function Footer() {
  return (
    <>
      <Nav className='footerStyle' defaultActiveKey='/home'>
        <a
          href='https://github.com/akabab/starwars-api'
          target='_blank'
          rel='noopener noreferrer'
        >
          Api Star Wars !
        </a>
        <a
          href='https://www.linkedin.com/in/thomas-chalanson/?originalSubdomain=fr'
          target='_blank'
          rel='noopener noreferrer'
        >
          Made by Thomas Chalanson
        </a>
        <a
          href='https://www.linkedin.com/in/thomas-chalanson/?originalSubdomain=fr'
          target='_blank'
          rel='noopener noreferrer'
        >
          linkedin
        </a>
      </Nav>
    </>
  );
}
