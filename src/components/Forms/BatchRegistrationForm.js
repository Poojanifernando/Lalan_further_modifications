import React, { useState, useEffect } from "react"
import axios from "axios";
import { getLocalhostUrl } from 'components/url/Url.js'
import { useFormik } from 'formik';
import {
    Button,
    Card,
    Form,
    Container,
    Row,
    Col,
} from "react-bootstrap";

function BatchRegistrationForm() {
    const userId = "userLocaleStorage"
    const [url, seturl] = useState('');


    // const navigate = navigate('/admin/BatchRegistration');

    const [productDetails, setProductDetails] = useState([]);

    //Hook
    const batchDetails = useFormik({
        initialValues: {
            userid_reg_bch: 'userId From LocaleStorage',
            batchID_regBch: '',
            batchName_regBch: '',
            count_regBch: '',
            productCategory: '',
            product_id: ''
        },
        onSubmit: values => {
            console.log(JSON.stringify(batchDetails.values))

            axios.post(url+'/api/v1/batch/saveBatch', batchDetails.values).then(() => {
                alert("Batch added successfully!!!");

            }).catch((err) => {
                alert(err);
            })
        }
    })
    useEffect(() => {
        const myurl = getLocalhostUrl();
         seturl(myurl)
        axios.get(myurl+'/api/v1/product/getAllProducts').then((response) => {
            setProductDetails(response.data.content);
        });

    }, [])

    return (
        <>
            <Container >
                <Row className="justify-content-center ">
                    <Col md="8">
                        <Card>
                            <Card.Header>
                                <Card.Title as="h4">Batch Registration</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form >
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Batch ID</label>
                                                <Form.Control
                                                    placeholder="Batch ID"
                                                    type="text"
                                                    name="batchID_regBch"
                                                    onChange={batchDetails.handleChange}
                                                    value={batchDetails.values.batchID_regBch}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Batch Name</label>
                                                <Form.Control
                                                    placeholder="Batch Name"
                                                    type="text"
                                                    name="batchName_regBch"
                                                    onChange={batchDetails.handleChange}
                                                    value={batchDetails.values.batchName_regBch}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Batch Count</label>
                                                <Form.Control
                                                    placeholder="Batch Count"
                                                    type="number"
                                                    name="count_regBch"
                                                    onChange={batchDetails.handleChange}
                                                    value={batchDetails.values.count_regBch}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>

                                                <label>Product Category</label>
                                                <Form.Select size="lg" className="form-control pl-1" as="select"
                                                    name="productCategory"
                                                    onChange={batchDetails.handleChange}
                                                    value={batchDetails.values.productCategory}
                                                >
                                                    <option>Select type</option>
                                                    <option>Semi Auto</option>
                                                    <option>Fully Auto</option>
                                                    <option>Hands Strapping </option>
                                                    <option>High Thickness</option>

                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Product ID</label>
                                                {/* <Form.Control
                                                    placeholder="Product ID"
                                                    type="text"
                                                    name="product_id"
                                                    onChange={batchDetails.handleChange}
                                                    value={batchDetails.values.product_id}
                                                ></Form.Control> */}
                                                <Form.Select size="lg"
                                                    className="form-control"
                                                    name="product_id"
                                                    value={batchDetails.values.product_id}
                                                    onChange={batchDetails.handleChange}>
                                                    {productDetails.map(item => {
                                                        return (<option>{item.productId}</option>);
                                                    })}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>

                                    </Row>

                                    {/* <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          placeholder="Last Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col> */}

                                    <Row className="justify-content-center ">
                                        <Button
                                            className="btn-fill center"
                                            type="submit"
                                            variant="primary"
                                            onClick={batchDetails.handleSubmit}
                                        >
                                            Save details
                                        </Button>
                                        {/* &nbsp;&nbsp;
                                        <Button
                                            className="btn-fill center"
                                            type="submit"
                                            variant="success"
                                        >
                                            Update Customer
                                        </Button> */}
                                    </Row>
                                    <div className="clearfix"></div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default BatchRegistrationForm;
