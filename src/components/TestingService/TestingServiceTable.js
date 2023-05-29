import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { getLocalhostUrl } from "components/url/Url.js";
import { Link } from "react-router-dom";
import "../../assets/css/allForms.css";
import Paginate from "components/Forms/Paginate";
import { Card, Table, Container, Row, Col } from "react-bootstrap";
//import TestingServiceTable from "./TestingServiceTable";

function TestingServiceTable() {


  return (
    <>
      <Container>
        <Row>
          <Col md ="8" >
            <Card className="card-plain table-plain-bg">
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover tabletest">
                  <thead style={{ backgroundColor: "#EFEFEF" }}>
                    <tr>
                      <th
                        style={{
                          color: "#555",
                          fontSize: "0.8rem",
                          fontWeight: "700",
                          lineHeight: "24px",
                          textAlign: "flex-start",
                          borderRadius: "24px 0 0 0",
                        }}
                      >
                        Device ID
                      </th>
                      <th
                        style={{
                          color: "#555",
                          fontSize: "0.8rem",
                          fontWeight: "700",
                          lineHeight: "24px",
                          textAlign: "flex-start",
                          borderRadius: "0 0 0 0",
                        }}
                      >
                        Parameter
                      </th>
                      <th
                        style={{
                          color: "#555",
                          fontSize: "0.8rem",
                          fontWeight: "700",
                          lineHeight: "24px",
                          textAlign: "flex-start",
                          borderRadius: "0 0 0 0",
                        }}
                      >
                        Value
                      </th>
                      {/* <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>date_and_time</th> */}
                      <th
                        style={{
                          color: "#555",
                          fontSize: "0.8rem",
                          fontWeight: "700",
                          lineHeight: "24px",
                          textAlign: "flex-start",
                          borderRadius: "0 24px 0 0",
                        }}
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {filteredData?.map((pro, index) => {
                      return (
                        <tr key={pro.productId}>
                          <td>{pro.productId}</td>
                          <td>{pro.productName}</td>
                          <td>{pro.description}</td>
                        
                          <td>
                            <Link
                              id="icon"
                              className=""
                              style={{ color: "#555" }}
                              to={`/admin/updateProduct/${pro.productId}`}
                            >
                              <em className="far fa-edit" />
                            </Link>

                            <a className="" style={{ color: "#555" }} id="icon">
                              <em className="fa fa-trash" />
                            </a>
                          </td>
                        </tr>
                      );
                    })} */}
                    <tr>
                  <td>Device_1</td>
                  <td>Parameter_1</td>
                  <td>Value_1</td>
                      <td>
                    <button id="icon" className="btnSelect" style={{ float: 'left' }} >
                        Enter
                    </button>
                  </td>
                  </tr>
                  <tr>
                  <td>Device_2</td>
                  <td>Parameter_2</td>
                  <td>Value_2</td>
                      <td>
                    <button id="icon" className="btnSelect" style={{ float: 'left' }} >
                        Enter
                    </button>
                  </td>
                  </tr>
                  </tbody>
                  <tr>
                  <td>Device_2</td>
                  <td>Parameter_2</td>
                  <td>Value_2</td>
                      <td>
                    <button id="icon" className="btnSelect" style={{ float: 'left' }} >
                        Enter
                    </button>
                  </td>
                  </tr>
                  <tbody>
                  <tr>
                  <td>Device_2</td>
                  <td>Parameter_2</td>
                  <td>Value_2</td>
                      <td>
                    <button id="icon" className="btnSelect" style={{ float: 'left' }} >
                        Enter
                    </button>
                  </td>
                  </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default TestingServiceTable;
