import React from 'react';
import Grid from '@mui/material/Grid';

import "./header.css";

const Header = () => {
    return (
        <div>
          <Grid className='header' padding={3} container>
              <Grid lg={9} >
                <h2>PROFESSIONAL TA'LIM O'QUV MASHG'ULOTI <span>JURNALI</span></h2>
              </Grid>
              <Grid lg={3}>
                  <div className="header_right">
                      <i class="ri-search-line"></i>
                      <input type="text" placeholder="Izlash..." />
                      <button type="button">Izlash</button>
                  </div>
              </Grid>
           </Grid>
        </div>
    );
};

export default Header;