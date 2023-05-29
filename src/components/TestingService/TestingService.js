import React, { useState } from 'react';
import { Container, Card, Form, Row, Col } from 'react-bootstrap';
import TestingServiceTable from 'components/TestingService/TestingServiceTable';
import "../../assets/css/allForms.css";

function TestingService() {
  const [DeviceID, setDeviceID] = useState('');
  const [Parameter, setParameter] = useState('');
  const [Value, setValue] = useState('');
  const [Action, setAction] = useState('');
  const lineDetails = []; // Add your line details array here

  return (
    
    <Container >
    <div className="cardDesign ">
        {/* <Col md="8">
            <Card> */}
                <Card.Header style={{ border:"none", backgroundColor: "white"}}>
                    <Card.Title style={{ color: '#555', fontSize: "0.8rem", fontWeight: "600", marginTop:"30px"}}>TESTING SERVICE</Card.Title>
                    <hr style={{padding:"0", margin:"0" }}/>
                </Card.Header>
                <Card.Body style={{paddingTop:"0"}}>
                    <Form>
                        <Row>
              <Col className="pr-1" md="4">
              <Form.Group>
                  <Form.Label className="lblDesign">SELECT LINE</Form.Label>
                  <Form.Control
                    as="select"
                    size="lg"
                    name="SelectMachine"
                    style={{ borderRadius: "10px" }}
                    // value={DeviceID}
                    // onChange={e => setDeviceID(e.target.value)}
                    //disabled={true}
                  >
                    {/* {lineDetails.map(item => (
                      <option key={item.lineId} value={item.lineId}>{item.lineName}</option>
                    ))} */}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col className="pr-1" md="4">
                <Form.Group>
                  <Form.Label className="lblDesign">SELECT MACHINE</Form.Label>
                  <Form.Control
                    as="select"
                    size="lg"
                    name="SelectMachine"
                    style={{ borderRadius: "10px" }}
                    // value={DeviceID}
                    // onChange={e => setDeviceID(e.target.value)}
                    //disabled={true}
                  >
                    {/* {lineDetails.map(item => (
                      <option key={item.lineId} value={item.lineId}>{item.lineName}</option>
                    ))} */}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>  
          </Form>
           <TestingServiceTable /> 
        </Card.Body>  
    </div>
    </Container>
  );
}

export default TestingService;