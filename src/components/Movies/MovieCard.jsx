import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardDeck } from 'react-bootstrap';

export default function MovieCard({ data }) {
  const { id } = data;

  return (
    <>
      <div className='MovieCard'>
        <Link to={`/movie/${id}`}>
          <img className='movieCardImg' src={data.image} alt={data.name} />
          <h2 className='movieCardName'>{data.name}</h2>
          <h3>date:{data.date}</h3>
        </Link>
      </div>
    </>
  );
}
