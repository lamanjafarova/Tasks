import React, { useEffect, useRef, useState } from 'react'
import "./filter.scss";

const FilterData = ({setCountriesData}) => {
    const [data, setData] = useState([]);
    const inputValue = useRef("");
    useEffect(() => {
        fetch("https://restcountries.com/v2/all")
        .then((response) => response.json())
        .then((data) => setData(data));
      }, [])
      const handleSearch = () => {
        let SearchedData = data.filter((country) =>
        country.name.toLocaleLowerCase().includes(inputValue.current.value.toLocaleLowerCase())
            );
            setCountriesData(SearchedData);
      }
      const handleFilter = (e) => {
        let filteredRegion = data.filter((element) => {
          return element.region.includes(e.target.value);
        });
        setCountriesData(filteredRegion);
        }
  return (
    <div className='SearchandFilter'>
        <input ref={inputValue} type="text" placeholder='Search for a country' onKeyUp={() => handleSearch()} />
        <select name="" id="" placeholder='Select Country' onChange={(e) => handleFilter(e)}>
            <option value="Filter by Region">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
        
    </div>
  )
}

export default FilterData