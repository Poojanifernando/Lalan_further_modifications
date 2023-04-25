import React, { useState, useEffect } from "react"
import axios from "axios";
import { getLocalhostUrl } from 'components/url/Url.js'
import { useFormik } from 'formik';
import "../../assets/css/allForms.css"
// react-bootstrap components
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
    Dropdown
} from "react-bootstrap";

function ProductLineRegistrationForm() {
    const userId = localStorage.getItem("userId");
    const [url, seturl] = useState('');

    //Hook
    const LineDetails = useFormik({
        initialValues: {
            userID_line: userId,
            lineId: '',
            lineName: '',
            description: '',
            startTime: '',
            endTime: '',
            image: ''
        },
        validate: values => {
            const errors = {};
            if (!values.lineId) {
                errors.lineId = 'Line ID is required';
            }
            if (!values.description) {
                errors.description = 'Line description is required';
            }
            if (!values.lineName) {
                errors.lineName = 'Line Name is required';
            }
            if (!values.startTime) {
                errors.startTime = 'start time is required';
            }
            if (!values.endTime) {
                errors.endTime = 'end time is required';
            }
            return errors;
        },
        onSubmit: values => {
            if (LineDetails.isValid) {
                console.log('All fields are filled in');

                axios.post(url + '/api/v1/line/saveLine', LineDetails.values).then(() => {
                    alert("Line added successfully!!!");
                    window.location.reload();
                }).catch((err) => {
                    alert(err);
                })

            } else {
                console.log('Not all fields are filled in');
            }
        }
    });
    useEffect(() => {
        const myurl = getLocalhostUrl();
        seturl(myurl)
    }, []);

    return (
        <>
            <Container >
                <div className="cardDesign ">
                    {/* <Col md="8">
                        <Card> */}
                    <Card.Header style={{ border: "none", backgroundColor: "white" }}>
                    <Card.Title style={{ color: '#555', fontSize: "0.8rem", fontWeight: "600", marginTop:"30px"}}>PRODUCT LINE REGISTRATION</Card.Title>
                        <hr style={{padding:"0", margin:"0" }} />
                    </Card.Header>
                   
                    <Card.Body style={{paddingTop:"0"}}>
                        <Form>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">PRODUCT LINE ID</label>
                                        <Form.Control
                                            placeholder="Line ID"
                                            type="text"
                                            name="lineId"
                                            onChange={LineDetails.handleChange}
                                            value={LineDetails.values.lineId}
                                            style={{ borderRadius: "10px" }}
                                            required={true}

                                        ></Form.Control>
                                        {LineDetails.errors.lineId && (
                                            <div className="text-danger">{LineDetails.errors.lineId}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                                <Col className="pl-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">PRODUCT LINE DESCRIPTION</label>
                                        <Form.Control
                                            placeholder="Line Description"
                                            type="text"
                                            name="description"
                                            onChange={LineDetails.handleChange}
                                            value={LineDetails.values.description}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                        {LineDetails.errors.description && (
                                            <div className="text-danger">{LineDetails.errors.description}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">PRODUCT LINE NAME</label>
                                        <Form.Control
                                            placeholder="Line Name"
                                            type="text"
                                            name="lineName"
                                            onChange={LineDetails.handleChange}
                                            value={LineDetails.values.lineName}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                        {LineDetails.errors.lineName && (
                                            <div className="text-danger">{LineDetails.errors.lineName}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                                <Col className="pr-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">PRODUCT LINE IMAGE</label>
                                        <Form.Control
                                            placeholder="Line Image"
                                            type="file"
                                            name="image"
                                            onChange={LineDetails.handleChange}
                                            value={LineDetails.values.image}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>

                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">PRODUCT LINE START TIME</label>
                                        <Form.Control
                                            placeholder="Line Start"
                                            type="time"
                                            name="startTime"
                                            onChange={LineDetails.handleChange}
                                            value={LineDetails.values.startTime}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                        {LineDetails.errors.startTime && (
                                            <div className="text-danger">{LineDetails.errors.startTime}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                                <Col className="pr-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">PRODUCT LINE END TIME</label>
                                        <Form.Control
                                            placeholder="Line End"
                                            type="time"
                                            name="endTime"
                                            onChange={LineDetails.handleChange}
                                            value={LineDetails.values.endTime}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                        {LineDetails.errors.endTime && (
                                            <div className="text-danger">{LineDetails.errors.endTime}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className="button">
                                <button
                                    className="btnSubmit"
                                    type="submit"
                                    variant="primary"
                                    onClick={LineDetails.handleSubmit}
                                >
                                    ADD
                                </button>
                            </div>
                            <div className="clearfix"></div>
                        </Form>
                    </Card.Body>
                    {/* </Card>
            </Col> */}
                </div>
            </Container>
            <br/><br/>
        </>
    );
}

export default ProductLineRegistrationForm;
