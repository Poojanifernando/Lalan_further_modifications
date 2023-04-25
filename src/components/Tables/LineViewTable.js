import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom';
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

function LineViewTable() {
    const history = useHistory();
    const [lines, setLines] = useState([]);
    const [url, seturl] = useState('');
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(lines);



    const [currentPageState, setCurrentPageState] = useState(1);
    const rowsPerPage = 10;

    // get the current rows to display
    const indexOfLastRow = currentPageState * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = lines.slice(indexOfFirstRow, indexOfLastRow);

    // change page number
    const handlePageChange = (pageNumber) => setCurrentPageState(pageNumber);

    useEffect(() => {
        const myurl = getLocalhostUrl();
        seturl(myurl)
        axios.get(myurl + '/api/v1/line/getAllLines').then((response) => {
            setLines(response.data.content);
            setFilteredData(response.data.content)
        });
    }, [])

    const handleChange = event => {
        setSearchTerm(event.target.value);
        const filteredData = lines.filter(item =>
            item.lineName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.lineName.toUpperCase().includes(searchTerm.toUpperCase())
        );
        setFilteredData(filteredData);
    };

    //delete the specific column
    const deleteConference = (id) => {
        axios.delete(url + '/api/v1/line/deleteRegisteredLine/' + id).then(() => {
            alert("deleted successfully!!");
            setLines([...lines, {}]);
            history.push('/admin/ProductLineRegistration')
            window.location.reload(false);
        }).catch((err) => {
            alert(err);
        })
    };


    console.log(JSON.stringify(lines))
    return (
        <>
            <Container>
            <div class="form-group has-search">
                    <span class="fa fa-search form-control-feedback"></span>
                    <input type="text" class="searchbar" value={searchTerm}
                        onChange={handleChange} placeholder="Search by Line Name" />
                </div>
                <Row>
                    <Col md="12">
                        <Card className="card-plain table-plain-bg">
                            {/* <Card.Header>
                                <Card.Title as="h4">Line Registration</Card.Title>
                                <p className="card-category">
                                    View all Line details
                                </p>
                            </Card.Header> */}
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover">
                                    <thead style={{ backgroundColor: "#EFEFEF" }}>
                                        <tr>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "24px 0 0 0" }}>line_id</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>line_name</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>description</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>start_time</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>end_time</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 24px 0 0" }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData?.map((line, index) => {
                                            return (
                                                <tr>
                                                    <td>{line.lineId}</td>
                                                    <td>{line.lineName}</td>
                                                    <td>{line.description}</td>
                                                    <td>{line.startTime}</td>
                                                    <td>{line.endTime}</td>
                                                    <td>

                                                        <Link id="icon" className="" style={{ color: '#555' }} to={`/admin/updateLine/${line.lineId}`}
                                                        >
                                                            <em
                                                                className="far fa-edit" />
                                                        </Link>

                                                        <a className="" style={{ color: '#555' }} id="icon"><em
                                                            className="fa fa-trash"
                                                            onClick={() => { if (window.confirm("Are you sure you want to delete this?")) { deleteConference(line.lineId) }; }} /></a>
                                                        &nbsp;&nbsp;
                                                        {/* <a className="btn btn-success" id="icon"><em
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
            {/* <Pagination
                rowsPerPage={rowsPerPage}
                totalRows={lines.length}
                currentPage={currentPageState}
                handlePageChange={handlePageChange}
            /> */}
        </>
    );
}

export default LineViewTable;
