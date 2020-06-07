import React from 'react';

import { useHistory } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

export default function NavBar() {
  
  // const location = useLocation();
  // const history = useHistory();

  return (
  <>
    <Nav defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/characters">Characters</Nav.Link>
        <Nav.Link href="/characters/results">Results</Nav.Link>
        <Nav.Link href="/characters/location">Location</Nav.Link>
      </Nav.Item>
    </Nav>
  </>
  );
}