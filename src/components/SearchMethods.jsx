import React from 'react'
import {Select, MenuItem, FormControl, InputAdornment, InputLabel, Paper, Stack, TextField} from '@mui/material'
import {Search} from "@mui/icons-material"

const SearchMethods = ({setSearch, filter, setFilter})=>{
    return (
        <>
            <Stack
                flexDirection={"row"}
                flexWrap={"wrap"}
                minHeight={"15vh"}
                justifyContent={"space-between"}
                alignItems={"center"}
                my={2}
                gap={2}
            >

                <Paper elevation={1} sx={{width: 380}}>
                    <TextField variant='outlined' placeholder='Search for country' fullWidth InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <Search/>
                            </InputAdornment>
                        ),
                    }}
                    onChange={(e)=>setSearch(e.target.value)}
                    />
                </Paper>

                <Paper elevation={1} sx={{minWidth: 180}}>
                    <FormControl fullWidth>
                        <InputLabel color="secondary">Filter by Region</InputLabel>
                        <Select value={filter} label="Filtrar por Região" onChange={(e)=>setFilter(e.target.value)}>
                            <MenuItem value={"all"}>All</MenuItem>
                            <MenuItem value={"/region/africa"}>Africa</MenuItem>
                            <MenuItem value={"/region/america"}>America</MenuItem>
                            <MenuItem value={"/region/asia"}>Asia</MenuItem>
                            <MenuItem value={"/region/europe"}>Europe</MenuItem>
                            <MenuItem value={"/region/oceania"}>Oceania</MenuItem>
                        </Select>
                    </FormControl>
                </Paper>

            </Stack>
        </>
    )

}

export default SearchMethods