import React from "react"
import { FaAngleDoubleDown } from "react-icons/fa";

const SearchFilter = ({ search, setSearch, filter, setFilter }) => {
  const handelInputChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const handelSelectChange = (event) => {
    event.preventDefault()
    setFilter(event.target.value)
  }

  return (
    <div className="search-filter-container">
      <div className="search-input">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handelInputChange}
        />
      </div>
      <div className="select-filter">
      
        <select
        
          className="select-section"
          value={filter}
          onChange={handelSelectChange}
          
        >
           
          <option value="all">All </option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  )
}

export default SearchFilter
