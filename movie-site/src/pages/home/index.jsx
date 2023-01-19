import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import "./index.scss"

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const getData = async() => {
        let response = await axios.get("https://www.omdbapi.com/?apikey=32a3eab6&s=harry")
        setMovies(response.data.Search)
    }
    useEffect(() => {
        getData()
    }, []);
    
  return <div id="homepage">
    <div className="container">
    <h3>Movies</h3>
  <div className="movie">
  {movies.map((element) => {
        return   <Link to={`/${element.imdbID}`}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={element.Poster}/>
        <Card.Body>
          <Card.Text>
            <p>{element.Title}</p>
            <p>{element.Year}</p>
          </Card.Text>
        </Card.Body>
      </Card>
        </Link>
    })}
  </div>
    </div>
  </div>;
};

export default HomePage;
