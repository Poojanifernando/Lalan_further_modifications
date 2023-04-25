import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="">
        <Container>
          <nav>
            {/* <ul className="footer-menu">
              <li>
                <a href="/admin/dashboard" 
                // onClick={(e) => e.preventDefault()}
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Company
                </a>
              </li>
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Blog
                </a>
              </li>
            </ul> */}
            <p className="">
            <p style={{
              fontSize:"0.75rem", 
              textAlign:"center", 
              alignItems:'center', 
              justifyContent:'center', 
              color:'lightgray'
              }}
              >
              © {new Date().getFullYear()}{" "} All Rights Reserved | Solution by  <a href="http://www.siot.lk/">SIoT</a>Services (Pvt.) Ltd</p>
            </p>
          </nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;
