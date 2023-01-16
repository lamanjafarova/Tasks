import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./details.scss";

const CountryDetail = () => {
    const [countryDetail, setCountryDetail] = useState([]);
    const { name } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then((response) => response.json())
        .then((data) => setCountryDetail(data));
    }, [])
    // console.log(name);
    // console.log(countryDetail);

  return (
    <>
   <div className="detail">
   {countryDetail.map((element, i) => {
    return (
      <div className='container'>
      <div className='detailPage'>
      <div className='imgArea'>
          <img key={i} src={element.flags.png} alt="" /></div>
       <div className='about'>
        <h1>{element.name.common}</h1>
       <p>Native Name: {element.name.common}</p>
        <p>Population: {element.population}</p>
        <p>Region: {element.region}</p>
        <p>SubRegion: {element.subregion}</p>
        <p>Capital: {element.capital}</p>
        <p>Top Level Domain: {element.tld}</p>
       </div>
         </div>    
        <button className='backBtn' onClick={() => navigate(-1)}><i className="fa-solid fa-arrow-left"></i> Go Back</button>  
       </div>

    )
   })}
   </div>
  </>
  )
}

export default CountryDetail