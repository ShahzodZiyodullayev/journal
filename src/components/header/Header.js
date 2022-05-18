import React from 'react';
import { Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import "./header.css";

const Header = () => {
    return (
        <Grid sx={{height:"10vh", color:"#fff", backgroundColor:"#0288d1", padding:"15px"}} lg={12} display="flex" alignItems="center" justifyContent="space-between">
            <h2>78-17 GURUH JURNALI</h2>
            <div className='header_box'>
                <SearchIcon className='search' />
                <input type="text" placeholder='Izlash...' />
                <button>Izlash</button>
            </div>
        </Grid>
    );
};

export default Header;