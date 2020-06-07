import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, Button } from 'react-bootstrap';

import styles from './Character.css';

function Character({ id,dimension, name, residents, type, handleClick }) {
  return (
    <Card style={{ width: '23rem' }}>
        <Card.Body>
          <Card.Title><h2>{name}</h2></Card.Title>
          <Card.Text><h3>Type: {type}</h3></Card.Text>
          <Card.Text>
            {dimension}
          </Card.Text> 
          <Card.Text>
            {residents}
          </Card.Text>
          <Card.Link>
            {/* <Button 
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
            </Button> */}
          </Card.Link>
          <Card.Text>
              <a href="/some/valid/uri" class="fa fa-facebook">{' '}</a>
              <a href="/some/valid/uri" class="fa fa-twitter">{' '}</a>
              <a href="/some/valid/uri" class="fa fa-instagram">{' '}</a>
              <a href="/some/valid/uri" class="fa fa-pinterest">{' '}</a>
              <a href="/some/valid/uri" class="fa fa-snapchat-ghost">{' '}</a>
          </Card.Text>   
        </Card.Body>
      </Card>
      
    // <Col xs={{ offset: 1, size: 10 }} md={{ size: 6, offset: 0 }} className="py-3">
    //   <Card inverse>
    //     <Card.Img width="100%" src={image} alt={name} />
    //     <Card.ImgOverlay>
    //       <Card.Title>{name}</Card.Title>
    //       <Card.Text>Species : {species}</Card.Text>
    //       <Card.Text>
    //         <small className="text-muted">{origin}</small>
    //       </Card.Text>
    //       <Button block color="danger" onClick={handleClick}>
    //         Delete
    //       </Button>
    //       <Button block color="info" tag={Link} to={`/results/${id}`}>
    //         Watch
    //       </Button>
    //     </Card.ImgOverlay>
    //   </Card>
    // </Col>
  );
}

export default Character;

// export default function Character() {
//   const { id } = useParams();
//   //setData c'est comme this.state donc pour changer la data quand on utlise useState
//   const [ data, setData ] = useState({});
//   const [ results, setResults ] = useState([]);
//   const [ search, setSearch ] = useState("");
//   const [ characters, setCharacters ] = useState([]);
//   const [ filteredCharacters, setFilteredCharacters ] = useState([]);
//   const [ likes, setLikes ] = useState(0);
//   const [ dislikes, setDisLikes ] = useState(0);
//   const [ loading, setLoading ] = useState(false);
//   const [ filter, setFilter ] = useState(false);

//   useEffect(() => {
   
//    axios.get(`https://rickandmortyapi.com/api/character/`)
//    .then(response => {
//       setResults(response.data);
//       setData(response.data);
//       setCharacters(response.data);
//       setFilteredCharacters(response.data);
//       setLoading(false);
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   }, [])

//   if (loading) return <div>Loading...</div>;
  
//   const { location, species, image, status, name } = data;
  
//   return(
//     <>
//          <Card style={{ width: '23rem' }} key={results.id}>
//         <Card.Img variant="top" src={image} alt={name} />
//         <Card.Body>
//           <Card.Title><h2>{name}</h2></Card.Title>
//           <Card.Text><h3>species: {species}</h3></Card.Text>
//           <Card.Text>
            
//             {location}
//           </Card.Text> 
//           <Card.Text>
//             {status}
//           </Card.Text>
//           <Card.Link>
//             <Button 
//               variant="primary"
//               type="button" 
//               onClick={
//                 () => setLikes(likes + 1)
//                 }
//                 >Like ({likes})
//             </Button> 
//             <Button 
//               variant="danger"
//               type="button" 
//               onClick={() => setDisLikes(dislikes - 1)}>Dislike ({dislikes})
//             </Button>
//           </Card.Link>
//           <Card.Text>
//               <a href="/some/valid/uri" class="fa fa-facebook">{' '}</a>
//               <a href="/some/valid/uri" class="fa fa-twitter">{' '}</a>
//               <a href="/some/valid/uri" class="fa fa-instagram">{' '}</a>
//               <a href="/some/valid/uri" class="fa fa-pinterest">{' '}</a>
//               <a href="/some/valid/uri" class="fa fa-snapchat-ghost">{' '}</a>
//           </Card.Text>   
//         </Card.Body>
//       </Card>
//     </>
//   )
// }