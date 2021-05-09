import React, {useState, useEffect, useParams } from 'react';
  
import { Button, Card, CardDeck} from  'react-bootstrap';
import axios from 'axios';

import Character from './Character';
import styles from './Character.css';

export default function All() {
  const { id } = useParams();
  const [ data, setData ] = useState([]);
  const [ characters, setCharacters ] = useState([]);
  const [error, setError] = useState(null);
  // const [ filteredCharacters, setFilteredCharacters ] = useState([]);
  const [ likes, setLikes ] = useState(0);
  const [ dislikes, setDisLikes ] = useState(0);
  const [ loading, setLoading ] = useState(false);
  const [ filter, setFilter ] = useState(false);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const res = await axios.get(`https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/id/${id}.json`);
        setData(res.data);
        setCharacters(res.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getCharacters();
  }, [id]);

  //   const deleteCharacter = (id) => {
  //   const filteredCharacters = characters.filter((character) => character.id !== id);

  //   setCharacters(filteredCharacters);
  // };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  const { affiliations, homeworld, image, masters, name } = data;
  return(
    <>
    
      <CardDeck>
        <Card key={data.id}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body> 
        </Card>  
    </CardDeck>

          {/* {characters
            .map((character) => (
              <Character {...character} key={character.id}/>
          ))} */}
  
  
      {/* {
        characters
          .filter((character) => (filter ? character.died >= 30 : true))
          .map((character) => (
            <Character {...character} key={character.id} handleClick={() => deleteCharacter(character.id)} />
        ))
      } */}
    </>
  )
}




// export default class Character extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       jedi: ['Alliance', 'Galactic', 'Jedi'],
//       DarkSide: [
//                  'Dark',
//                  'First Order',
//                  'Sith',
//                  'Republic'
//                 ],
//       message: ''
//       }
//   }

//   filterCharacter(){
//     const {jedi} = this.state;
//     const {Darkside} = this.state;
//   }

//   render(){
//     return(

//     );
//   }
// }