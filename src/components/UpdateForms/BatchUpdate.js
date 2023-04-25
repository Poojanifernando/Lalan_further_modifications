import React, { useState, useEffect } from "react"
import axios from "axios";
import { useFormik, Formik } from "formik";
import { getLocalhostUrl } from 'components/url/Url.js'
import { useHistory } from 'react-router-dom';
import {
    Button,
    Card,
    Form,
    Container,
    Row,
    Col,
} from "react-bootstrap";


function BatchUpdate({ match }) {
    const history = useHistory();
    const userid = localStorage.getItem('userId')
    const [Batchdetails111, setBatchdetails] = useState([]);
    const [productDetails, setProductDetails] = useState([]);
    const [userid_reg_bch, setuserid_reg_bch] = useState(userid);
    const [batchid, setbatchid] = useState("");
    const [batchName_regBch, setbatchName_regBch] = useState("");
    const [count_regBch, setcount_regBch] = useState("");
    const [productCategory, setproductCategory] = useState("");
    const [product_id, setproduct_id] = useState("");
    const [url, seturl] = useState('');



    const [batchDetails] = useState({
        userid_reg_bch: userid,
        batchID_regBch: '',
        batchName_regBch: '',
        count_regBch: '',
        productCategory: '',
        product_id: ''
    })



    useEffect(() => {
        const myurl = getLocalhostUrl();
        seturl(myurl)

        axios.get(myurl + '/api/v1/product/getAllProducts').then((response) => {
            setProductDetails(response.data.content);
        });

        axios.get(myurl + '/api/v1/batch/searchBatch/' + match.params.id).then((response) => {
            setBatchdetails(response.data.content);

            setbatchid(response.data.content.batchID_regBch);
            setbatchName_regBch(response.data.content.batchName_regBch);
            setproductCategory(response.data.content.productCategory);
            setcount_regBch(response.data.content.count_regBch);
            setproduct_id(response.data.content.product_id);

        });
    }, [])

    const ChangeOnClick = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("userid_reg_bch", userid_reg_bch);
        formData.append("batchID_regBch", batchid);
        formData.append("batchName_regBch", batchName_regBch);
        formData.append("count_regBch", count_regBch);
        formData.append("productCategory", productCategory);
        formData.append("product_id", product_id);


        batchDetails.userid_reg_bch = formData.get('userid_reg_bch');
        batchDetails.batchID_regBch = formData.get('batchID_regBch');
        batchDetails.batchName_regBch = formData.get('batchName_regBch');
        batchDetails.count_regBch = formData.get('count_regBch');
        batchDetails.productCategory = formData.get('productCategory');
        batchDetails.product_id = formData.get('product_id');
        console.log(batchDetails);

        await axios.put(url + `/api/v1/batch/updateBatch/${match.params.id}`, batchDetails)
            .then(res => {
                console.log("Return Data", res);
                alert("Update Success!!");
                history.push('/admin/BatchRegistration')

            })
            .catch(err => {
                alert("Update Failed!!");
                console.log(err);
            });

    }

    const CancelOnClick = async (e) => {
        e.preventDefault();
        history.push('/admin/BatchRegistration')
    }

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
                                <Formik>
                                    <Form
                                    >
                                        <Row>
                                            <Col className="pr-1" md="6">
                                                <Form.Group>
                                                    <label>Batch ID</label>
                                                    <Form.Control
                                                        placeholder="Batch ID"
                                                        type="text"
                                                        name="batchID_regBch"
                                                        value={batchid}
                                                        onChange={e => setbatchid(e.target.value)}
                                                        disabled={true}
                                                    // onChange={batchDetails.handleChange}
                                                    // value={batchDetails.values.batchID_regBch}
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
                                                        value={batchName_regBch}
                                                        onChange={e => setbatchName_regBch(e.target.value)}
                                                    // onChange={batchDetails.handleChange}
                                                    // value={batchDetails.values.batchName_regBch}
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
                                                        value={count_regBch}
                                                        onChange={e => setcount_regBch(e.target.value)}
                                                    // onChange={batchDetails.handleChange}
                                                    // value={batchDetails.values.count_regBch}
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col className="pl-1" md="6">
                                                <Form.Group>

                                                    <label>Product Category</label>
                                                    <Form.Select size="lg" className="form-control pl-1" as="select"
                                                        name="productCategory"
                                                        value={productCategory}
                                                        onChange={e => setproductCategory(e.target.value)}
                                                    // onChange={batchDetails.handleChange}
                                                    // value={batchDetails.values.productCategory}
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

                                                    <Form.Select size="lg"
                                                        className="form-control"
                                                        name="product_id"
                                                        value={product_id}
                                                        onChange={e => setproduct_id(e.target.value)}
                                                    // value={batchDetails.values.product_id}
                                                    // onChange={batchDetails.handleChange}
                                                    >
                                                        {productDetails.map(item => {
                                                            return (<option>{item.productId}</option>);
                                                        })}
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="justify-content-center ">
                                            <Button
                                                className="btn-fill center"
                                                type="submit"
                                                variant="success"
                                                onClick={(e) => ChangeOnClick(e)}
                                            // onClick={batchDetails.handleSubmit}
                                            >
                                                Update Customer
                                            </Button>
                                            &nbsp;&nbsp;
                                            <Button
                                                className="btn-fill center"
                                                type="submit"
                                                variant="danger"
                                                onClick={(e) => CancelOnClick(e)}

                                            >
                                                Cancel
                                            </Button>
                                        </Row>
                                        <div className="clearfix"></div>
                                    </Form>
                                </Formik>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default BatchUpdate;
