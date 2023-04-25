import React, { useState, useEffect } from "react"
import axios from "axios";
import { getLocalhostUrl } from 'components/url/Url.js'
import { useFormik } from 'formik';
import "../../assets/css/allForms.css"
import ChangOrderTable from "components/ChangeOrder/ChangeOrderTable.js"
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


function ChangeOrderForm(prop) {


    //getting the date and order number from the props
    const data = prop.data;
    const orderNum = prop.orderNumber;
  

    const [url, seturl] = useState('');
    const [displayData, setdisplayData] = useState('');

    const [firstID, setfirstID] = useState('');
    const [firstPorder, setfirstPorder] = useState('');

    useEffect(() => {
        const myurl = getLocalhostUrl();
        seturl(myurl)

        //get the data to the from(get order by id)
        axios.get(myurl + '/api/v1/admin/getpendingsById/' + data).then((response) => {
            setdisplayData(response.data)
            // console.log(displayData)
        });
    }, [data])

    // data go to the change order table



    return (
        <>
            <Container >
                <div className="cardDesign ">
                    <Card.Header style={{ border: "none", backgroundColor: "white" }}>
                        <Card.Title style={{ color: '#555', fontSize: "0.8rem", fontWeight: "600", marginTop: "30px" }}></Card.Title>
                        {/* <hr style={{ padding: "0", margin: "0" }} /> */}
                    </Card.Header>
                    <Card.Body style={{ paddingTop: "0" }}>


                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>CUSTOMER NAME</Form.Label>
                                    <Form.Control value={displayData.customer_name} disabled={true} />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>ITEM</Form.Label>
                                    <Form.Control value={displayData.product_name} disabled={true} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>LINE ID</Form.Label>
                                    <Form.Control value={displayData.product_lineid_ad} disabled={true} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>JOB NAME</Form.Label>
                                    <Form.Control value={displayData.job_id_ad} disabled={true} />
                                </Form.Group>
                            </Row>


                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>BATCH NAME</Form.Label>
                                    <Form.Control value={displayData.batchid_ad} disabled={true} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>PLANNED DATE</Form.Label>
                                    <Form.Control value={displayData.predicted_date} disabled={true} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>PRODUCTION ORDER</Form.Label>
                                    <Form.Control value={displayData.production_order} disabled={true} />
                                </Form.Group>
                            </Row>

                        </Form>
                    </Card.Body>
                </div>
            </Container>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <ChangOrderTable selectedpOrdrer={orderNum} selectedPId={data} />


        </>
    );
}
export default ChangeOrderForm;
