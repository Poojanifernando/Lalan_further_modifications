import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { getLocalhostUrl } from 'components/url/Url.js'
import axios from "axios";
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

function MachineViewTable() {

    const history = useHistory();
    const [mach, setMachines] = useState([]);
    const [url, seturl] = useState('');
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(mach);

    useEffect(() => {
        const myurl = getLocalhostUrl();
        seturl(myurl)
        axios.get(myurl + '/api/v1/machine/getAllMachines').then((response) => {
            setMachines(response.data.content);
            setFilteredData(response.data.content)
        });
    }, [])

     const handleChange = event => {
        setSearchTerm(event.target.value);
        const filteredData = mach.filter(item =>
            item.machineId.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.machineId.toUpperCase().includes(searchTerm.toUpperCase())
        );
        setFilteredData(filteredData);
    };

    //delete the specific column
    const deleteConference = (id) => {
        axios.delete(url + '/api/v1/machine/deleteRegisteredMachine/' + id).then(() => {
            alert("deleted successfully!!");
            setBatches([...machines, {}]);
            history.push('/admin/MachineRegistration')
        }).catch((err) => {
            alert(err);
        })
    };


    console.log(JSON.stringify(machines))
    return (
        <>
            <Container>
                <div className="input-group">
                    <input type="text" placeholder="Search by Machine Name" value={searchTerm} onChange={handleChange} className='searchbar' icon="d-lg-block" />   
                </div>
                <Row>
                    <Col md="12">
                        <Card className="card-plain table-plain-bg">
                            {/* <Card.Header>
                                <Card.Title as="h4">Batch Registration</Card.Title>
                                <p className="card-category">
                                    View all Batch details
                                </p>
                            </Card.Header> */}
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover">
                                    <thead>
                                        <tr>
                                            <th style={{ color: 'black' }} className="border-0 font-weight-bold">Id</th>
                                            <th style={{ color: 'black' }} className="border-0 font-weight-bold">Name</th>
                                            <th style={{ color: 'black' }} className="border-0 font-weight-bold">Discription</th>
                                            <th style={{ color: 'black' }} className="border-0 font-weight-bold">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {machines?.map((mach, index) => {
                                            return (
                                                <tr>
                                                    <td>{mach.machineId}</td>
                                                    <td>{mach.machineName}</td>
                                                    <td>{mach.machineDescription}</td>
                                                    <td>
                                                        <a className="btn btn-danger" id="icon"><em
                                                            className="fa fa-trash"
                                                            onClick={() => { if (window.confirm("Are you sure you want to delete this?")) { deleteConference(mach.machineId) }; }} /></a>
                                                        &nbsp;&nbsp;
                                                        <a className="btn btn-success" id="icon"><em
                                                            className="far fa-edit"
                                                            onClick={() => { if (window.confirm("Are you sure you want to Edit this ?")) { editConference(mach.machineId) }; }} /></a>
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
            </Container>
        </>
    );
}

export default MachineViewTable;
