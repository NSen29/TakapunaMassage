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
            } >
            <CardImg top width = "100%"
            src = "https://picsum.photos/318/180" />

            <CardBody body color = "light" >
            <CardTitle tag = "h5" > Upper & Lower Body </CardTitle>      
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
            src = "https://picsum.photos/318/180"/>
            <CardBody>
            <CardTitle tag = "h5" >
          Whole Body </CardTitle>
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
            src = "https://picsum.photos/318/180" / >
            <CardBody>
            <CardTitle tag = "h5"> Reflexology Foot Massage </CardTitle>
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
            } >
    <CardImg top width = "100%"
     src = "https://picsum.photos/318/180" / >
    <CardBody>
    <CardTitle tag="h5"> Head Neck and Shoulders </CardTitle>
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
            src = "https://picsum.photos/318/180" / >
<CardBody>
    <CardTitle tag = "h5" >
    Head Neck and Shoulders </CardTitle>
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
            src = "https://picsum.photos/318/180" / >
    <CardBody>
<CardTitle tag = "h5">
 Head Neck and Shoulders </CardTitle>
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
            } >
            <CardImg top width = "100%"
            src = "https://picsum.photos/318/180" / >
            <CardBody>
            <CardTitle tag = "h5"> Head Neck and Shoulders </CardTitle>
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
            src = "https://picsum.photos/318/180" / >
            <CardBody>
            <CardTitle tag = "h5"> Head Neck and Shoulders </CardTitle>
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
    color="danger"
    outline
    size="lg">
       View More 
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
    </>
    );
  }
  
  