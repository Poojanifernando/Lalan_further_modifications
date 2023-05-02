
// lahiru 



import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { getLocalhostUrl } from 'components/url/Url.js'
import { Link } from "react-router-dom";
import "../../assets/css/allForms.css"
import Paginate from "components/Forms/Paginate";


import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
} from "react-bootstrap";
import {
    FaSearch
} from "react-icons/fa";



function TestScreenViewTable() {
    const history = useHistory();
    const [url, seturl] = useState('');
    const [Batches, setBatches] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(Batches);

    useEffect(() => {
        const myurl = getLocalhostUrl();
        seturl(myurl)
        axios.get(myurl + '/api/v1/admin/TestServiceForm/{lineId}/{machineId}' + 2).then((response) => {
            setBatches(response.data);
            setFilteredData(response.data)
        });

    }, [])

    const handleChange = event => {
        setSearchTerm(event.target.value);
        const filteredData = Batches.filter(item =>
            item.machine_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.machine_name.toUpperCase().includes(searchTerm.toUpperCase())
        );
        setFilteredData(filteredData); 
    };

    return (
        <>
            <Container>
           
                <Row>
                    <Col md="12">
                        <Card className="card-plain table-plain-bg">
                            {/* <Card.Header>
                                <Card.Title as="h4">Device Registration</Card.Title>
                                <p className="card-category">
                                    View all Device details
                                </p>
                            </Card.Header> */}
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover">
                                    <thead style={{ backgroundColor: "#EFEFEF" }}>
                                        <tr>

                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "24px 0 0 0"}}>Device ID</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>parameter</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>value</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 24px 0 0" }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData?.map((Batch, index) => {
                                            return (
                                                <tr>
                                                                            
                                                    <td>{Batch.deviceid_dvc_reg}</td>
                                                    {/* <td>{Batch.parameter_id}</td> */}
                                                    <td>{device_reg.parameter_id}</td>
                                                    <td>{iot_input_transaction.device_id_in_iot_input_tra}</td>
                                                    
                                                    <td>

                                                        <Link id="icon" className="" style={{ color: '#555' }} to={`/admin/DeviceUpdate/${Batch.deviceid_dvc_reg}`}
                                                        >
                                                            <em
                                                                className="far fa-edit" />
                                                        </Link>

                                                        <a
                                                            className=""
                                                            id="icon"
                                                            style={{ color: '#555' }}
                                                        >
                                                            <em
                                                                className="fa fa-trash"
                                                                onClick={() => { if (window.confirm("Are you sure you want to delete this?")) { deleteConference(Batch.batchID_regBch) }; }} /></a>
                                                        &nbsp;&nbsp;
                                                        {/* <a className="btn btn-success" id="icon">
                                                            <em
                                                            className="far fa-edit"
                                                            onClick={() => { if (window.confirm("Are you sure you want to Edit this ?")) { editConference(Batch.batchID_regBch) }; }} /></a> */}


                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* <div>
                    <Paginate />
                </div> */}
            </Container>
        </>
    );
}

export default TestScreenViewTable;

