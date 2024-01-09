import React from "react";
import { Row } from "react-bootstrap";

function Footer (){
    return (
        <Row className="footer footerSocialMedia" fluid="xs sm md lg xl">
        <a href="https://www.facebook.com" target="_blank"><img className="socialMediaImg" src="/images/facebook.png" alt="facebook" /></a>
        <a href="https://www.instagram.com" target="_blank"><img className="socialMediaImg" src="/images/instagram.png" alt="instagram" /></a>
        <a href="https://www.tiktok.com" target="_blank"><img className="socialMediaImg" src="/images/tiktok.png" alt="tiktok" /></a>
        <a href="https://www.twitter.com" target="_blank"><img className="socialMediaImg" src="/images/twitter.png" alt="X" /></a>            
       </Row>   
    )
}

export default Footer;