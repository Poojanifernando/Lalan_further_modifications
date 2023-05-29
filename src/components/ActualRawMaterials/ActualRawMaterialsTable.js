import React, { useState } from "react";
import { Card, Table, Container, Row, Col } from "react-bootstrap";
import swal from "sweetalert";

function ActualRawMaterialsTable() {
  const enterDatainput = () => {
    swal({
      title: "Enter the New Actual Value",
      buttons: {
        cancel: {
          text: "Cancel",
          value: null,
          visible: true,
          closeModal: true,
        },
        confirm: {
          confirmButtonText: 'Confirm',
          confirmButtonColor: '#DADADA',
          value: true,
          visible: true,
          closeModal: true,
        },
      },
      content: {
        element: "input",
        attributes: {
          placeholder: "Enter the value",
          type: "text",
        },
      },
    });
  };

  return (
    <>
      <Container>
        <Row>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead style={{ backgroundColor: "#EFEFEF" }}>
                    <tr>
                      <th>Material Name</th>
                      <th>Planned Ratio</th>
                      <th>Planned Value</th>
                      <th>Actual Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Material_1</td>
                      <td>Planned Ratio_1</td>
                      <td>Planned Value_1</td>
                      <td>
                        <button
                          id="icon"
                          className="btnSelect"
                          style={{ float: "left" }}
                          onClick={enterDatainput}
                        >
                          Enter
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Material_2</td>
                      <td>Planned Ratio_2</td>
                      <td>Planned Value_2</td>
                      <td>
                        <button
                          id="icon"
                          className="btnSelect"
                          style={{ float: "left" }}
                          onClick={enterDatainput}
                        >
                          Enter
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Material_3</td>
                      <td>Planned Ratio_3</td>
                      <td>Planned Value_3</td>
                      <td>
                        <button
                          id="icon"
                          className="btnSelect"
                          style={{ float: "left" }}
                          onClick={enterDatainput}
                        >
                          Enter
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Material_4</td>
                      <td>Planned Ratio_4</td>
                      <td>Planned Value_4</td>
                      <td>
                        <button
                          id="icon"
                          className="btnSelect"
                          style={{ float: "left" }}
                          onClick={enterDatainput}
                        >
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

export default ActualRawMaterialsTable;
