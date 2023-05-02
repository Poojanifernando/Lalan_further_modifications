import React, { useState, useEffect } from "react"
import axios from "axios";
import { getLocalhostUrl } from 'components/url/Url.js'
import { Field, useFormik } from 'formik';
import "../../assets/css/allForms.css"


import {
   
    Badge,
    Button,
    Card,
    Form,
    Navbar,
    Nav,
    Container,
    Row,
    Col,
    Dropdown,
   


} from "react-bootstrap";


function TestServiceForm() {

    // const userId = localStorage.getItem("userId");
    // const [lineDetails, setLineDetails] = useState([]);
    // const [url, seturl] = useState('');


    // const Devicereg = useFormik({
    //     initialValues: {
           
    //         LineId: '',
    //         MachineID: '',
           

    //     },
      

    //     onSelect: values => {
    //         if (Devicereg.isValid) {
    //             console.log(JSON.stringify(Devicereg.values))

    //             axios.get(url + '/api/v1/admin/TestServiceScreen/' + Devicereg.values.LineId + '/' + Devicereg.values.MachineID + '/' + Devicereg.values.MachineName + '/' + Devicereg.values.MachineDiscription + '/' + Devicereg.values.deviceid_dvc_reg + '/' + Devicereg.values.parameter_id + '/' + Devicereg.values.description + '/' + Devicereg.values.alarm_alert_type + '/' + Devicereg.values.completed_prod_count + '/' + Devicereg.values.is_it_starter_value + '/' + Devicereg.values.min_value + '/' + Devicereg.values.max_value + '/' + Devicereg.values.measuring_unit + '/' + Devicereg.values.message + '/' + Devicereg.values.devicegpslocation + '/' + Devicereg.values.device_ip_address + '/' + Devicereg.values.device_name_dvc_reg + '/1').then(() => {
    //                 alert("Device Added successfully!!!");
    //                 window.location.reload(false);
    //             }).catch((err) => {
    //                 alert(err);
    //             })
    //         } else {
    //             console.log('Not all fields are filled in');
    //         }
    //     }

    // })


    // useEffect(() => {
    //     const myurl = getLocalhostUrl();
    //     seturl(myurl)
    //     axios.get(myurl + '/api/v1/line/getAllLineAndId').then((response) => {
    //         setLineDetails(response.data);
    //     });

    // }, []);


    return (
        <>
            <Container >
                <div className="cardDesign ">
                    <Card.Header style={{ border: "none", backgroundColor: "white" }}>
                        <Card.Title style={{ color: '#555', fontSize: "0.8rem", fontWeight: "600", marginTop: "30px" }}> TESTING SERVICE </Card.Title>
                        <hr style={{ padding: "0", margin: "0" }} />
                    </Card.Header>
                    <Card.Body style={{ paddingTop: "0" }}>
                        <Form>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group className="formDesign">
                                    <label className="lblDesign">SELECT LINE </label> 
                                        <Form.Select 
                                        size="lg" 
                                        className="form-control" 
                                        name="LineId" 
                                        
                                        // value={Devicereg.values.LineId} 
                                        // onChange={Devicereg.handleChange} 
                                        style={{ borderRadius: "10px" }}>

                                            <option value=""></option>
                                            {/* {lineDetails.map(item => {
                                                return (<option key={item.lineId} value={item.lineId}>{item.lineName}</option>);
                                            })} */}
                                        </Form.Select>
                                        {/*Devicereg.errors.LineId && (
                                            <div className="text-danger">{Devicereg.errors.LineId}</div>
                                        )*/}

                                        
                                    </Form.Group>
                                </Col>
        

                                <Col className="pr-1" md="6">
                                    <Form.Group className="formDesign">
                                    <label className="lblDesign">SELECT MACHINE </label>
                                        <Form.Select 
                                        size="lg" 
                                        className="form-control" 
                                        name="MachineId" 
                                       // value={Devicereg.values.MachineID} 
                                      //  onChange={Devicereg.handleChange} 
                                        style={{ borderRadius: "10px" }}>
                                            <option value=""></option>
                                            {/*lineDetails.map(item => {
                                                return (<option key={item.MachineID} value={item.MachineID}>{item.MachineName}</option>);
                                            })*/}
                                        </Form.Select>

                                        {/*Devicereg.errors.MachineId && (
                                            <div className="text-danger">{Devicereg.errors.MachineId}</div>
                                        )*/}

                                        
                                    </Form.Group>
                                </Col>
                                </Row>
                                
                             


                        </Form>
                    </Card.Body>
                 
                </div>
            </Container>
        </>
    );
} 





export default  TestServiceForm;
