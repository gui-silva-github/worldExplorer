import React from 'react'
import {Paper, Stack, Typography} from '@mui/material'
import {LightMode, DarkMode} from '@mui/icons-material'

const Header = ({themeSwitch, setThemeSwitch})=>{

    const fontStyle = {
        fontFamily: "Nunito Sans", fontSize: {
            lg: "1rem", md: "0.9rem", sm: "0.9rem", xs: "0.8rem",
        }
    }

    return (
        <>
        <Paper elevation={1}>
            <Stack 
            flexDirection={"row"}
            justifyContent={"space-around"}
            alignItems={"center"}
            py={1.5}
            >
                <Typography
                    fontFamily={"Nunito Sans"}
                    fontWeight={800} 
                    sx={{
                    fontSize:{lg:"1.8rem", md:'1.5rem', sm:"1rem", xs:"0.9rem"},
                    }}
                >
                    Where in the World?
                </Typography>
                <Stack
                    flexDirection={"row"}
                    alignItems={"center"}
                    gap={0.5}
                    onClick = {()=>setThemeSwitch(!themeSwitch)}
                    sx={{cursor: 'pointer'}}
                >
                {
                    themeSwitch ? (
                        <DarkMode sx={fontStyle}/>
                    ) : (
                        <LightMode sx={fontStyle}/>
                    )
                }
                {
                    themeSwitch ? (
                        <Typography sx={fontStyle}>Dark Mode</Typography>
                    ) : (
                        <Typography sx={fontStyle}>Light Mode</Typography>
                    )
                }
                </Stack>
            </Stack>
        </Paper>
        </>
    )
}
  
  export default Header