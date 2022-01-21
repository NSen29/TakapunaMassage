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
    src={require('./Head, Neck and Shoulders.jpg')} alt="Head Neck and Shoulders"/>

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
            src = {require('./Upper or Lower Body.jpg')}/>
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
            src = {require('./Whole Body.jpg')} / >
            <CardBody>
            <CardTitle tag = "h5"> Whole Body </CardTitle>
           <CardSubtitle className = "mb-2 text-white" tag = "h6" >
            45 min session
            for $70 / 60 min session
            for $85 / 90 min session
           for $125 / 120 min session for $160 
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
     src = {require('./Reflexology.jpg')} / >
    <CardBody>
    <CardTitle tag="h5"> Reflexology Foot Massage </CardTitle>
    <CardSubtitle className = "mb-2 text-white" tag = "h6" >
            30 min session
            for $50 / 45 min session
            for $75 / 60 min session for 
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
            src = {require('./Whole Body with Reflexology.jpg')} / >
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
            src = {require('./Additional Services.jpg')}/ >
    <CardBody>
<CardTitle tag = "h5">
 Additional Services</CardTitle>
                                    <CardSubtitle className="mb-2 text-white" tag="h6" text={{ color: 'white' }}>
                                        Cupping for $30 / Gua Sha for $40 / Hot Stone for $30
                                        *Timings will vary for each service
     </CardSubtitle>
                                    <CardText  className = "mb-2 text-success">
                                        *Extra service types available
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
            src = {require('./Accupuncture.jpg')}/ >
            <CardBody>
            <CardTitle tag = "h5"> Accupuncture Treatment </CardTitle>
        <CardSubtitle className = "mb-2 text-white" tag = "h6" >
            20 min sessions
            for $35 / 30 min session
            for $55 / 45 min session
          for $70 / 60 min session for $85 
        </CardSubtitle>
                                    <CardText  className = "mb-2 text-success">
                                    *Extra service types available
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
            src = {require('./Moxibustion.jpg')} / >
            <CardBody>
            <CardTitle tag = "h5"> Moxibustion Treatment </CardTitle>
        <CardSubtitle className = "mb-2 text-white" tag = "h6" >
            20 min session
            for $40 / 30 min session
            for $60 / 45 min session
          for $75 / 60 min session for $90
        </CardSubtitle>
                                    <CardText  className = "mb-2 text-success">
                                    *Extra service types available
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
            src = {require('./Moxibustion.jpg')} / >
            <CardBody>
            <CardTitle tag = "h5"> Extra Service Types </CardTitle>
        <CardSubtitle className = "mb-2 text-white" tag = "h6" >
                                        Therapeutic      /      Swedish/Relaxing
                                        /     Sport    /     Deep Tissue
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

function HoverText1() {
    const [open, setOpen] = useState(false);
  
    return (
        <>
      <Button onClick={() => setOpen(!open)}  aria-controls="example-collapse-text" aria-expanded={open} block
    variant="danger"
                outline
                active
    size="sm">
       View More 
      </Button>
      <Collapse in={open}>
        <div id="Upper Body">
       


Hot stone massage is a variation on classic massage therapy. Heated smooth, flat stones are placed on key points on the body. The massage therapist may also hold the stones and use them to massage certain areas of the body. The heat warms and relaxes the muscles, which allows the therapist to apply deeper pressure, if desired. The warmth of the hot stones improves circulation and calms the nervous system. People also get hot stone massage for a variety of health conditions:

Back pain and aches

Poor circulation

Osteoarthritis and arthritis pain

Stress, anxiety and tension

Insomnia

 
        </div>
            </Collapse>
         
    </>
    );
}

