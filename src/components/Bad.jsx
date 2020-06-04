import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card} from  'react-bootstrap';
import axios from 'axios';

import styles from './Character.css';

export default function Bad() {
  const { id } = useParams();
  const [ data, setData ] = useState({});
  const [ likes, setLikes ] = useState(0);
  const [ dislikes, setDisLikes ] = useState(0);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);
  const [ filter, setFilter ] = useState(true);

  useEffect(() => {
    const getGoodCharacters = async () => {
      try {
        const res = await axios.get(`https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/id/${id}.json`);
        setData(res.data);
  }
        catch(err) { setError(err); }
        finally { setLoading(false); }
  };
        getGoodCharacters();

}, [id]);

if (loading) return <div>loading ...</div>;
if (error) return <div>Error...</div>;

  const { affiliations, homeworld, image, name } = data;
  return(
    <> 
      <Card style={{ width: '23rem' }}>
        <Card.Img variant="top" src={image} alt={name} />
        <Card.Body>
          <Card.Title><h2>{name}</h2></Card.Title>
          <Card.Text><h3>homeworld: {homeworld}</h3></Card.Text>
          <Card.Text>
            {affiliations}
          </Card.Text>
          <Card.Link>
            <Button 
              variant="primary"
              type="button" 
              onClick={
                () => setLikes(likes + 1)
                }
                >Like ({likes})
            </Button> 
            <Button 
              variant="danger"
              type="button" 
              onClick={() => setDisLikes(dislikes - 1)}>Dislike ({dislikes})
            </Button>
          </Card.Link>
          <Card.Text>
              <a href="#" class="fa fa-facebook">{' '}</a>
              <a href="#" class="fa fa-twitter">{' '}</a>
            <a href="#" class="fa fa-instagram">{' '}</a>
              <a href="#" class="fa fa-pinterest">{' '}</a>
            
          </Card.Text>   
        </Card.Body>
      </Card>
    </>
  )
}

