import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { withStyles } from '@material-ui/core/styles';
import "./contact.css"

const BlueTextTypography = withStyles({
    root: {
      color: "#e07006"
    }
  })(Typography);

export default function contact() {
  return (
    <div style={{textAlign:'center',}}>
      <h1 className ="hed1" >Contact Us</h1>
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <BlueTextTypography gutterBottom variant="h1" component="div">
          
        </BlueTextTypography>
        <BlueTextTypography variant="body4" color="text.tertiary">
          <div className="box1" style={{textAlign:'center', backgroundColor: "black",borderColor: '#8b0000',
     borderWidth: 5, borderStyle: 'groove'}}>
            <p>TAKAPUNAMASSAGE106@GMAIL.COM</p>
            <p>09-486 0666</p>
            <p>106 HURSTMERE ROAD TAKAPUNA 0622 AUCKLAND</p>
            
          </div>
        </BlueTextTypography>
      </CardContent>
      <CardContent>
        <BlueTextTypography gutterBottom variant="h1" component="div">
        </BlueTextTypography>
        <BlueTextTypography variant="body1" color="text.tertiary">
          <div className="box1" style={{textAlign:'center', backgroundColor: "#212121",borderColor: '#8b0000',
     borderWidth: 5,
     borderStyle: 'groove'}}>
            <p >Mon: 10:00AM - 07:00PM</p>
            <p>Tues: 10:00AM - 07:00PM</p>
            <p>Wed: 10:00AM - 07:00PM</p>
            <p>Thur: 10:00AM - 07:00PM</p>
            <p>Fri: 10:00AM - 07:00PM</p>
            <p>Sat: 10:00AM - 07:00PM</p>
            <p>Sun: 10:00AM - 07:00PM</p>
            <p>( After hour appointments available )</p>
            
          </div>
        </BlueTextTypography>
      </CardContent>
    </Card>
    </div>
    
  );
}  