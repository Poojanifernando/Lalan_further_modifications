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
import { DropdownItem } from "reactstrap";

function ProductRegistrationForm() {
    const userid_pro = "UID_005"
    const [url, seturl] = useState('');

    //Hook
    const ProDetails = useFormik({
        initialValues: {
            userID_pro: userid_pro,
            productId: '',
            productName: '',
            description: '',
            image: '',
        },


        validate: values => {
            const errors = {};
            if (!values.productId) {
                errors.productId = 'Item id is required';
            }
            if (!values.productName) {
                errors.productName = 'Item name is required';
            }
            if (!values.description) {
                errors.description = ' Item Description is required';
            }
            return errors;
        },
        onSubmit: values => {
            if (ProDetails.isValid) {

                axios.post(url + '/api/v1/product/saveProduct', ProDetails.values).then(() => {
                    alert("Item added successfully!!!");
                    window.location.reload(false);

                }).catch((err) => {
                    alert(err);
                })

            } else {
                console.log('Not all fields are filled in');
            }
        }
    })
    useEffect(() => {
        const myurl = getLocalhostUrl();
        seturl(myurl)
    }, []);
    return (
        <>
            <Container >
                <div className="cardDesign ">
                    <Card.Header style={{ border: "none", backgroundColor: "white" }}>
                        <Card.Title style={{ color: '#555', fontSize: "0.8rem", fontWeight: "600", marginTop:"30px"}}>ITEMS REGISTRATION</Card.Title>
                        <hr style={{padding:"0", margin:"0" }}/>
                    </Card.Header>
                    <Card.Body style={{paddingTop:"0"}}>
                        <Form>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">ITEM CODE</label>
                                        <Form.Control
                                            placeholder="Item Code"
                                            type="text"
                                            name="productId"
                                            onChange={ProDetails.handleChange}
                                            value={ProDetails.values.productId}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                        {ProDetails.errors.productId && (
                                            <div className="text-danger">{ProDetails.errors.productId}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                                <Col className="pl-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">ITEM NAME</label>
                                        <Form.Control
                                            placeholder="Item Name"
                                            type="text"
                                            name="productName"
                                            onChange={ProDetails.handleChange}
                                            value={ProDetails.values.productName}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                        {ProDetails.errors.productName && (
                                            <div className="text-danger">{ProDetails.errors.productName}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">ITEM DESCRIPTION</label>
                                        <Form.Control
                                            placeholder="eg:9mmx2500mx0.55mm YELLOW UNPRINTED SEMI AUTO"
                                            type="text"
                                            name="description"
                                            onChange={ProDetails.handleChange}
                                            value={ProDetails.values.description}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                        {ProDetails.errors.description && (
                                            <div className="text-danger">{ProDetails.errors.description}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                                <Col className="pl-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">ITEM IMAGE</label>
                                        <Form.Control
                                            placeholder="Product Image"
                                            type="file"
                                            name="image"
                                            onChange={ProDetails.handleChange}
                                            value={ProDetails.values.image}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <div className="button ">
                                <button
                                    className="btnSubmit"
                                    type="submit"
                                    variant="primary"
                                    onClick={ProDetails.handleSubmit}
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

export default ProductRegistrationForm;
