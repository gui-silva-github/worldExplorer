import React, { useState } from 'react'
import {Container} from '@mui/material'
import SearchMethods from '../components/SearchMethods'
import Countries from '../components/Countries'

const Home = ()=>{
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("all")

    return (
      <>
        <Container maxWidth={"lg"}>
          <SearchMethods setSearch={setSearch} filter={filter} setFilter={setFilter}/>
          <Countries search={search} filter={filter}/>
        </Container>      
      </>
    )
  }
  
  export default Home
  