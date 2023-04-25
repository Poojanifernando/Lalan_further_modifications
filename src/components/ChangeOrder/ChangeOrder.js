import React, { useState, useEffect } from "react"
import axios from "axios";
import { getLocalhostUrl } from 'components/url/Url.js'
import { Link } from "react-router-dom";
import "../../assets/css/allForms.css"
import ChangeOrderForm from '../ChangeOrder/ChangeOrderForm.js'
import Paginate from "components/Forms/Paginate";
// react-bootstrap components
import {
    Card,
    Table,
    Container,
    Row,
    Col,
} from "react-bootstrap";

function ChangOrder() {

    const userid = localStorage.getItem("userId");
    const [url, seturl] = useState('');
    const [searchTerm, setSearchTerm] = useState("");
    const [changeorder, setchangeorder] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [ProcessId, setProcessId] = useState('');
    const [pOrder, setpOrder] = useState('');

    useEffect(() => {
        const myurl = getLocalhostUrl();
        seturl(myurl)

        axios.get(myurl + '/api/v1/admin/getpendings').then((response) => {
            setchangeorder(response.data)
            setFilteredData(response.data)
        });

    }, [])

    //search data
    const handleChange = event => {
        setSearchTerm(event.target.value);
        const filteredData = changeorder.filter(item =>
            item.job_id_ad.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.job_id_ad.toUpperCase().includes(searchTerm.toUpperCase())
        );
        setFilteredData(filteredData);
    };

    //set data to the ChangeOrderForm 
    function setData(name,porder) {
        setProcessId(name)
        setpOrder(porder)
      };


    return (
        <>
            <Container>
            <div class="form-group has-search">
                    <span class="fa fa-search form-control-feedback"></span>
                    <input type="text" class="searchbar" value={searchTerm}
                        onChange={handleChange} placeholder="Search by Job Name" />
                </div>
                <br/>
                <div className="pendings">PENDING PRODUCTIONS</div>
                <Row>
                    <Col md="12">
                        <Card className="card-plain table-plain-bg">
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover">
                                    <thead style={{ backgroundColor: "#EFEFEF" }}>
                                        <tr>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "24px 0 0 0" }}>JOB ID</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>Batch Id</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>Customer Name</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>Product Name</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>Count</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>Line Id</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>Date</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>ORDER</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 24px 0 0" }}>ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData?.map((changeorder, index) => {
                                            return (
                                                <tr>
                                                    <td>{changeorder.job_id_ad}</td>
                                                    <td>{changeorder.batchid_ad}</td>
                                                    <td>{changeorder.customer_name}</td>
                                                    <td>{changeorder.product_name}</td>
                                                    <td>{changeorder.count_reg_bch}</td>
                                                    <td>{changeorder.product_lineid_ad}</td>
                                                    <td>{changeorder.predicted_date}</td>
                                                    <td>{changeorder.production_order}</td>
                                                    <td>
                                                        <button id="icon" className="btnSelect" float="left" style={{ float: "center" }}  onClick={() => setData(changeorder.admin_id , changeorder.production_order)}> SELECT</button>
                                                        &nbsp;&nbsp;
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </Table>
                               
                            </Card.Body>

                           <ChangeOrderForm data={ProcessId} orderNumber={pOrder}/>
                         
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ChangOrder;
