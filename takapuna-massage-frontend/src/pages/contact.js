import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { withStyles } from "@material-ui/core/styles";

const BlueTextTypography = withStyles({
    root: {
      color: "#FFFFFF"
    }
  })(Typography);

export default function contact() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <BlueTextTypography gutterBottom variant="h3" component="div">
          Contact
        </BlueTextTypography>
        <BlueTextTypography variant="body1" color="text.tertiary">
          <div className="box1" style={{ backgroundColor: "white"}}>
            <p>TAKAPUNAMASSAGE106@GMAIL.COM</p>
            <p>09-486 0666</p>
            <p>106 HURSTMERE ROAD TAKAPUNA 0622 AUCKLAND</p>
            
          </div>
        </BlueTextTypography>
      </CardContent>
    </Card>
  );
}  