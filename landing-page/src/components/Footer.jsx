import React from "react";
import { Container } from "react-bootstrap";


function Footer(){

    const newYear = new Date().getFullYear();
    return (
        <Container className="footer" fluid>
          <div className="footerSocialMedia">
            <a href="https://www.facebook.com" target="_blank"><img className="socialMediaImg" src="/images/facebook.png" alt="facebook" /></a>
            <a href="https://www.instagram.com" target="_blank"><img className="socialMediaImg" src="/images/instagram.png" alt="instagram" /></a>
            <a href="https://www.tiktok.com" target="_blank"><img className="socialMediaImg" src="/images/tiktok.png" alt="tiktok" /></a>
            <a href="https://www.twitter.com" target="_blank"><img className="socialMediaImg" src="/images/twitter.png" alt="X" /></a>
          </div>
          Copyright © {newYear} - centurygenius
        </Container>
    )
}
export default Footer;