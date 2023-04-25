import React, { useState, useEffect } from "react"
import axios from "axios";
import { getLocalhostUrl } from 'components/url/Url.js'
import { Link } from "react-router-dom";
import "../../assets/css/allForms.css"
import Paginate from "components/Forms/Paginate";
// react-bootstrap components
import {
    Card,
    Table,
    Container,
    Row,
    Col,
} from "react-bootstrap";

function ProcessRegistrationTable() {

    const userid = localStorage.getItem("userId");
    const [progerss, setProgerss] = useState([]);
    const [url, seturl] = useState('');
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(progerss);


    useEffect(() => {
        const myurl = getLocalhostUrl();
        seturl(myurl)

        axios.get(myurl + '/api/v1/admin/postcurrentdata/JOB_101/MY JOB/BCH_101/12:00:00/12:00:00/PRD_0056/800/LID_1001/2023-01-03/1/1/2/2500/45/' + userid).then((response) => {
            setProgerss(response.data);
            setFilteredData(response.data)
        });

    }, [])

    const handleChange = event => {
        setSearchTerm(event.target.value);
        const filteredData = progerss.filter(item =>
            item.job_id_ad.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.job_id_ad.toUpperCase().includes(searchTerm.toUpperCase())
        );
        setFilteredData(filteredData);
    };

    //delete the specific column
    const deleteConference = (id) => {
        console.log(id)
        //axios.get('http://localhost:8082/api/v1/admin/postcurrentdata/JOB_101/MYJOB/BCH_101/12:00:00/12:00:00/PRD_0056/800/LID_1001/2023-01-03/1/1/4/' + id).then(() => {
        alert("You cant delete Process");
        window.location.reload(false);
        //}).catch((err) => {
        //   alert(err);
        //x})
    };

    return (
        <>
            <Container>
            <div class="form-group has-search">
                    <span class="fa fa-search form-control-feedback"></span>
                    <input type="text" class="searchbar" value={searchTerm}
                        onChange={handleChange} placeholder="Search by Job Name" />
                </div>
                <Row>
                    <Col md="12">
                        <Card className="card-plain table-plain-bg">
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover">
                                    <thead style={{ backgroundColor: "#EFEFEF" }}>
                                        <tr>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "24px 0 0 0" }}>Customer</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>JOB ID</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>Batch Id</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>Batch Start Time</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>Batch End Time</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>Count</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>Roll Length</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>Roll Weight</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>Line Id</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>Date</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>ORDER</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>ROLLS</th>
                                            {/* <th style={{ color: 'black' }} className="border-0 font-weight-bold">Customer Name</th> */}
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 24px 0 0" }}>ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData?.map((progers, index) => {
                                            return (
                                                <tr>
                                                    <td>{progers.customer_name}</td>
                                                    <td>{progers.job_id_ad}</td>
                                                    <td>{progers.batchid_ad}</td>
                                                    <td>{progers.batch_start_time}</td>
                                                    <td>{progers.batch_end_time}</td>
                                                    <td>{progers.count_reg_bch}</td>
                                                    <td>{progers.roll_length}</td>
                                                    <td>{progers.roll_weight}</td>
                                                    <td>{progers.product_lineid_ad}</td>
                                                    <td>{progers.predicted_date}</td>
                                                    <td>{progers.production_order}</td>
                                                    <td>{progers.Number_of_rolls}</td>
                                                    
                                                    {/* <td>{progers.customer_id}</td> */}
                                                    <td>

                                                    <Link id="icon" className="" style={{ color: '#555' }} to={`/admin/CurrentProcessUpdate/${progers.admin_id}`}
                                                        >
                                                            <em
                                                                className="far fa-edit" />
                                                        </Link>

                                                        <a className="" style={{ color: '#555' }} id="icon">
                                                            <em className="fa fa-trash"
                                                                onClick={() => { if (window.confirm("Are you sure you want to delete this?")) { deleteConference(progers.admin_id) }; }} /></a>
                                                        &nbsp;&nbsp;
                                                        
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

export default ProcessRegistrationTable;
