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


function CurrentProcessForm() {

    const iserId = localStorage.getItem("userId");

    //use states
    const [jobids, setjobids] = useState([]);
    const [productTable, setProductDetails] = useState([]);
    const [lineDetails, setLineDetails] = useState([]);
    const [cusDetails, setcusDetails] = useState([]);
    const [url, seturl] = useState('');

    //Hook
    const processDetails = useFormik({
        initialValues: {
            job_id_ad: '',
            userid_ad: iserId,
            batchid_ad: '',
            product_lineid_ad: '',
            batch_start_time: '',
            batch_end_time: '',
            roll_length: '',
            roll_weight: '',
            predicted_date: '',
            production_order: 1,
            count_reg_bch: '',
            product: '',
            job_description: '',
            Customer_id: '',
            Curd: '1',
        },
        validate: values => {
            const errors = {};
            if (!values.batchid_ad) {
                errors.batchid_ad = 'Batch Name is required';
            }
            if (!values.product_lineid_ad) {
                errors.product_lineid_ad = 'Product line id is required';
            }
            if (!values.batch_start_time) {
                errors.batch_start_time = 'Start time is required';
            }
            if (!values.batch_end_time) {
                errors.batch_end_time = 'End time is required';
            }
            if (!values.predicted_date) {
                errors.predicted_date = 'Date is required';
            }
            // if (!values.production_order) {
            //     errors.production_order = 'Order is required';
            // }
            if (!values.product) {
                errors.product = 'product is required';
            }
            if (!values.job_description) {
                errors.job_description = 'Description is required';
            }
            if (!values.Customer_id) {
                errors.Customer_id = 'Customer id is required';
            }
            return errors;
        },
        onSubmit: values => {
            if (processDetails.isValid) {

                axios.get(url + '/api/v1/admin/postcurrentdata/' + text + '/' + processDetails.values.job_description + '/' + processDetails.values.batchid_ad + '/' + processDetails.values.batch_start_time + '/' + processDetails.values.batch_end_time + '/' + processDetails.values.product + '/' + processDetails.values.count_reg_bch + '/' + processDetails.values.product_lineid_ad + '/' + processDetails.values.predicted_date + '/' + processDetails.values.production_order + '/' + processDetails.values.Customer_id + '/' + processDetails.values.Curd + '/' + processDetails.values.roll_length + '/' + processDetails.values.roll_weight + '/' + processDetails.values.userid_ad).then(() => {
                    alert("Current Process added successfully!!!");
                    window.location.reload();

                }).catch((err) => {
                    alert(err);
                })
            } else {
                console.log('Not all fields are filled in');
            }
        }
    })

    // console.log(JSON.stringify(productTable));

    useEffect(() => {
        const myurl = getLocalhostUrl();
        seturl(myurl)
        axios.get(myurl + '/api/v1/job/getAllJobs').then((response) => {
            setjobids(response.data.content);
        });
        axios.get(myurl + '/api/v1/product/getAllProductsNameAndIds').then((response) => {
            setProductDetails(response.data);
        });
        axios.get(myurl + '/api/v1/line/getAllLineAndId').then((response) => {
            setLineDetails(response.data);
        });

        axios.get(myurl + '/api/v1/customerRegistration/getAllCustomerRegistration').then((response) => {
            setcusDetails(response.data.content);
        });


    }, []);

    const [text, setText] = React.useState('');

    const onChange = (event) => {
        setText(event.target.value);

    }

    return (
        <>
            <Container >
                <div className="cardDesign ">
                    <Card.Header style={{ border: "none", backgroundColor: "white" }}>
                        <Card.Title style={{ color: '#555', fontSize: "0.8rem", fontWeight: "600", marginTop: "30px" }}>PRODUCTION REGISTRATION</Card.Title>
                        <hr style={{ padding: "0", margin: "0" }} />
                    </Card.Header>
                    <Card.Body style={{ paddingTop: "0" }}>
                        <Form >
                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">JOB NAME</label>
                                        <div className="">
                                            <input type="search" list="list" autoComplete="on" value={text} onChange={onChange} className="form-control" placeholder="Job" style={{ borderRadius: "10px" }} />
                                            <datalist id="list">
                                                <option value="">Choose</option>
                                                {jobids.map(item => {
                                                    return (<option key={item.jobId} value={item.jobId}>{item.jobId}</option>);
                                                })}
                                            </datalist>
                                        </div>

                                    </Form.Group>
                                </Col>
                                <Col className="">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">JOB DESCRIPTION</label>

                                        <Form.Control
                                            placeholder="width-length-thickness-strappingColor-PR/UNP-printColor-Core PR/UNP-strappingType"
                                            type="text"
                                            name="job_description"
                                            onChange={processDetails.handleChange}
                                            value={processDetails.values.job_description}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                        {processDetails.errors.job_description && (
                                            <div className="text-danger">{processDetails.errors.job_description}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">BATCH NAME</label>
                                        <Form.Control
                                            placeholder="Batch"
                                            type="text"
                                            name="batchid_ad"
                                            onChange={processDetails.handleChange}
                                            value={processDetails.values.batchid_ad}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                        {processDetails.errors.batchid_ad && (
                                            <div className="text-danger">{processDetails.errors.batchid_ad}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                            </Row>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">BATCH START TIME</label>
                                        <Form.Control
                                            placeholder="Start Time"
                                            type="time"
                                            name="batch_start_time"
                                            onChange={processDetails.handleChange}
                                            value={processDetails.values.batch_start_time}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                        {processDetails.errors.batch_start_time && (
                                            <div className="text-danger">{processDetails.errors.batch_start_time}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                                <Col className="pl-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">BATCH END TIME</label>
                                        <Form.Control
                                            placeholder="End Time"
                                            type="time"
                                            name="batch_end_time"
                                            onChange={processDetails.handleChange}
                                            value={processDetails.values.batch_end_time}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                        {processDetails.errors.batch_end_time && (
                                            <div className="text-danger">{processDetails.errors.batch_end_time}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">ROLL LENGTH(m)</label>
                                        <Form.Control
                                            placeholder="Length per roll"
                                            type="text"
                                            name="roll_length"
                                            onChange={processDetails.handleChange}
                                            value={processDetails.values.roll_length}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                        {processDetails.errors.roll_length && (
                                            <div className="text-danger">{processDetails.errors.roll_length}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                                <Col className="pl-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">ROLL WEIGHT(Kg)</label>
                                        <Form.Control
                                            placeholder="Weight per roll"
                                            type="text"
                                            name="roll_weight"
                                            onChange={processDetails.handleChange}
                                            value={processDetails.values.roll_weight}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                        {processDetails.errors.roll_weight && (
                                            <div className="text-danger">{processDetails.errors.roll_weight}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group className="formDesign">

                                        <label className="lblDesign">ITEM</label>
                                        <Form.Select
                                            size="lg"
                                            className="form-control"
                                            name="product"
                                            value={processDetails.values.product}
                                            onChange={processDetails.handleChange} style={{ borderRadius: "10px" }}
                                        >
                                            <option value="">Choose</option>
                                            {productTable.map(item => {
                                                return (<option key={item.productId} value={item.productId}>{item.productId} - {item.productname}</option>);
                                            })}
                                        </Form.Select>
                                        {processDetails.errors.product && (
                                            <div className="text-danger">{processDetails.errors.product}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                                <Col className="pl-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">TOTAL ITEM LENGTH(m)</label>
                                        <Form.Control
                                            placeholder="Count Length(5000m)"
                                            type="number"
                                            min="0"
                                            name="count_reg_bch"
                                            onChange={processDetails.handleChange}
                                            value={processDetails.values.count_reg_bch}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                        {processDetails.errors.count_reg_bch && (
                                            <div className="text-danger">{processDetails.errors.count_reg_bch}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">NUMBER OF ROLLS</label>
                                        <Form.Control
                                            placeholder="0"
                                            type="text"
                                            name="rolls"
                                            // onChange={processDetails.handleChange}
                                            value={processDetails.values.count_reg_bch / processDetails.values.roll_length}
                                            style={{ borderRadius: "10px" }}
                                            disabled={true}
                                        ></Form.Control>
                                        {/* {processDetails.errors.production_order && (
                                            <div className="text-danger">{processDetails.errors.production_order}</div>
                                        )} */}
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">PRODUCTION LINE NAME</label>
                                        <Form.Select size="lg" className="form-control" name="product_lineid_ad" value={processDetails.values.product_lineid_ad} onChange={processDetails.handleChange} style={{ borderRadius: "10px" }}>
                                            <option value="">Choose</option>
                                            {lineDetails.map(item => {
                                                return (<option key={item.lineId} value={item.lineId}>{item.lineName}</option>);
                                            })}
                                        </Form.Select>
                                        {processDetails.errors.product_lineid_ad && (
                                            <div className="text-danger">{processDetails.errors.product_lineid_ad}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                                <Col className="pl-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">JOB START DATE</label>
                                        <Form.Control
                                            placeholder="Date"
                                            type="date"
                                            name="predicted_date"
                                            onChange={processDetails.handleChange}
                                            value={processDetails.values.predicted_date}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                        {processDetails.errors.predicted_date && (
                                            <div className="text-danger">{processDetails.errors.predicted_date}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">PRODUCTION ORDER</label>
                                        <Form.Control
                                            placeholder="Production Order"
                                            type="number"
                                            name="production_order"
                                            onChange={processDetails.handleChange}
                                            value={processDetails.values.production_order}
                                            style={{ borderRadius: "10px" }}
                                            disabled={true}
                                        ></Form.Control>
                                        {processDetails.errors.production_order && (
                                            <div className="text-danger">{processDetails.errors.production_order}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                                <Col className="pl-1" md="6">
                                    <Form.Group className="formDesign">
                                        <label className="lblDesign">CUSTOMER</label>
                                        <Form.Select size="lg" 
                                        className="form-control" 
                                        name="Customer_id" 
                                        value={processDetails.values.Customer_id} 
                                        onChange={processDetails.handleChange}>
                                            <option value="">Choose</option>
                                            {cusDetails
                                                .sort((a, b) => a.customer_name.localeCompare(b.customer_name)) // sort the array by customer_name in ascending order
                                                .map(item => (
                                                    <option key={item.cus_id} value={item.cus_id}>{item.customer_name} - {item.cus_id}</option>
                                                ))}
                                        </Form.Select>
                                        {processDetails.errors.Customer_id && (
                                            <div className="text-danger">{processDetails.errors.Customer_id}</div>
                                        )}
                                    </Form.Group>
                                </Col>

                            </Row>
                            <div className="button">
                                <button
                                    className="btnSubmit"
                                    type="submit"
                                    variant="primary"
                                    onClick={processDetails.handleSubmit}
                                    float="inlineEnd"
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
            <br /><br />
        </>
    );
}
export default CurrentProcessForm;
