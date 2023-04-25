import React, { useState, useEffect } from "react"
import axios from "axios";
import { getLocalhostUrl } from 'components/url/Url.js'
import { Link } from "react-router-dom";
import DisplayWeightTable from 'components/AccualWeight/DisplayWeightTable'
import "../../assets/css/allForms.css"
// react-bootstrap components
import {
    Card,
    Table,
    Container,
    Row,
    Col,
} from "react-bootstrap";

function ActualWeight() {

    const userid = localStorage.getItem("userId");
    const [url, seturl] = useState('');
    const [searchTerm, setSearchTerm] = useState("");
    const [acctualWeight, setacctualWeight] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [ProcessId, setProcessId] = useState('');
 


    useEffect(() => {
        const myurl = getLocalhostUrl();
        seturl(myurl)

        axios.get(myurl + '/api/v1/admin/getstoppedproductions').then((response) => {
            setacctualWeight(response.data)
            setFilteredData(response.data)
        });

    }, [])

    //search data
    const handleChange = event => {
        setSearchTerm(event.target.value);
        const filteredData = acctualWeight.filter(item =>
            item.job_id_ad.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.job_id_ad.toUpperCase().includes(searchTerm.toUpperCase())
        );
        setFilteredData(filteredData);
    };

    function setData(name) {
        setProcessId(name)
      
      };

    return (
        <>
            <Container>
                <div class="form-group has-search">
                    <span class="fa fa-search form-control-feedback"></span>
                    <input type="text" class="searchbar" value={searchTerm}
                        onChange={handleChange} placeholder="Search by Job Name" />
                </div>
                <br />
                <div className="pendings">ENDED PRODUCTIONS</div>
                <Row>
                    <Col md="12">
                        <Card className="card-plain table-plain-bg">
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover">
                                    <thead style={{ backgroundColor: "#EFEFEF" }}>
                                        <tr>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "24px 0 0 0" }}>Date</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>JOB ID</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>Batch Id</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>Customer Name</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>Item Name</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>Planned Count</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>Line Id</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>Planned Roll Length</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>Planned Roll Weight</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 24px 0 0" }}>ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData?.map((acctualWeight, index) => {
                                            return (
                                                <tr>
                                                    <td>{acctualWeight.predicted_date}</td>
                                                    <td>{acctualWeight.job_id_ad}</td>
                                                    <td>{acctualWeight.batchid_ad}</td>
                                                    <td>{acctualWeight.customer_name}</td>
                                                    <td>{acctualWeight.product_name}</td>
                                                    <td>{acctualWeight.count_reg_bch}</td>
                                                    <td>{acctualWeight.product_lineid_ad}</td>
                                                    <td>{acctualWeight.roll_length}</td>
                                                    <td>{acctualWeight.roll_weight}</td>
                                                    <td>
                                                        <button id="icon" className="btnSelect" float="left" style={{ float: "center" }}  onClick={() => setData(acctualWeight.admin_id)}> SELECT</button>
                                                        &nbsp;&nbsp;
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </Table>

                            </Card.Body>

                            <DisplayWeightTable data={ProcessId}/>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ActualWeight;
