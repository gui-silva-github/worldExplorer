import React, { useEffect, useState } from 'react'
import {Container, Stack, Paper, Button, Box, Typography} from "@mui/material"
import axios from 'axios'
import {ScaleLoader} from 'react-spinners'
import {toast} from 'react-hot-toast'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'

const CountryDetails = ()=>{

    const [countrydetail, setCountryDetail] = useState()
    const [loading, setLoading] = useState(true)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
      const fetchCountryByName = async()=>{
          try{
            const {data} = await axios.get(`https://restcountries.com/v3.1/name/${params.id}`)
            setCountryDetail(data)
            setLoading(false)
          } catch(error){
            navigate(-1)
            setLoading(false)
            toast.error("Country doesn't exist by this name on our server")
          }
      }
      fetchCountryByName()
    }, [params.id])

    return (
      <>
        <Container maxWidth={"lg"}>
          <Stack flexDirection={"row"} alignItems={"center"} minHeight={"15vh"}
          >
            <Paper elevation={2}>
              <Button sx={{textTransform:'none', px: 3}} LinkComponent={Link} to="/" color='secondary'>
                <ArrowBack/> Back
              </Button>
            </Paper>
          </Stack>
          {
            loading ? <Stack minHeight={'60vh'} alignItems={'center'} justifyItems={"center"}>
              <ScaleLoader color='lightcoral'/>
            </Stack>
            : <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap"}>
            <Box component={"img"} src={countrydetail[0].flags.png} sx={{width: {lg: "35%", md: "35%", sm: "100%", xs: "100%"}}}/>
            <Box sx={{width: {lg: "55%", md: "55%", sm: "100%", xs: "100%"}}}>
              <Typography variant='h4' fontWeight={800} fontFamily={"Nunito Sans"} my={3}>
                {countrydetail[0].name.common}
              </Typography>
              <Stack flexDirection={"row"} flexWrap={"wrap"} gap={5}>
                <Box>
                  <Typography fontFamily={'Nunito Sans'}>
                    <span style={{fontWeight: "600"}}>Native Name: </span>
                    {countrydetail[0].name.official}
                  </Typography>
                  <Typography fontFamily={'Nunito Sans'}>
                    <span style={{fontWeight: "600"}}>Population: </span>
                    {countrydetail[0].population.toLocaleString("pt-br")}
                  </Typography>
                  <Typography fontFamily={'Nunito Sans'}>
                    <span style={{fontWeight: "600"}}>Region: </span>
                    {countrydetail[0].region}
                  </Typography>
                  <Typography fontFamily={'Nunito Sans'}>
                    <span style={{fontWeight: "600"}}>Sub Region: </span>
                    {countrydetail[0].subregion}
                  </Typography>
                  <Typography fontFamily={'Nunito Sans'}>
                    <span style={{fontWeight: "600"}}>Capital: </span>
                    {countrydetail[0].capital}
                  </Typography>
                </Box>
                <Box>
                <Typography fontFamily={'Nunito Sans'}>
                    <span style={{fontWeight: "600"}}>Top Level Domain: </span>
                    {countrydetail[0].tld}
                </Typography>
                <Typography fontFamily={'Nunito Sans'}>
                    <span style={{fontWeight: "600"}}>Currencies: </span>
                    {Object.values(countrydetail[0].currencies)[0].name}
                </Typography>
                <Typography fontFamily={'Nunito Sans'}>
                    <span style={{fontWeight: "600"}}>Languages: </span>
                    {Object.values(countrydetail[0].languages).map((lan, index)=>{
                      if ((index+1) === Object.values(countrydetail[0].languages).length){
                        return `${lan}`
                      } else {
                        return `${lan}, `
                      }
                    })}
                </Typography>
                <Typography fontFamily={'Nunito Sans'}>
                  <a href={countrydetail[0].maps.googleMaps} target="_blank">Google Maps</a>
                </Typography>
                <Typography fontFamily={'Nunito Sans'}>
                  <a href={countrydetail[0].maps.openStreetMaps} target="_blank">Open Street Maps</a>
                </Typography>
                </Box>
              </Stack>
              <Stack flexDirection={"row"} alignItems={"center"} flexWrap={"wrap"} gap={2} my={3}
              >
                <Typography fontWeight={600} fontFamily={"Nunito Sans"}>
                    Border Countries:{" "}
                </Typography>
                {
                  countrydetail[0].borders === undefined ? "N/A"
                  : 
                  countrydetail[0].borders.map((border, index)=>(
                    <Paper elevation={2} key={index}>
                      <Button sx={{textTransform: 'none', px: 3}} LinkComponent={Link} to={`/countrydetails/${border}`} color='secondary'>
                        {
                          border
                        }
                      </Button>
                    </Paper>
                  ))
                }
              </Stack>
            </Box>
            </Stack>
          }
        </Container>
      </>
    )
  }
  
  export default CountryDetails