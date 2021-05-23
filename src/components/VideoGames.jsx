import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import axios from 'axios';
import CardGames from './CardGames';
import './Characters/Character.css';

export default function VideoGames() {
  const { id } = useParams();
  const [datas, setDatas] = useState([]);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDisLikes] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // axios.get('https://github.com/akabab/starwars-api')
    axios
      // .get(`https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/id/${id}.json`)
      .get(
        `https://raw.githubusercontent.com/thomas37000/hooks/alliance/src/videoGames.json`
      )
      .then((response) => {
        setDatas(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log('What happened? ' + error.response.data);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div className='galerie'>
        {datas
          .map((data,) => (
            <CardGames key={data.id} data={data} />
          ))}
      </div>
    </>
  );
}
