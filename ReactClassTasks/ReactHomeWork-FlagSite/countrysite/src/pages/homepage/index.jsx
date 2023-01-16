import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import FilterData from '../filter/filter';
import "./index.scss"
import { Link } from 'react-router-dom';

const Homepage = () => {
  const [countriesData, setCountriesData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
    .then((response) => response.json())
    .then((data) => setCountriesData(data));
  }, [])

  
  return (
    <div className='container'>
      <FilterData setCountriesData={setCountriesData} />
      <div className="cardBody">
     {countriesData.map((element, i) => {
        return <Card style={{ width: '18rem' }} key={i}>
        <Card.Img variant="top" src={element.flags.png} />
        <Card.Body>
          <Card.Title>{element.name}</Card.Title>
          <Card.Text>Population: {element.population}</Card.Text>
          <Card.Text>Region: {element.region}</Card.Text>
          <Card.Text>Capital: {element.capital}</Card.Text>
          <Link to={`/country-detail/${element.name}`}><i className="fa-solid fa-circle-info"></i> Details</Link>
        </Card.Body>
      </Card>
      })}
     </div>
    </div>
  )
}

export default Homepage