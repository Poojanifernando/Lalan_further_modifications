import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { getLocalhostUrl } from "components/url/Url.js";
import { Link } from "react-router-dom";
// import "../../assets/css/allForms.css"
import Paginate from "components/Forms/Paginate";
import { Card, Table, Container, Row, Col } from "react-bootstrap";

function ProductMaxMinTable(props) {
  const [url, seturl] = useState("");
  const [deviceList, setDeviceList] = useState([]);

  // useEffect(() => {
  //   const myurl = getLocalhostUrl();
  //   seturl(myurl);
  //   if (props.selectedOption) {
  //     axios
  //       .get(
  //         url + "/api/v1/admin/getDevicesTochangeMaxMin/" + props.selectedOption
  //       )
  //       .then((response) => {
  //         setDeviceList(response.data);
  //         console.log(response.data);
  //       });
  //   }
  // }, [props.selectedOption]);

  useEffect(() => {
    const myurl = getLocalhostUrl();
    seturl(myurl);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          url + `/api/v1/admin/getDevicesTochangeMaxMin/${props.selectedLine}`
        );
        setDeviceList(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [props.selectedOption]);

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
                        Device Id
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
                        Item Count
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
                        Max
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
                        Min
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
                        Line
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
                    {deviceList.map((pro, index) => {
                      return (
                        <tr key={pro.line_id}>
                          <td>{pro.deviceid_dvc_reg}</td>
                          <td>{pro.item_name}</td>
                          <td>{pro.max}</td>
                          <td>{pro.min}</td>
                          <td>{pro.line_id}</td>

                          <td>
                            <Link
                              id="icon"
                              className=""
                              style={{ color: "#555" }}
                              to={`#`}
                            >
                              <em className="far fa-edit" />
                            </Link>
                            &nbsp;&nbsp;
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <div>
                    <Paginate />
                </div> */}
      </Container>
    </>
  );
}

export default ProductMaxMinTable;
