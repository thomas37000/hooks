/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Card.css';

export default function Card({ data }) {
  const [isImg, setIsImg] = useState(true);
  const { cardById, id } = data;

  return (
    <div className="card-container">
      <div className='card'>
        <Link to={`/character/${id}`}>
          <img
            className='cardImg'
            src={data.image}
            alt={data.name}
            onClick={cardById}
          />
          <h2 className='cardName' onClick={cardById}>
            {data.name}
          </h2>
        </Link>
      </div>
    </div>
  );
}

// Card.propTypes = {
//   data: PropTypes.shape({
//     avatar_url: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//     media_url: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     pub_date: PropTypes.string.isRequired,
//     pub_url: PropTypes.string.isRequired,
//     search: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired,
//   }).isRequired,
// };
