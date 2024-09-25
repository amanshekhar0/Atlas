import React, { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../API/PostAPI"
import Loader from "../Components/Layout/UI/Loader"
import CountryCard from "../Components/Layout/UI/CountryCard"
import SearchFilter from "../Components/Layout/UI/SearchFilter"

const Country = () => {
  const [isPending, startTransition] = useTransition()
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData()
      setCountries(res.data)
    })
  }, [])

  if (isPending) return <Loader />

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase())
    }
    return true
  }
  const filterRegion=(country)=>{
    if(filter==="all")return country
    return country.region===filter
  }

  const filteredCountries=countries.filter((country)=>searchCountry(country) && filterRegion(country))

  return (
    <div>
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />
      <ul className="country-grid">
        {filteredCountries.map((country, index) => (
          <CountryCard country={country} key={index} />
        ))}
      </ul>
    </div>
  )
}

export default Country
