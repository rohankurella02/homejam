import React from 'react'
import Avatar from '@mui/material/Avatar';
import ReactCountryFlag from "react-country-flag"
import { Stack, Grid } from "@mui/material";

function ReviewCard({name, image}) {
  return (
    <div className="rcard">
      <div className="reviewCardShadow"></div>
      <Grid container direction="row" alignItems="center">
        <Grid item>
          <Avatar src={image} />
        </Grid>
        <Grid item>
          <div style={{marginTop: "13px"}}>{name}</div>
          <div style={{display: "flex"}}>
            <ReactCountryFlag countryCode="US" svg/>
            <div style={{paddingLeft: "23px", color: "#E5C558", fontSize: "11px"}}>PALO ALTO, CA </div>
          </div>
        </Grid>
      </Grid>
      <br />
      <br />
      <p style={{fontSize: "16px"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget 
laoreet adipiscing. 
      </p>
    </div>
  );
}

export default ReviewCard;