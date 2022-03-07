import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { withStyles } from "@material-ui/core/styles";
import MapContainer from "../components/MapContainer";
import "../styles/contact.css";
import { orange } from "@mui/material/colors";
import MapLoc from "../images/MapLoc.png";
import storefront from "../images/storefront.png";

const BlueTextTypography = withStyles({
  root: {
    color: "#e07006",
  },
})(Typography);

export default function contact() {
  return (
    <div
      className="header"
      style={{ textAlign: "center", borderWidth: 15, borderColor: "#8b0000", justifyContent: "center", alignContent: "center" }}
    >
      <div>
        <Card style={{

          backgroundColor: "black"
        }}
        sx={{ mx:10}}
        >
   
                                        <img src={storefront} alt="store front" width="100%" />
         

        </Card>

      </div>
      <div
        className="textbox"
        style={{
          textAlign: "center",
          borderWidth: 15,
          borderColor: "#8b0000",
        }}
      >
        <div
         
        >
          <Card
            style={{
              borderWidth: 1,
              borderColor: "#8b0000",
              backgroundColor: "black",
            }}
            sx={{ mx: 10 }}
          >
            <CardContent
              className="email"
              style={{ borderWidth: 16, borderColor: "#8b0000" }}
            >
              <BlueTextTypography variant="body4" color="text.tertiary">
                <div
                  className="box1"
                  style={{
                    textAlign: "center",
                    backgroundColor: "#212121",
                    borderColor: "#8b0000",
                    borderWidth: 25,
                    borderStyle: "groove",
                  }}

                >
                  <h2 style={{ color: orange, fontSize: 50, margin: "5%"  }}> Contact Details</h2 >
                  <p style={{ color: 'white', fontSize: 20, margin: "5%" }}>TAKAPUNAMASSAGE106@GMAIL.COM</p >
                  <p style={{ color: 'white', fontSize: 20, margin: "5%"  }}>09-486 0666</p>
                  <p style={{ color: 'white', fontSize: 20, margin: "5%"  }}>106 HURSTMERE ROAD TAKAPUNA 0622 AUCKLAND</p>
                </div>
              </BlueTextTypography>
            </CardContent>

            <CardContent>
              <BlueTextTypography variant="body4" color="text.tertiary">
                <div
                  className="box1"
                  style={{
                    textAlign: "center",
                    backgroundColor: "#212121",
                    borderColor: "#8b0000",
                    borderWidth: 25,
                    borderStyle: "groove",
                  }}

                >
                  <h2 style={{ fontSize: 50, margin: "5%"}} >Opening Hours</h2>
                  <p style={{ color: 'white', fontSize: 20, margin: "5%"  }}>Mon: 10:00AM - 07:00PM</p>
                  <p style={{ color: 'white' , fontSize: 20, margin: "5%" }}>Tues: 10:00AM - 07:00PM</p>
                  <p style={{ color: 'white', fontSize: 20, margin: "5%"  }}>Wed: 10:00AM - 07:00PM</p>
                  <p style={{ color: 'white' , fontSize: 20, margin: "5%" }}>Thur: 10:00AM - 07:00PM</p>
                  <p style={{ color: 'white' , fontSize: 20, margin: "5%" }}>Fri: 10:00AM - 07:00PM</p>
                  <p style={{ color: 'white' , fontSize: 20, margin: "5%" }}>Sat: 10:00AM - 07:00PM</p>
                  <p style={{ color: 'white' , fontSize: 20, margin: "5%" }}>Sun: 10:00AM - 07:00PM</p>
                  <p style={{ color: 'white' , fontSize: 20, margin: "5%" }}>( After hour appointments available )</p>
                </div>
                
              </BlueTextTypography>
            </CardContent>
          </Card>
        </div>
        </div>
        
 

      <Card
        style={{
          borderWidth: 10,
          borderColor: "#8b0000",
          backgroundColor: "black",
        }}
        sx={{ mx: 10 }}
      >
        <CardContent
          className="email"
          style={{ borderWidth: 16, borderColor: "#8b0000" }}
        >
          <BlueTextTypography variant="body4" color="text.tertiary">
            <div

                >
                  
                  <p style={{ color: 'white' }}>( Click on image to view map )</p>
                </div>
              </BlueTextTypography>
      
          <a
  
                                href="https://www.google.com/maps/dir//106+Hurstmere+Road,+Takapuna,+Auckland/@-36.7863382,174.7710596,18z/data=!4m9!4m8!1m0!1m5!1m1!1s0x6d0d39d7fb2172d1:0xe03ff307b721822b!2m2!1d174.7727915!2d-36.7863744!3e2"
          target= "_blank"
          >
                      <img src={MapLoc} alt="Location" width="95%" />


          </a>

        
        </CardContent>
      </Card>


    </div>
  );
}