function HoverText2() {
    const [open, setOpen] = useState(false);
  
    return (
        <>
      <Button onClick={() => setOpen(!open)}  aria-controls="example-collapse-text" aria-expanded={open} block
    variant="danger"
                outline
                active
    size="sm">
       View More 
      </Button>
      <Collapse in={open}>
        <div id="Upper Body">
       <p>
       ***********************************************************************************************************
Therapeutic Massage can work wonders on the places you hold your tension. 

Chronic stress, tension and pain don’t have to be a part of your life. 

This massage focuses on the muscles, tendons and fascia underlying the surface layer of muscle, releasing the concentrated tension with slow strokes and deep pressure.

Once released, the muscles are able to get proper blood flow and oxygenation. 

                    This technique may leave you with a little soreness right afterwards, but you’re sure to feel better and more relaxed than you have in a long time.  
                    
                    </p>
                    <p>
                    ****************************************************************************************************************


General Massage for relaxation and perfect for first timers. Reduces stress and tension. 

It effects on circulation and nervous system. It stretches the ligaments, muscles and tendons keeping them supple and pliable. Main purpose of Swedish Massage is to move fluids, increase the oxygen flow in the blood and release toxins from the muscles. Promoting health and well being.
                    </p>
                    <p>
                    ****************************************************************************************************************
                    
                    Sport Massage is typically used before, during, and after athletic events. The purpose of the massage is to prepare the athlete for peak performance, to drain away fatigue, to relieve swelling, to reduce muscle tension, to promote flexibility and to prevent injuries. The technique often involves a blend of traditional Swedish Massage Shiatsu and stretches specifically designed to treat athletes. Each sport uses muscles groups in a different way. Sport massage is designed to address those specific concerns and way differ according to the sport the athlete plays. It helps heal strained muscles and allow healthy ones to reach peak performance and maintain it while minimizing the risk of injury. 
                    </p>
                    <p>
                    ****************************************************************************************************************


                        Deep Tissue Massage is used to release chronic muscle tension through slower strokes and more direct deep pressure or friction applied across the grain of the muscles not with the grain. Deep tissue massage helps to break up and eliminate scar tissue. Deep tissue massage usually focuses on more specific areas and may cause some soreness during or right after the massage. However, if the massage is done correctly you should feel better than ever within a day or two.
                        </p>
        </div>
            </Collapse>
         
    </>
    );
  }
  
  function HoverText3() {
    const [open, setOpen] = useState(false);
  
    return (
        <>
      <Button onClick={() => setOpen(!open)}  aria-controls="example-collapse-text" aria-expanded={open} block
    variant="danger"
                outline
                active
    size="sm">
       View More 
      </Button>
      <Collapse in={open}>
        <div id="Upper Body">
       
      


Reflexology is the application of pressure to areas on the feet (or the hands). Reflexology is generally relaxing and may help alleviate stress.

The theory behind reflexology is that areas of the foot correspond to organs and systems of the body. Pressure applied to the foot is believed to bring relaxation and healing to the corresponding area of the body.

Reflexologists use foot charts to guide them as they apply pressure to specific areas. Reflexology is sometimes combined with other hands-on therapies and may be offered by chiropractors and physical therapists, among others.

Several studies indicate that reflexology may reduce pain and psychological symptoms, such as stress and anxiety, and enhance relaxation and sleep. Given that reflexology is also low risk, it can be a reasonable option if you're seeking relaxation and stress relief.
 
        </div>
            </Collapse>
         
    </>
    );
}
function HoverText4() {
    const [open, setOpen] = useState(false);
  
    return (
        <>
      <Button onClick={() => setOpen(!open)}  aria-controls="example-collapse-text" aria-expanded={open} block
    variant="danger"
                outline
                active
    size="sm">
       View More 
      </Button>
      <Collapse in={open}>
        <div id="Upper Body">
       
  


Acupuncture involves the insertion of very thin needles through your skin at strategic points on your body. A key component of traditional Chinese medicine, acupuncture is most commonly used to treat pain. Increasingly, it is being used for overall wellness, including stress management.

Traditional Chinese medicine explains acupuncture as a technique for balancing the flow of energy or life force — known as chi or qi (chee) — believed to flow through pathways (meridians) in your body. By inserting needles into specific points along these meridians, acupuncture practitioners believe that your energy flow will re-balance.

In contrast, many Western practitioners view the acupuncture points as places to stimulate nerves, muscles and connective tissue. Some believe that this stimulation boosts your body's natural painkillers.
 
        </div>
            </Collapse>
         
    </>
    );
}
function HoverText5() {
    const [open, setOpen] = useState(false);
  
    return (
        <>
      <Button onClick={() => setOpen(!open)}  aria-controls="example-collapse-text" aria-expanded={open} block
    variant="danger"
                outline
                active
    size="sm">
       View More 
      </Button>
      <Collapse in={open}>
        <div id="Upper Body">
      


Moxibustion is a form of heat therapy in which dried plant materials called "moxa" are burned on or very near the surface of the skin. The intention is to warm and invigorate the flow of Qi in the body and dispel certain pathogenic influences.

Moxa is usually made from the dried leafy material of Chinese mugwort (Artemesia argyi or A.vlugaris), but it can be made of other substances as well.
 
        </div>
            </Collapse>
         
    </>
    );
}