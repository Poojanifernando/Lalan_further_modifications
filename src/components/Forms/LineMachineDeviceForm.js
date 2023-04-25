// import React, { useState, useEffect } from "react"
// import axios from "axios";
// import { getLocalhostUrl } from 'components/url/Url.js'
// import { useFormik } from 'formik';
// import "../../assets/css/allForms.css"
// // import "assets/css/Popup.css";

// // react-bootstrap components
// import {
//     Badge,
//     Button,
//     Card,
//     Form,
//     Navbar,
//     Nav,
//     Container,
//     Row,
//     Col,
//     Dropdown
// } from "react-bootstrap";
// import { DropdownItem } from "reactstrap";

// function LineMachineDeviceForm() {
//     const userId = localStorage.getItem("userId");
//     const [lineDetails, setLineDetails] = useState([]);
//     const [url, seturl] = useState('');

//     //Hook
//     const batchDetails = useFormik({
//         initialValues: {
//             userid_reg_bch: userId,
//             LineID: '',
//             MachineId: '',
//             DeviceId: '',

//         },
//         onSubmit: values => {
//             console.log(JSON.stringify(batchDetails.values))


//             // axios.post('http://localhost:8082/api/v1/batch/saveBatch', batchDetails.values).then(() => {
//             //     alert("Batch added successfully!!!");

//             // }).catch((err) => {
//             //     alert(err);
//             // })
//         }
//     })

//     useEffect(() => {
//         const myurl = getLocalhostUrl();
//         seturl(myurl)
//         axios.get(myurl + '/api/v1/line/getAllLines').then((response) => {
//             setLineDetails(response.data.content);
//         });
//     }, []);

//     return (
//         <>
//             <Container >
//                 <div className="cardDesign ">
//                     {/* <Col md="8">
//                         <Card> */}
//                     <Card.Header style={{ border:"none", backgroundColor: "white" }}>
//                                 <Card.Title style={{ color: '#555', fontSize: "0.8rem", fontWeight: "600", marginTop:"30px"}}>CLINE MACHINE DEVICE REGISTRATION</Card.Title>
//                                 <hr style={{padding:"0", margin:"0" }}/>
//                             </Card.Header>
//                     <Card.Body style={{paddingTop:"0"}}>
//                         <Form >
//                             <Row>
//                                 <Col className="pr-1" md="6">
//                                     <Form.Group className="formDesign">
//                                         <label>PRODUCTION LINE NAME</label>
//                                         <Form.Select size="lg"
//                                             className="form-control"
//                                             name="product_lineid_ad"
//                                             value={batchDetails.values.LineID}
//                                             onChange={batchDetails.handleChange}
//                                             style={{ borderRadius: "10px" }}>
//                                             {lineDetails.map(item => {
//                                                 return (<option key={item.lineId} value={item.lineId}>{item.lineName}</option>);
//                                             })}
//                                         </Form.Select>
//                                     </Form.Group>
//                                 </Col>
//                                 <Col className="pl-1" md="6">
//                                     <Form.Group className="formDesign">
//                                         <label>MACHINE ID</label>
//                                         <Form.Control
//                                             placeholder="Machine Id"
//                                             type="text"
//                                             name="MachineId"
//                                             onChange={batchDetails.handleChange}
//                                             value={batchDetails.values.MachineId}
//                                             style={{ borderRadius: "10px" }}
//                                         ></Form.Control>
//                                     </Form.Group>
//                                 </Col>
//                             </Row>

//                             <Row>
//                                 <Col className="pr-1" md="6">
//                                     <Form.Group className="formDesign">
//                                         <label>DEVICE ID</label>
//                                         <Form.Control
//                                             placeholder="Device Id"
//                                             type="text"
//                                             name="DeviceId"
//                                             onChange={batchDetails.handleChange}
//                                             value={batchDetails.values.DeviceId}
//                                             style={{ borderRadius: "10px" }}
//                                         ></Form.Control>
//                                     </Form.Group>
//                                 </Col>
//                                 <Col className="pr-1" md="6">
//                                 </Col>
//                             </Row>
//                             <div className="button">
//                                 <button
//                                     className="btnSubmit"
//                                     type="submit"
//                                     variant="primary"
//                                     onClick={batchDetails.handleSubmit}
//                                     style={{ borderRadius: "10px" }}
//                                 >
//                                     SAVE
//                                 </button>
//                             </div>
//                             <div className="clearfix"></div>
//                         </Form>
//                     </Card.Body>
//                     {/* </Card>
//                     </Col> */}
//                 </div>
//             </Container>
//         </>
//     );
// }

// export default LineMachineDeviceForm;
