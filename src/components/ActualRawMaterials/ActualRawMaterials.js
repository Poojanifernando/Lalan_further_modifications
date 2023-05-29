import React, { useState } from "react";
import { Container, Card, Form, Row, Col } from "react-bootstrap";
import ActualRawMaterialsTable from "./ActualRawMaterialsTable";

function ActualRawMaterials() {
  const [DeviceID, setDeviceID] = useState("");
  const [Parameter, setParameter] = useState("");
  const [Value, setValue] = useState("");
  const [Action, setAction] = useState("");
  const lineDetails = []; // Add your line details array here

  return (
    <Container>
      <div className="cardDesign ">
        {/* <Col md="8">
            <Card> */}
        <Card.Header style={{ border: "none", backgroundColor: "white" }}>
          <Card.Title
            style={{
              color: "#555",
              fontSize: "0.8rem",
              fontWeight: "600",
              marginTop: "30px",
            }}
          >
            ACTUAL RAW MATERIAL
          </Card.Title>
          <hr style={{ padding: "0", margin: "0" }} />
        </Card.Header>
        <Card.Body style={{ paddingTop: "0" }}>
          <Form>
            <Row>
              <Col className="pr-1" md="4">
                <Form.Group>
                  <Form.Label className="lblDesign">SELECT JOB</Form.Label>
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
                  <Form.Label className="lblDesign">SELECT BATCH</Form.Label>
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
              <Col className="pr-2" md="4">
                <Form.Group>
                  <Form.Label className="lblDesign">OPERATOR</Form.Label>
                  <Form.Control
                    placeholder="Operator"
                    type="text"
                    autocomplete="on"
                    name="SelectLine"
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
                  <Form.Label className="lblDesign">PRODUCTION</Form.Label>
                  <input
                    class="form-control"
                    type="text"
                    name="production"
                    style={{ borderRadius: "10px" }}
                    // style={{ borderRadius: "10px" }}
                    placeholder="Production"
                  ></input>

                  {/* {lineDetails.map(item => (
                      <option key={item.lineId} value={item.lineId}>{item.lineName}</option>
                    ))} */}
                </Form.Group>
              </Col>
            </Row>
          </Form>
          <ActualRawMaterialsTable />
        </Card.Body>
      </div>
    </Container>
  );
}

export default ActualRawMaterials;
