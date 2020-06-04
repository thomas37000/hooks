import React from 'react';

import { Link, useHistory } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap';

export default function NavBar() {
  
  // const location = useLocation();
  const history = useHistory();

  const randomNumber = () => {
    const random = Math.floor(Math.random() * 89);
    return random;
  };

  return (
  <>
    <Nav defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
    </Nav>
  </>
  );
}