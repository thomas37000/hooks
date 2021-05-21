import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap';

import SideBar from './Sidebar';
import './Sidebar.css';

export default function NavBar() {
  const [on, setOn] = useState(false);

  const handleOn = () => {
    setOn(!on);
  };
  const history = useHistory();

  const randomNumber = () => {
    const random = Math.floor(Math.random() * 89);
    return random;
  };

  return (
    <>
      <Nav defaultActiveKey='/home'>
        <Nav.Item>
          <Nav.Link href='/'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/allCharacters'>All Characters</Nav.Link>
        </Nav.Item>

        <aside className={on ? 'to-right' : ''}>
          <div onClick={handleOn}>
            <i className='fa fa-cog fa-2x' />
          </div>
        </aside>
        {on && <SideBar openClass='open' />}

        {/* <Nav.Item>
        <Button variant="success" onClick={() => history.push(`/alliance/${randomNumber()}`)}>The Alliance</Button>
      </Nav.Item>
      <Nav.Item>
        <Button variant="dark" onClick={() => history.push(`/theDarkSide/${randomNumber()}`)}>The DarkSide</Button>
      </Nav.Item> */}
        <Nav.Item>
          <Nav.Link eventKey='link-3'>
            <Link to='/alliance/'>The Alliance</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-4'>
            <Link to='/theDarkSide/'>The Dark Side</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-3'>
            <Link to='/movies/'>Star Wars Movies</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-4'>
            <Link to='/video-games/:id'>Star Wars Video Games</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
