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
    Col
} from "react-bootstrap";

function CustomerRegistraionForm() {

    const userId = localStorage.getItem("userId");
    const [productDetails, setProductDetails] = useState([]);
    const [url, seturl] = useState('');

    useEffect(() => {
        const myurl = getLocalhostUrl();
        seturl(myurl)
    }, []);


    //Hook
    const cus_reg = useFormik({
        initialValues: {
            user_id: userId,
            customer_name: '',
            customer_NIC: '',
            contact_person: '',
            customer_contact_number: '',
            customer_email: ''
        },
        validate: values => {
            const errors = {};
            if (!values.customer_name) {
                errors.customer_name = 'Customer name is required';
            }
            if (!values.customer_NIC) {
                errors.customer_NIC = 'Customer code is required';
            }
            if (!values.contact_person) {
                errors.contact_person = 'Contact person is required';
            }
            if (!values.customer_email) {
                errors.customer_email = 'Customer email is required';
            }
            if (!values.customer_contact_number) {
                errors.customer_contact_number = 'Contact number is required';
            }
            return errors;
        },
        onSubmit: values => {
            if (cus_reg.isValid) {
                console.log(JSON.stringify(cus_reg.values))

                axios.post(url+'/api/v1/customerRegistration/saveCustomerRegistration', cus_reg.values).then(() => {
                    alert("Customer added successfully!!!");
                    window.location.reload(false);

                }).catch((err) => {
                    alert(err);
                })
            } else {
                console.log('Not all fields are filled in');
            }
        }
    })

    return (
        <>
            <Container >
                <div className="cardDesign ">
                    {/* <Col md="8">
                        <Card> */}
                            <Card.Header style={{ border:"none", backgroundColor: "white"}}>
                                <Card.Title style={{ color: '#555', fontSize: "0.8rem", fontWeight: "600", marginTop:"30px"}}>CUSTOMER REGISTRATION</Card.Title>
                                <hr style={{padding:"0", margin:"0" }}/>
                            </Card.Header>
                            <Card.Body style={{paddingTop:"0"}}>
                                <Form>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group className="formDesign">
                                                <label className="lblDesign">CUSTOMER NAME</label>
                                                <Form.Control
                                                    placeholder="Company Name"
                                                    type="text"
                                                    name="customer_name"
                                                    onChange={cus_reg.handleChange}
                                                    value={cus_reg.values.customer_name}
                                                    style={{ borderRadius: "10px"  }}
                                                    required
                                                ></Form.Control>
                                                {cus_reg.errors.customer_name && (
                                                    <div className="text-danger">{cus_reg.errors.customer_name}</div>
                                                )}
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group className="formDesign">
                                                <label className="lblDesign">CUSTOMER CODE</label>
                                                <Form.Control
                                                    placeholder="Customer Code"
                                                    type="text"
                                                    name="customer_NIC"
                                                    maxlength="20"
                                                    onChange={cus_reg.handleChange}
                                                    value={cus_reg.values.customer_NIC}
                                                    style={{ borderRadius: "10px"  }}
                                                ></Form.Control>
                                                {cus_reg.errors.customer_NIC && (
                                                    <div className="text-danger">{cus_reg.errors.customer_NIC}</div>
                                                )}
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group className="formDesign">
                                                <label className="lblDesign">CONTACT PERSON</label>
                                                <Form.Control
                                                    placeholder="Contact Person Name"
                                                    type="text"
                                                    name="contact_person"
                                                    onChange={cus_reg.handleChange}
                                                    value={cus_reg.values.contact_person}
                                                    style={{borderRadius: "10px"  }}
                                                ></Form.Control>
                                                {cus_reg.errors.contact_person && (
                                                    <div className="text-danger">{cus_reg.errors.contact_person}</div>
                                                )}
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group className="formDesign">
                                                <label className="lblDesign">CONTACT NUMBER</label>
                                                <Form.Control
                                                    placeholder="0xx-xxxxxxx"
                                                    type="text"
                                                    maxlength="11"
                                                    name="customer_contact_number"
                                                    onChange={cus_reg.handleChange}
                                                    style={{ borderRadius: "10px" }}
                                                    value={cus_reg.values.customer_contact_number}
                                                ></Form.Control>
                                                {cus_reg.errors.customer_contact_number && (
                                                    <div className="text-danger">{cus_reg.errors.customer_contact_number}</div>
                                                )}
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group className="formDesign">
                                                <label className="lblDesign">EMAIL</label>
                                                <Form.Control
                                                    placeholder="example@email"
                                                    type="text"
                                                    name="customer_email"
                                                    onChange={cus_reg.handleChange}
                                                    value={cus_reg.values.customer_email}
                                                    style={{ borderRadius: "10px"  }}
                                                ></Form.Control>
                                                {cus_reg.errors.customer_email && (
                                                    <div className="text-danger">{cus_reg.errors.customer_email}</div>
                                                )}
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <div className="button">
                                        <button
                                            className="btnSubmit"
                                            type="submit"
                                            variant="primary"
                                            onClick={cus_reg.handleSubmit}
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
        </>
    );
}

export default CustomerRegistraionForm;
