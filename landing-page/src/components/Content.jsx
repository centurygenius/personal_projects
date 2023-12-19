import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Content (){
          return (
                    <Container fluid>
                       <div>
                           <section className="buttons">
                             <p style={{color:"white"}}>Hurry, Black Friday Is Almost Here!</p>
                             <h1><span style={{color:"white"}}>CHECK THE COUNTDOWN TIMER UNTIL THE </span><span style={{color:"red"}}>BIGGEST SALES OF THE YEAR BEGINS</span></h1>
                             <button className="buttonsReminder" type="button">Set Reminder</button>
                             <div className="buttonsItems">
                                 <button id="day" type="button">29<br></br>Days</button>
                                 <button id="hour" type="button">22<br></br>Hours</button>
                                 <button id="minute" type="button">57<br></br>Minutes</button>
                                 <button id="second" type="button">59<br></br>Seconds</button>
                             </div>
                           </section>
                             <Row>
                                 <Col xs={12} md="auto" lg="auto">    
                                 <div className="contentshop">
                                   <h3>Up to 49.99% off</h3> 
                                   <h1>GRAB YOUR FAVOURITE BEFORE THEY ARE GONE</h1>
                                   <p>You can trust us to always bring you the latest design at the lowest cost possible</p>
                                   <button className="contentshopId" type="button">SHOP NOW</button>
                                 </div>
                                 </Col>
                                 <Col xs={12} md="auto" lg="auto">
                                 <div className="contentshopImg">
                                    <img src="/images/black-headphone.png" alt="headphone" />
                                 </div>
                                 </Col>
                            </Row>
                          
                           <div className="contentShopDeals">
                              <h3>Black Friday Sales</h3>
                              <h1>SAVE BIG: UP TO 59.99% ON ALL PRODUCTS</h1>
                               <p> Don't miss the exclusive opportunity to cut down on cost
                                  to enjoy a top-notch technology. Hit the button below 
                                  for the best deal ever
                               </p>
                               <button className="contentShopDealsId" type="button">SHOP DEALS</button>
                           </div>
                       </div>
                    </Container>
                  )
}
export default Content;