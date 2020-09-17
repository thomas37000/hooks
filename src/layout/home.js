import React from 'react';

import {Carousel,Col, Container, Row, Image} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import Alliance from '../components/img/the alliance.jpg';
import moon from '../components/img/moon.jpg';
import fight from '../components/img/fight.jpg';
import lego from '../components/img/lego.jpeg';


//import bgHome from './home.css'; 
// import { Link, useHistory } from 'react-router-dom';
// import { Card, CardDeck } from 'react-bootstrap';

export default function HomePage() {
  
  return (
  <>
  <Carousel>
  <Carousel.Item>
    <img
      className="theAlliance"
      src={Alliance}
      alt="The Alliance"
    />
    <Carousel.Caption>
    <Link to="/alliance/:id">The Alliance</Link>
      <p>Discover all characters from the Alliance.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={moon}
      alt="The Dark Side"
    />
    <Carousel.Caption>
      <Link to="/theDarkside/:id">The Dark Side</Link>
      <p>Choose a caracter from the Dark Side.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={fight}
      alt="All the Movies from the saga Star Wars"
    />

    <Carousel.Caption>
    <Link to="/movies/:id">All the Movies from the saga Star wars</Link>
      <h3>All the Movies from the saga Star wars</h3>
      <p>Discover all the saga from the beginnig to the end.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={lego}
      alt="Star Wars video games"
    />

    <Carousel.Caption>
    <Link to="/video-games/:id">All the Video Games from the saga Star wars</Link>
      <h3>All the Video Games from the saga Star wars</h3>
      <p>Discover all the video games about Star Wars.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  {/* <Image src={Background} fluid /> */}
    {/* <img classNames={bgHome} src={Background} style={{width:'70%'}} alt="Star Wars background"/> */}
  
    <Container>
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
  <Row>
    <Col xs={12} md={8}>
      lorem ipsum
      lorem import {  } from "module";
      console.log();
      lorem ipsum 
    </Col>
    <Col xs={6} md={4}>
    The Col breakpoint props also have a more complicated object prop form: for specifying offsets and ordering effects.

You can use the order property to control the visual order of your content.


    </Col>
  </Row>

  {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
  <Row>
    <Col xs={6} md={4}>
    The Col breakpoint props also have a more complicated object prop form: for specifying offsets and ordering effects.

You can use the order property to control the visual order of your content.


    </Col>
    <Col xs={6} md={4}>
    The Col lets you specify column widths across 5 breakpoint sizes (xs, sm, md, lg, and xl). For every breakpoint, you can specify the amount of columns to span, or set the prop to <Col lg={true} /> for auto layout widths
    </Col>
    <Col xs={6} md={4}>
      lorem ipsum ne marche pas ??????????
    </Col>
  </Row>

  {/* Columns are always 50% wide, on mobile and desktop */}
  <Row>
    <Col xs={6}>Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.</Col>
    <Col xs={6}>Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.</Col>
  </Row>
</Container>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  </>
  );
}

