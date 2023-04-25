import React, { useState } from "react";
import "../../assets/css/allForms.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Report from "assets/img/report1.png";
import Report3 from "assets/img/report3.jpg";
import Report4 from "assets/img/report4.jpg";
import Report6 from "assets/img/report6.jpg";
import Report7 from "assets/img/report7.png";
import Report12 from "assets/img/report12.jpg";
import Report13 from "assets/img/report13.jpg";
import Report14 from "assets/img/report11.jpg";
import Report15 from "assets/img/report97.png";



function Reports() {
  return (
    <>
      <div className="row">
        <Card className="reportCard">
          <img src={Report3} alt="Report" className="reportImg3" />
          <Card.Body>
            <div>
              <a
                href="http://45.61.56.94:3050/d/QRuVwZ-4k/daily-production-dashboard?orgId=1&from=1678271699095&to=1678293299096"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btnReport">DAILY PRODUCTION REPORT</button>
              </a>
            </div>
          </Card.Body>
        </Card>

        <Card className="reportCard">
          <img src={Report6} alt="Report" className="reportImg6" />
          <Card.Body>
            <div>
              <a
                href="http://45.61.56.94:3050/d/AWEGlWaVk/wastage-dashboard?from=1678272426034&to=1678294026034&orgId=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btnReport">WASTAGE REPORT</button>
              </a>
            </div>
          </Card.Body>
        </Card>

        <Card className="reportCard">
          <img src={Report4} alt="Report" className="reportImg4" />
          <Card.Body>
            <div>
              <a
                href="http://45.61.56.94:3050/d/xxNLlZa4k/up-to-date-production-dashboard?orgId=1&from=1678272997922&to=1678294597923"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btnReport">UP-TO-DATE PRODUCTION REPORT</button>
              </a>
            </div>
          </Card.Body>
        </Card>
      </div>

      <br/><br/>
      <div className="row">
        <Card className="reportCard">
          <img src={Report7} alt="Report" className="reportImg7" />
          <Card.Body>
            <div>
              <a
                href="http://45.61.56.94:3050/d/FCiTXZaVk/product-report-dashboard?orgId=1&from=1678273807812&to=1678295407812"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btnReport">PRODUCT REPORT</button>
              </a>
            </div>
          </Card.Body>
        </Card>

        <Card className="reportCard">
          <img src={Report12} alt="Report" className="reportImg12" />
          <Card.Body>
            <div>
              <a
                href="http://45.61.56.94:3050/d/HAO19Za4z/line-report-dashboard?orgId=1&from=1678274931130&to=1678296531130"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btnReport">LINE REPORT</button>
              </a>
            </div>
          </Card.Body>
        </Card>
    

    
        <Card className="reportCard">
          <img src={Report13} alt="Report" className="reportImg13" />
          <Card.Body>
            <div>
              <a
                href="http://45.61.56.94:3050/d/9rKijZ-Vk/abnormal-parameters-dashboard?orgId=1&from=1678275484504&to=1678297084504"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btnReport">PARAMETER REPORT</button>
              </a>
            </div>
          </Card.Body>
        </Card>
    
        </div>


        
      <br/><br/>
      <div className="row">
        <Card className="reportCard">
          <img src={Report14} alt="Report" className="reportImg12" />
          <Card.Body>
            <div>
              <a
                href="http://45.61.56.94:3050/d/dwWibTaVk/machine-status-dashboard?orgId=1&from=1678667148430&to=1678688748430"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btnReport">MACHINE STATUS REPORT</button>
              </a>
            </div>
          </Card.Body>
        </Card>

        <Card className="reportCard">
          <img src={Report15} alt="Report" className="reportImg14" />
          <Card.Body>
            <div>
              <a
                href="http://45.61.56.94:3050/d/GuekCvB4z/order-in-hand?orgId=1&from=1679554183042&to=1679575783042"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btnReport">ORDER-IN-HAND REPORT</button>
              </a>
            </div>
          </Card.Body>
        </Card>


    
    
        </div>
        </>
        
    
        


       
)
}

export default Reports;