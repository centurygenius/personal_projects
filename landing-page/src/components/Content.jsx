import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container, Row, Col, 
          Button } from "react-bootstrap";

function Content (){
  const newYear = new Date().getFullYear();
          return (
                    <Container fluid="xs sm md lg xl xxl" className="container">
                            <Header />
                            <Row className="buttons">
                              <p style={{color:"white"}}>Hurry, Black Friday Is Almost Here!</p>
                              <h1><span style={{color:"white"}}>CHECK THE COUNTDOWN TIMER UNTIL THE </span><span style={{color:"red"}}>BIGGEST SALES OF THE YEAR BEGINS</span></h1>
                              <Button type="button" variant="danger" id="buttonsReminder" active>Set Reminder</Button>{' '}
                             </Row>
                             <Row className="buttonsItems">
                                 <Button id="day" variant="danger" type="button" disabled>29<br></br>Days</Button>{' '}
                                 <Button id="hour" variant="danger" type="button" disabled>22<br></br>Hours</Button>{' '}                     
                                 <Button id="minute" variant="danger" type="button" disabled>57<br></br>Minutes</Button>{' '}
                                 <Button id="second" variant="danger" type="button" disabled>59<br></br>Seconds</Button>                                                                                         
                             </Row>                           
                             <Row>
                               <Col className="contentshop" xs={12} sm={12} md={6} lg="6" xl="6">    
                                   <h3>Up to 49.99% off</h3> 
                                   <h1>GRAB YOUR FAVOURITE BEFORE THEY ARE GONE</h1>
                                   <p>You can trust us to always bring you the latest design at the lowest cost possible</p>
                                   <Button variant="danger" className="contentshopId" type="button">SHOP NOW</Button>
                               </Col>
                               <Col className="contentshopImg" xs={12} sm={12} md={6} lg="6" xl="6">
                                   <img src="/images/black-headphone.png" 
                                        width="300" height="320" alt="headphone" />    
                               </Col>
                            </Row>                          
                            <Row className="contentShopDeals">
                              <h3>Black Friday Sales</h3>
                              <h1>SAVE BIG: UP TO 59.99% ON ALL PRODUCTS</h1>
                               <p> Don't miss the exclusive opportunity to cut down on cost
                                  to enjoy a top-notch technology. Hit the button below 
                                  for the best deal ever
                               </p>
                               <Button variant="danger" id="contentShopDealsId" type="button">SHOP DEALS</Button>
                           </Row>
                           <Footer />
                           Copyright © {newYear} - centurygenius   
                    </Container>
                  )
}
export default Content;