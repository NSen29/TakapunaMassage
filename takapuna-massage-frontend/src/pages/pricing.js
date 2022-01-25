import React, { Component } from 'react';
import '../styles/price.css'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row, Col, Container } from 'reactstrap'
import {HoverText1,HoverText2,HoverText3,HoverText4,HoverText5} from '../components/PriceButtons'


export class pricing extends Component {
    clicky = (ev) => {
        console.log('Button has been clicked')
    }
render() {
        return ( 
            <div className="card text-center" >
            <Container className= "gap">
            <Row>
            <Col md = { 6 }>
         <Card
        body style= 
            {
                {
                    backgroundColor: '#e07006',
                    borderColor: '#f33e3e',
                    borderWidth: 0,
                    borderStyle: 'groove'
                    
                }
            } inverse>
    <CardImg top width="100%"
    src={require('../images/Head, Neck and Shoulders.jpg')} alt="Head Neck and Shoulders"/>

    <CardBody body color = "light" >
  <CardTitle tag = "h5"  > Head, Neck and Shoulders </CardTitle>      
<CardSubtitle>
<p className="mb-2 text-white" tag="h6" color='light'>
10 min session
for $20 / 20 min session
 for $35 / 30 min session
for $50   </p>
   
     </CardSubtitle>    
    <CardText>
    <p className="mb-2 text-success" tag="h6" color='light'>
     *Extra service types available
     </p>
  </CardText>     
  </CardBody> 
 </Card>  
  </Col>
  <Col md = { 6 }>
<Card body style= {
     {
    textAlign: 'center',
      backgroundColor: '#212121',
     borderColor: '#d00000',
     borderWidth: 0,
     borderStyle: 'groove'
                }
            } inverse >
            <CardImg top width = "100%"
            src = {require('../images/Upper or Lower Body.jpg')}/>
            <CardBody>
            <CardTitle tag = "h5" >
          Upper/Lower Body </CardTitle>
                                    <CardSubtitle className=" text-white">
                                        (Neck, Shoulders and Back /  Back and Leg )
                                        30 min sessions
            for $50 / 45 min session
            for $70 / 60 min session
            for $85 
        </CardSubtitle>
    <CardText className="mb-2 text-success" tag="h6" >
               *Extra service types available
        </CardText>
        
    
             </CardBody>
             </Card>
             </Col>
          <Col md = { 6 } >
            <Card body style = {
                {
                    backgroundColor: '#8b0000',
                    borderColor: '#d00000',
                    borderWidth: 0,
                    borderStyle: 'groove'
                }
            } inverse>
            <CardImg top width = "100%"
            src = {require('../images/Whole Body.jpg')} / >
            <CardBody>
            <CardTitle tag = "h5"> Whole Body </CardTitle>
           <CardSubtitle className = "mb-2 text-white" tag = "h6" >
            45 min session
            for $70 / 60 min session
            for $85 / 90 min session
       
           for $125  /  <br></br> 120 min session for $160 
        
         </CardSubtitle>
        <CardText className = "mb-2 text-success">
        *Extra service types available
        </CardText>
        
    </CardBody>
 </Card>
 </Col>
<Col md={6}>
    <Card body style = {
                {
                    backgroundColor: '#e07006',
                    borderColor: '#d00000',
                    borderWidth: 0,
                    borderStyle: 'groove'
                }
            } inverse>
    <CardImg top width = "100%"
     src = {require('../images/Reflexology.jpg')} / >
    <CardBody>
    <CardTitle tag="h5"> Reflexology Foot Massage </CardTitle>
    <CardSubtitle className = "mb-2 text-white" tag = "h6" >
            30 min session
            for $50 / 45 min session
            for $75 / 60 min session 
         for $90  
         
    </CardSubtitle>
                                    <CardText  className = "mb-2 text-success">
                                    *Extra service types available
</CardText>
<HoverText3 />  
 </CardBody>
</Card>
 </Col>
 <Col md = { 6 } >
<Card body style = {
                {
                    backgroundColor: '#212121',
                    borderColor: '#d00000',
                    borderWidth: 0,
                    borderStyle: 'groove'
                }
            } inverse>
<CardImg top width = "100%"
            src = {require('../images/Whole Body with Reflexology.jpg')} / >
<CardBody>
    <CardTitle tag = "h5" >
     Whole Body with Reflexology </CardTitle>
 <CardSubtitle className = "mb-2 text-white" tag = "h6" color='light'>
            90 min session
            for $130 / 120 min  session
                                        for  $170
                                                         </CardSubtitle>
                                    <CardText  className = "mb-2 text-success">
                                    *Extra service types available
                                     
    </CardText>
    <HoverText3 />  
 </CardBody>
</Card>
</Col>
<Col md = { 6 }>
<Card body  style = {
                {
                    backgroundColor: '#8b0000',
                    borderColor: '#d00000',
                    borderWidth: 0,
                    borderStyle: 'groove'
                }
            } inverse>
<CardImg top width = "100%"
            src = {require('../images/Additional Services.jpg')}/ >
    <CardBody>
<CardTitle tag = "h5">
 Additional Services</CardTitle>
                                    <CardSubtitle className="mb-2 text-white" tag="h6" text={{ color: 'white' }}>
                                        Cupping for $30 / Gua Sha for $40 / Hot Stone for $30
                                        <br></br>
                                        *Timings will vary for each service (Please contact us first)
     </CardSubtitle>
                                    <CardText  >
                                        
    </CardText>
    <HoverText1/>  
     </CardBody>
    </Card>
                        </Col>
                        <Col md = { 6 } >
            <Card body style = {
                {
                    backgroundColor: '#e07006',
                    borderColor: '#d00000',
                    borderWidth: 0,
                    borderStyle: 'groove'
                }
            }inverse >
            <CardImg top width = "100%"
            src = {require('../images/Accupuncture.jpg')}/ >
            <CardBody>
            <CardTitle tag = "h5"> Accupuncture Treatment </CardTitle>
        <CardSubtitle className = "mb-2 text-white" tag = "h6" >
            20 min sessions
            for $35 / 30 min session
            for $55 / 45 min session
          for $70 / 60 min session for $85 
        </CardSubtitle>
                                    <CardText  >
                                   
      </CardText>
      <HoverText4 />  
</CardBody>
</Card>
                        </Col>
                        <Col md = { 6 } >
            <Card body  style = {
                {
                    backgroundColor: '#212121',
                    borderColor: '#d00000',
                    borderWidth: 0,
                    borderStyle: 'groove'
                }
            } inverse>
            <CardImg top width = "100%"
            src = {require('../images/Moxibustion.jpg')} / >
            <CardBody>
            <CardTitle tag = "h5"> Moxibustion Treatment </CardTitle>
        <CardSubtitle className = "mb-2 text-white" tag = "h6" >
            20 min session
            for $40 / 30 min session
            for $60 / 45 min session
          for $75 / 60 min session for $90
        </CardSubtitle>
                                    <CardText  >
                                    
      </CardText>
      <HoverText5 />  
</CardBody>
</Card>
                        </Col>
                        <Col md = { 12 } >
            <Card body style = {
                {
                    backgroundColor: '#8b0000',
                    borderColor: '#d00000',
                    borderWidth: 0,
                    borderStyle: 'groove'
                }
            } inverse>
            <CardImg top width = "100%"
            src = {require('../images/Extra Service.jpg')} / >
            <CardBody>
            <CardTitle tag = "h5"> Extra Service Types </CardTitle>
        <CardSubtitle className = "mb-2 text-white" tag = "h6" >
                                        Therapeutic      /      Swedish/Relaxing
                                        /     Sport    /     Deep Tissue  (+$10)
        </CardSubtitle>
                                    <CardText>
                                        
      </CardText>
      <HoverText2/>  
</CardBody>
</Card>
  </Col>
  </Row>
</Container>
</div>
        )
    }
}
export default pricing