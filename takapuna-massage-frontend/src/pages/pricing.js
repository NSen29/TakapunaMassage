import React, {useState, Component } from 'react';
import './price.css'
import Collapse from 'react-bootstrap/Collapse'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row, Col, Container } from 'reactstrap'
import Button from 'react-bootstrap/Button';



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
            <Card body style = 
            {
                {
                    backgroundColor: '#ec8321',
                    borderColor: '#f33e3e',
                    borderWidth: 0,
                    borderStyle: 'groove'
                }
            } inverse>
                                <CardImg top width="100%"
                                    src={require('./Head, Neck and Shoulders.jpg')} alt="Head Neck and Shoulders"/>

            <CardBody body color = "light" >
            <CardTitle tag = "h5" > Head, Neck and Shoulders </CardTitle>      
            <CardSubtitle>
            </CardSubtitle>    
                                    <CardText className="mb-2 text-muted" tag="h6" color='light'>
                                        30 min sessions
            for $50 / 45 min sessions
            for $70 / 60 min sessions
            for $85 
                                    </CardText>     
                                  
         <HoverText />     
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
            src = {require('./Upper or Lower Body.jpg')}/>
            <CardBody>
            <CardTitle tag = "h5" >
          Upper/Lower Body </CardTitle>
            <CardSubtitle>
        </CardSubtitle>
    <CardText className="mb-2 text-muted" tag="h6" >
            45 min sessions
            for $70 / 60 min sessions
            for $85 / 90 min sessions
            for $125 / 120 min sessions
            for $160
        </CardText>
        
        <HoverText />  
             </CardBody>
             </Card>
             </Col>
          <Col md = { 6 } >
            <Card body style = {
                {
                    backgroundColor: '#d00000',
                    borderColor: '#d00000',
                    borderWidth: 0,
                    borderStyle: 'groove'
                }
            } inverse>
            <CardImg top width = "100%"
            src = {require('./Whole Body.jpg')} / >
            <CardBody>
            <CardTitle tag = "h5"> Whole Body </CardTitle>
           <CardSubtitle className = "mb-2 text-muted" tag = "h6" >
            30 min sessions
            for $50 / 45 min sessions
            for $75 / 60 min sessions
           for $90
         </CardSubtitle>
         <CardText>
        </CardText>
        <HoverText />  
    </CardBody>
 </Card>
 </Col>
<Col md={6}>
    <Card body style = {
                {
                    backgroundColor: '#ec8321',
                    borderColor: '#d00000',
                    borderWidth: 0,
                    borderStyle: 'groove'
                }
            } inverse>
    <CardImg top width = "100%"
     src = {require('./Reflexology.jpg')} / >
    <CardBody>
    <CardTitle tag="h5"> Reflexology Foot Massage </CardTitle>
    <CardSubtitle className = "mb-2 text-muted" tag = "h6" >
            10 min sessions
            for $20 / 20 min sessions
            for $35 / 30 min sessions
         for $50
    </CardSubtitle>
<CardText>
</CardText>
<HoverText />  
 </CardBody>
</Card>
 </Col>
 <Col md = { 6 } >
<Card body inverse style = {
                {
                    backgroundColor: '#212121',
                    borderColor: '#d00000',
                    borderWidth: 0,
                    borderStyle: 'groove'
                }
            } >
<CardImg top width = "100%"
            src = {require('./Whole Body with Reflexology.jpg')} / >
<CardBody>
    <CardTitle tag = "h5" >
     Whole Body with Reflexology </CardTitle>
 <CardSubtitle className = "mb-2 text-muted" tag = "h6" color='light'>
            10 min sessions
            for $20 / 20 min sessions
            for $35 / 30 min sessions
         for $50 </CardSubtitle>
     <CardText>
    </CardText>
    <HoverText />  
 </CardBody>
</Card>
</Col>
<Col md = { 6 }>
<Card body inverse style = {
                {
                    backgroundColor: '#d00000',
                    borderColor: '#d00000',
                    borderWidth: 0,
                    borderStyle: 'groove'
                }
            } >
<CardImg top width = "100%"
            src = {require('./Additional Services.jpg')}/ >
    <CardBody>
<CardTitle tag = "h5">
 Additional Services</CardTitle>
 <CardSubtitle className = "mb-2 text-muted" tag = "h6" >
            10 min sessions
            for $20 / 20 min sessions
            for $35 / 30 min sessions
        for $50
     </CardSubtitle>
 <CardText>
    </CardText>
    <HoverText/>  
     </CardBody>
    </Card>
                        </Col>
                        <Col md = { 6 } >
            <Card body style = {
                {
                    backgroundColor: '#ec8321',
                    borderColor: '#d00000',
                    borderWidth: 0,
                    borderStyle: 'groove'
                }
            } inverse>
            <CardImg top width = "100%"
            src = {require('./Accupuncture.jpg')}/ >
            <CardBody>
            <CardTitle tag = "h5"> Accupuncture Treatment </CardTitle>
        <CardSubtitle className = "mb-2 text-muted" tag = "h6" >
            10 min sessions
            for $20 / 20 min sessions
            for $35 / 30 min sessions
          for $50
        </CardSubtitle>
    <CardText>
      </CardText>
      <HoverText />  
</CardBody>
</Card>
                        </Col>
                        <Col md = { 6 } >
            <Card body inverse style = {
                {
                    backgroundColor: '#212121',
                    borderColor: '#d00000',
                    borderWidth: 0,
                    borderStyle: 'groove'
                }
            } >
            <CardImg top width = "100%"
            src = {require('./Moxibustion.jpg')} / >
            <CardBody>
            <CardTitle tag = "h5"> Moxibustion Treatment </CardTitle>
        <CardSubtitle className = "mb-2 text-muted" tag = "h6" >
            10 min sessions
            for $20 / 20 min sessions
            for $35 / 30 min sessions
          for $50
        </CardSubtitle>
    <CardText>
      </CardText>
      <HoverText />  
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

function HoverText() {
    const [open, setOpen] = useState(false);
  
    return (
        <>
      <Button onClick={() => setOpen(!open)}  aria-controls="example-collapse-text" aria-expanded={open} block
    variant="danger"
    outline
    size="sm">
       View More 
      </Button>
      <Collapse in={open}>
        <div id="Upper Body">
       
                    THERAPEUTIC MASSAGE
Therapeutic Massage can work wonders on the places you hold your tension. 

Chronic stress, tension and pain don’t have to be a part of your life. 

This massage focuses on the muscles, tendons and fascia underlying the surface layer of muscle, releasing the concentrated tension with slow strokes and deep pressure.

Once released, the muscles are able to get proper blood flow and oxygenation. 

This technique may leave you with a little soreness right afterwards, but you’re sure to feel better and more relaxed than you have in a long time.  
        </div>
            </Collapse>
         
    </>
    );
  }
  
  