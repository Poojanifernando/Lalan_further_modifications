// import React, { useState, useEffect } from "react"
// import axios from "axios";
// import { getLocalhostUrl } from 'components/url/Url.js'
// import { useFormik } from 'formik';
// import "../../assets/css/allForms.css"

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

// function MachineRegistrationForm() {
//     const userId = "userLocaleStorage"
//     const [url, seturl] = useState('');

//     // const [MachineDetails, setMachines] = useState([]);

//     //Hook
//     const machDetails = useFormik({
//         initialValues: {
//             user_id_para: 'userId From LocaleStorage',
//             machine_id: '',
//             machine_name: '',
//             machine_description: '',
//             machine_image: '',
//         },
//         onSubmit: values => {
//             console.log(JSON.stringify(machDetails.values))

//             axios.post(url + '/api/v1/machine/saveMachine', machDetails.values).then(() => {
//                 alert("Machine added successfully!!!");

//             }).catch((err) => {
//                 alert(err);
//             })
//         }
//     })
//     useEffect(() => {
//         const myurl = getLocalhostUrl();
//         seturl(myurl)
//     }, []);

//     return (
//         <>
//             <Container >
//                 <div className="cardDesign ">
//                     {/* <Col md="8">
//                         <Card> */}
//                     <Card.Header style={{ border:"none", backgroundColor: "white" }}>
//                                 <Card.Title style={{ color: '#555', fontSize: "1.0rem", fontWeight: "600", marginTop:"30px"}}>Customer Registration</Card.Title>
//                                 <hr style={{padding:"0", margin:"0" }}/>
//                             </Card.Header>
//                     <Card.Body style={{paddingTop:"0"}}>
//                         <Form>
//                             <Row>
//                                 <Col className="pr-1" md="6">
//                                     <Form.Group className="formDesign">
//                                         <label>Machine ID</label>
//                                         <Form.Control
//                                             placeholder="Machine ID"
//                                             type="text"
//                                             name="machine_id"
//                                             onChange={machDetails.handleChange}
//                                             value={machDetails.values.machine_id}
//                                             style={{ borderRadius: "10px" }}
//                                         ></Form.Control>
//                                     </Form.Group>
//                                 </Col>
//                                 <Col className="pl-1" md="6">
//                                     <Form.Group className="formDesign">
//                                         <label>Machine Description</label>
//                                         <Form.Control
//                                             placeholder="Machine Description"
//                                             type="text"
//                                             name="machine_description"
//                                             onChange={machDetails.handleChange}
//                                             value={machDetails.values.machine_description}
//                                             style={{ borderRadius: "10px" }}
//                                         ></Form.Control>
//                                     </Form.Group>
//                                 </Col>
//                             </Row>

//                             <Row>
//                                 <Col className="pr-1" md="6">
//                                     <Form.Group className="formDesign">
//                                         <label>Machine Name</label>
//                                         <Form.Control
//                                             placeholder="Machine Name"
//                                             type="text"
//                                             name="machine_name"
//                                             onChange={machDetails.handleChange}
//                                             value={machDetails.values.machine_name}
//                                             style={{ borderRadius: "10px" }}
//                                         ></Form.Control>
//                                     </Form.Group>
//                                 </Col>
//                                 <Col className="pl-1" md="6">
//                                     <Form.Group className="formDesign">
//                                         <label>Machine Image</label>
//                                         <Form.Control
//                                             placeholder="Machine Image"
//                                             type="file"
//                                             name="machine_image"
//                                             onChange={machDetails.handleChange}
//                                             value={machDetails.values.machine_image}
//                                             style={{ borderRadius: "10px" }}
//                                         ></Form.Control>
//                                     </Form.Group>
//                                 </Col>
//                             </Row>
//                             {/* <Col className="pl-1" md="6">
//                       <Form.Group>
//                         <label>Last Name</label>
//                         <Form.Control
//                           placeholder="Last Name"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col> */}
//                             <div className="button">
//                                 <button
//                                     className="btnSubmit"
//                                     type="submit"
//                                     variant="primary"
//                                     onClick={machDetails.handleSubmit}
//                                     style={{ borderRadius: "10px" }}
//                                 >
//                                     Add New Machine
//                                 </button>
//                                 {/* &nbsp;&nbsp;
//                                         <Button
//                                             className="btn-fill center"
//                                             type="submit"
//                                             variant="success"
//                                         >
//                                             Update Machine
//                                         </Button> */}
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

// export default MachineRegistrationForm;
