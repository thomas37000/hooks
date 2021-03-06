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
      {/* <Nav.Item>
        <Nav.Link eventKey="link-1"><Link to="/character/1">Luke Skywalker</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2"><Link to="/character/5">Leia Organa</Link></Nav.Link>
      </Nav.Item> */}
      {/* <Nav.Item>
        <Button variant="light" onClick={() => history.push(`/character/${randomNumber()}`)}>Random</Button>
      </Nav.Item> */}
      <Nav.Item>
        <Button variant="success" onClick={() => history.push(`/alliance/${randomNumber()}`)}>The Alliance</Button>
      </Nav.Item>
      <Nav.Item>
        <Button variant="dark" onClick={() => history.push(`/theDarkSide/${randomNumber()}`)}>The DarkSide</Button>
      </Nav.Item>
      {/* <Nav.Item>
        <Nav.Link eventKey="link-3"><Link to="/alliance/">The Alliance</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4"><Link to="/theDarkSide/">The Dark Side</Link></Nav.Link>
      </Nav.Item> */}
      <Nav.Item>
        <Nav.Link eventKey="link-3"><Link to="/movies/:id">Star Wars Movies</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4"><Link to="/video-games/:id">Star Wars Video Games</Link></Nav.Link>
      </Nav.Item>
    </Nav>
  </>
  );
}