import React, { Component } from 'react';
import './price.css'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col, Container } from 'reactstrap'



export class pricing extends Component {
    clicky = (ev) => {
        console.log('Button has been clicked')
    }
    render() {
        return ( 
          
    
            <div className="card text-center" >
                
            <Container className= "gap">
            <Row>
            <Col md = { 4 }>
            <Card body style = 
            {
                {
                    backgroundColor: '#f25c2d',
                    borderColor: '#d00000',
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
         <Button onClick={this.clicky} align = 'center' block color="danger" active outline size="lg"> View More </Button>     
            </CardBody> 
            </Card>  
             </Col>
            <Col md = { 4 }>
        <Card body style= {
                {
                    textAlign: 'center',
                    backgroundColor: '#f25c2d',
                    borderColor: '#d00000',
                    borderWidth: 0,
                    borderStyle: 'groove'
                }
            } >
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
        <Button onClick={this.clicky} align = 'center' block color="danger" active outline size="lg"> View More </Button>
             </CardBody>
             </Card>
             </Col>
          <Col md = { 4 } >
            <Card body style = {
                {
                    backgroundColor: '#f25c2d',
                    borderColor: '#d00000',
                    borderWidth: 0,
                    borderStyle: 'groove'
                }
            } >
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
     <Button onClick={this.clicky} align = 'center' block color="danger" active outline size="lg"> View More </Button>
    </CardBody>
 </Card>
 </Col>
<Col md={4}>
    <Card body inverse style = {
                {
                    backgroundColor: '#f25c2d',
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
 <Button onClick={this.clicky} align = 'center' block color="danger" active outline size="lg"> View More </Button>
 </CardBody>
</Card>
 </Col>
 <Col md = { 4 } >
<Card body inverse style = {
                {
                    backgroundColor: '#f25c2d',
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
<Button onClick={this.clicky} align = 'center' block color="danger" active outline size="lg"> View More </Button>
 </CardBody>
</Card>
</Col>
<Col md = { 4 }>
<Card body inverse style = {
                {
                    backgroundColor: '#f25c2d',
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
     <Button onClick={this.clicky} align = 'center' block color="danger" active outline size="lg"> View More </Button>
     </CardBody>
    </Card>
                        </Col>
                        <Col md = { 6 } >
            <Card body inverse style = {
                {
                    backgroundColor: '#f25c2d',
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
    <Button onClick={this.clicky} align = 'center' block color="danger" active outline size="lg"> View More </Button>
</CardBody>
</Card>
                        </Col>
                        <Col md = { 6 } >
            <Card body inverse style = {
                {
                    backgroundColor: '#f25c2d',
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
    <Button onClick={this.clicky} align = 'center' block color="danger" active outline size="lg"> View More </Button>
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