import React, { useState } from 'react';
import './style.css'


import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';


function Card({image, name, chip}) {
  return (
    <div className="img-card">
      <div className="showsCardShade"></div>
      <img className="img" src={image} />
      <div class="card-body">
        <span className="card-chip">{chip}</span>
        <div className="card-title">{name}</div>
        <br />
        <br />
        <div className="card-info">
          <span>More Info </span>
          <span><ConfirmationNumberOutlinedIcon /></span>
        </div>
      </div>
    </div>
  )
}

export default Card;