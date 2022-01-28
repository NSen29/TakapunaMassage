import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { withStyles } from '@material-ui/core/styles';
import MapContainer from "../components/MapContainer";
import "../styles/contact.css";
import CarPark from "../images/CarPark.jpg"
import { orange } from '@mui/material/colors';

const BlueTextTypography = withStyles({
  root: {
    color: "#e07006"
  }
})(Typography);


export default function contact() {
  return (
    <div className= "header" style={{ textAlign: 'center',  borderWidth: 15, borderColor: '#8b0000', } }>
      
    
    <div className="textbox" style={{ textAlign: 'center', display:'flex', justifyContent: 'left', borderWidth: 15, borderColor: '#8b0000'  } }>
    <div className="map" style={{ display: 'flex', justifyContent: 'right', flexDirection: 'center',  borderWidth: 15, borderColor: '#8b0000'} }>
          <Card style={{ borderWidth: 1, borderColor: '#8b0000', backgroundColor: 'black' }} sx={{ mx: 5 }}>
        <CardContent className = "email" style={{ borderWidth: 16, borderColor: '#8b0000' }} >
          
          <BlueTextTypography variant="body4" color="text.tertiary">
            <div className="box1" style={{
              textAlign: 'center', backgroundColor: "#212121", borderColor: '#8b0000',
              borderWidth: 25, borderStyle: 'groove'
              
            }}><h2 style= {{color: orange}}> Contact Details</h2>
              <p>TAKAPUNAMASSAGE106@GMAIL.COM</p>
              <p>09-486 0666</p>
              <p>106 HURSTMERE ROAD TAKAPUNA 0622 AUCKLAND</p>

            </div>
          </BlueTextTypography>
        
        </CardContent>
   
      
      <CardContent>
         
          <BlueTextTypography variant="body1" color="text.tertiary">
            <div className="box1" style={{
              textAlign: 'center', backgroundColor: "#212121", borderColor: '#8b0000',
              borderWidth: 25,
              borderStyle: 'groove'
            }}>
              <h1>Opening Hours</h1>
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
    
    <MapContainer className='MapContainer' />
        </div>
       
      <div>
      

        </div>
        <Card style={{ borderWidth: 10, borderColor: '#8b0000', backgroundColor: 'black' }} sx={{ mx: 10}}>
        <CardContent className = "email" style={{ borderWidth: 16, borderColor: '#8b0000' }} >
        <img src={CarPark} alt="Car Park" width="px" />
          <BlueTextTypography variant="body4" color="text.tertiary">
          <h3
        style={{color: "#e07006",
          textAlign: 'center', backgroundColor: "#212121", borderColor: '#8b0000',
          borderWidth: 25, borderStyle: 'groove'
          
        }}>
          Car Park Location
        </h3>
     
          
          </BlueTextTypography>
        
        </CardContent>
   
            </Card>

</div>
  );

} 