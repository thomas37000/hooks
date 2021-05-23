import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Characters/Card';

const StarWars = () => {
  const [datas, setDatas] = useState([]);

  const API_URL = 'https://akabab.github.io/starwars-api/api/all.json';

  useEffect(() => {
    axios
      .get(`${API_URL}`)
      .then((res) => res.data)
      .then((data) => {
        setDatas(data);
        console.log('star wars characters', data);
      })
      .catch((error) => {
        let message;
        if (error) {
          message = "vous n' avez pas accès à cette page";
        } else {
          message = error.response.data.errorMessage;
          console.log(message);
          console.log(error);
        }
      });
  }, []);

  return (
    <div className='galerie'>
      {datas
        // .filter((data) => data.species.includes('human'))
        // .filter((data) =>  data.species === 'droid')
        // .filter((data) => data.affiliations[0].includes('Alliance'))
        .map((data) => (
          <Card key={data.id} data={data} />
        ))}
    </div>
  );
};

export default StarWars;
