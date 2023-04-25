import React, { useState, useEffect } from "react"
import axios from "axios";
import { getLocalhostUrl } from 'components/url/Url.js'
import { useHistory } from 'react-router-dom';
import "../../assets/css/allForms.css"
// react-bootstrap components
import {
    Button,
    Card,
    Form,
    Container,
    Row,
    Col,
} from "react-bootstrap";

function CurrentProcessUpdate({ match }) {

    const iserId = localStorage.getItem("userId");
    const history = useHistory();
    const [url, seturl] = useState('');
    //use states
    const [productTable, setProductDetails] = useState([]);
    const [lineDetails, setLineDetails] = useState([]);
    const [cusDetails, setcusDetails] = useState([]);
    // const [details, setdetails] = useState([]);
    const [job_id_ad, setjob_id_ad] = useState('');
    // const [userid_ad, setuserid_ad] = useState("");
    const [batchid_ad, setbatchid_ad] = useState("");
    const [product_lineid_ad, setproduct_lineid_ad] = useState("");
    const [batch_start_time, setbatch_start_time] = useState("");
    const [count, setcount] = useState("");
    const [batch_end_time, setbatch_end_time] = useState("");
    const [predicted_date, setpredicted_date] = useState("");
    const [production_order, setproduction_order] = useState("");
    const [product, setproduct] = useState("");
    const [job_description, setjob_description] = useState("");
    const [Customer_id, setCustomer_id] = useState('');
    // const [Curd, setCurd] = useState("3");
    const [roll_length, setroll_length] = useState('');
    const [roll_weight, setroll_weight] = useState('');


    const [details] = useState({
        userid_ad: iserId,
        job_id_ad: '',
        batchid_ad: '',
        product_lineid_ad: '',
        batch_start_time: '',
        batch_end_time: '',
        roll_length: '',
        roll_weight: '',
        predicted_date: '',
        production_order: '',
        product: '',
        job_description: '',
        Customer_id: '',
        Curd: '3',
    })

    useEffect(() => {
        const myurl = getLocalhostUrl();
        seturl(myurl)
        axios.get(myurl + '/api/v1/admin/getcurrentprocess/' + match.params.id).then((response) => {
            setjob_id_ad(response.data.job_id_ad)
            setbatchid_ad(response.data.batchid_ad)
            setproduct_lineid_ad(response.data.product_lineid_ad)
            setbatch_start_time(response.data.batch_start_time)
            setbatch_end_time(response.data.batch_end_time)
            setroll_length(response.data.roll_length)
            setroll_weight(response.data.roll_weight)
            setpredicted_date(response.data.predicted_date)
            setproduction_order(response.data.production_order)
            setproduct(response.data.product_id);
            setjob_description(response.data.job_description);
            setCustomer_id(response.data.customer_id);
            setcount(response.data.count_reg_bch)
        });

        axios.get(myurl + '/api/v1/product/getAllProductsNameAndIds').then((response) => {
            setProductDetails(response.data);
        });

        axios.get(myurl + '/api/v1/line/getAllLineAndId').then((response) => {
            setLineDetails(response.data);
        });

        axios.get(myurl + '/api/v1/customerRegistration/getAllCusDetails').then((response) => {
            setcusDetails(response.data);
        });
    }, []);

    const ChangeOnClick = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("userid_ad", "user_005");
        formData.append("product_lineid_ad", product_lineid_ad);
        formData.append("job_id_ad", job_id_ad);
        formData.append("job_description", job_description);
        formData.append("batchid_ad", batchid_ad);
        formData.append("batch_start_time", batch_start_time);
        formData.append("roll_length", roll_length);
        formData.append("roll_weight", roll_weight);
        formData.append("count", count);
        formData.append("batch_end_time", batch_end_time);
        formData.append("predicted_date", predicted_date);
        formData.append("production_order", production_order);
        formData.append("product", product);
        formData.append("Customer_id", Customer_id);
        formData.append("Curd", '3');

        details.userid_ad = formData.get('userid_ad');
        details.product_lineid_ad = formData.get('product_lineid_ad');
        details.job_id_ad = formData.get('job_id_ad');
        details.job_description = formData.get('job_description');
        details.batchid_ad = formData.get('batchid_ad');
        details.batch_start_time = formData.get('batch_start_time');
        details.roll_length = formData.get('roll_length');
        details.roll_weight = formData.get('roll_weight');
        details.count = formData.get('count');
        details.batch_end_time = formData.get('batch_end_time');
        details.predicted_date = formData.get('predicted_date');
        details.production_order = formData.get('production_order');
        details.product = formData.get('product');
        details.Customer_id = formData.get('Customer_id');
        details.Curd = formData.get('Curd');

        console.log('details.count', details)


        await axios.get(url + '/api/v1/admin/postcurrentdata/' + details.job_id_ad + '/' + details.job_description + '/' + details.batchid_ad + '/' + details.batch_start_time + '/' + details.batch_end_time + '/' + details.product + '/' + details.count + '/' + details.product_lineid_ad + '/' + details.predicted_date + '/' + details.production_order + '/' + details.Customer_id + '/' + details.Curd + '/' + details.roll_length + '/' + details.roll_weight + '/' + match.params.id)
            .then(res => {
                console.log("Return Data", res);
                alert("Update Success!!");
                history.push('/admin/CurrentProcessRegistration')
            })
            .catch(err => {
                alert("Update Failed!!");
                console.log(err);
            });
    }

    const CancelOnClick = async (e) => {
        e.preventDefault();
        history.push('/admin/CurrentProcessRegistration')
    }



    return (
        <>
            <Container >
                <div className="cardDesign ">
                    <Card.Header style={{ border: "none", backgroundColor: "white" }}>
                        <Card.Title style={{ color: '#555', fontSize: "0.8rem", fontWeight: "600", marginTop: "30px" }}>PRODUCTION REGISTRATION UPDATE</Card.Title>
                        <hr />
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group>
                                        <label className="lblDesign">JOB ID</label>
                                        <Form.Control
                                            placeholder="Job ID"
                                            type="text"
                                            name="job_id_ad"
                                            value={job_id_ad}
                                            onChange={e => setjob_id_ad(e.target.value)}
                                            style={{ borderRadius: "10px" }}
                                            disabled={true}
                                        ></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col className="pl-1" md="6">
                                    <Form.Group>
                                        <label className="lblDesign">JOB DESCRIPTION</label>
                                        <Form.Control
                                            placeholder="Job Discription"
                                            type="text"
                                            name="job_description"
                                            value={job_description}
                                            onChange={e => setjob_description(e.target.value)}
                                            style={{ borderRadius: "10px" }}
                                            disabled={true}
                                        ></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group>
                                        <label className="lblDesign">BATCH ID</label>
                                        <Form.Control
                                            placeholder="BATCH ID"
                                            type="text"
                                            name="batchid_ad"
                                            value={batchid_ad}
                                            onChange={e => setbatchid_ad(e.target.value)}
                                            style={{ borderRadius: "10px" }}
                                            disabled={true}
                                        ></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group>
                                        <label className="lblDesign">STRAT TIME</label>
                                        <Form.Control
                                            placeholder="Start Time"
                                            type="time"
                                            name="batch_start_time"
                                            value={batch_start_time}
                                            onChange={e => setbatch_start_time(e.target.value)}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col className="pl-1" md="6">
                                    <Form.Group>
                                        <label className="lblDesign">END TIME</label>
                                        <Form.Control
                                            placeholder="End Time"
                                            type="time"
                                            name="batch_end_time"
                                            value={batch_end_time}
                                            onChange={e => setbatch_end_time(e.target.value)}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group>
                                        <label className="lblDesign">ROLL LENGTH(m)</label>
                                        <Form.Control
                                            placeholder="Roll Length"
                                            type="text"
                                            name="roll_length"
                                            value={roll_length}
                                            onChange={e => setroll_length(e.target.value)}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col className="pl-1" md="6">
                                    <Form.Group>
                                        <label className="lblDesign">ROLL WEIGHT(Kg)</label>
                                        <Form.Control
                                            placeholder="Roll Weight"
                                            type="text"
                                            name="roll_weight"
                                            value={roll_weight}
                                            onChange={e => setroll_weight(e.target.value)}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group>
                                        <label className="lblDesign">ITEM</label>
                                        <Form.Select size="lg" className="form-control" name="product"
                                            value={product}
                                            onChange={e => setproduct(e.target.value)}
                                            style={{ borderRadius: "10px" }}
                                        >
                                            {productTable.map(item => {
                                                return (<option key={item.productId} value={item.productId}>{item.productname}</option>);
                                            })}
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col className="pl-1" md="6">
                                    <Form.Group>
                                        <label className="lblDesign">ITEM TOTAL COUNT(m)</label>
                                        <Form.Control
                                            placeholder="Count"
                                            type="number"
                                            name="count"
                                            value={count}
                                            onChange={e => setcount(e.target.value)}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group>
                                        <label className="lblDesign">NUMBER OF ROLLS</label>
                                        <Form.Control
                                            placeholder="Rolls"
                                            type="text"
                                            name="rolls"
                                            value={count / roll_length}
                                            // onChange={e => setroll_weight(e.target.value)}
                                            style={{ borderRadius: "10px" }}
                                            disabled={true}
                                        ></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group>
                                        <label className="lblDesign">PRODUCTION LINE NAME</label>
                                        <Form.Select size="lg" className="form-control" name="product_lineid_ad"
                                            value={product_lineid_ad}
                                            onChange={e => setproduct_lineid_ad(e.target.value)}
                                            style={{ borderRadius: "10px" }}
                                        >
                                            {lineDetails.map(item => {
                                                return (<option key={item.lineId} value={item.lineId}>{item.lineName}</option>);
                                            })}
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col className="pl-1" md="6">
                                    <Form.Group>
                                        <label className="lblDesign">JOB STARTS DATE</label>
                                        <Form.Control
                                            placeholder="Date"
                                            type="date"
                                            name="predicted_date"
                                            value={predicted_date}
                                            onChange={e => setpredicted_date(e.target.value)}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group>
                                        <label className="lblDesign">PRODUCTION ORDER</label>
                                        <Form.Control
                                            placeholder="AUTO"
                                            type="number"
                                            min="0"
                                            name="production_order"
                                            value={production_order}
                                            onChange={e => setproduction_order(e.target.value)}
                                            style={{ borderRadius: "10px" }}
                                            disabled="true"
                                        ></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col className="pl-1" md="6">
                                    <Form.Group>
                                        <label className="lblDesign">CUSTOMER </label>
                                        <Form.Select size="lg" className="form-control" name="Customer_id"
                                            // value={processDetails.values.Customer_id} onChange={processDetails.handleChange}
                                            value={Customer_id}
                                            onChange={e => setCustomer_id(e.target.value)}
                                            disabled={true}
                                            style={{ borderRadius: "10px" }}
                                        >
                                            {cusDetails.map(item => {
                                                return (<option key={item.cus_id} value={item.cus_id}>{item.customer_name}</option>);
                                            })}
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className="button">
                                &nbsp;&nbsp;
                                <button
                                    className="btnSubmit"
                                    type="submit"
                                    variant="success"
                                    onClick={(e) => ChangeOnClick(e)}
                                >
                                    UPDATE
                                </button>
                                &nbsp;&nbsp;
                                <button
                                    className="btnCancel"
                                    type="submit"
                                    variant="danger"
                                    onClick={(e) => CancelOnClick(e)}

                                >
                                    CANCEL
                                </button>
                            </div>
                            <div className="clearfix"></div>
                        </Form>
                    </Card.Body>

                </div>
            </Container>
        </>
    );
}

export default CurrentProcessUpdate;
