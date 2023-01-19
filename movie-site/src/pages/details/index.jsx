import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const [details, setDetails] = useState([]);
   const { id } = useParams()
    const getData = async() => {
        let response = await axios.get(`https://www.omdbapi.com/?apikey=32a3eab6&i=${id}`)
        setDetails(response.data)
    }
    useEffect(() => {
        getData()
    }, []);
    console.log(details);
  return <div>
        <div className="detail">
            <div className="detail-text">
                <h1>{details.Title}</h1>
                <span>IMDB Rating: {details.imdbRating}</span>
                <span>IMDB Votes: {details.imdbVotes}</span>
                <span>Runtime: {details.Runtime}</span>
                <span>Year: {details.Year}</span>
                <p>{details.Plot}</p>
                <h5>Director: {details.Director}</h5>
                <h5>Actors: {details.Actors}</h5>
                <h5>Genres: {details.Genre}</h5>
                <h5>Language: {details.Language}</h5>
                <h5>Awards: {details.Awards}</h5>
            </div>
            <div className="image">
                <img src={details.Poster} alt="" />
            </div>
        </div>

  </div>;
};

export default Details;
