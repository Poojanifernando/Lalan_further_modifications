import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { getLocalhostUrl } from 'components/url/Url.js'
import { Link } from "react-router-dom";
// import "../../assets/css/allForms.css"
import Paginate from "components/Forms/Paginate";
import {
    Card,
    Table,
    Container,
    Row,
    Col,
} from "react-bootstrap";

function ProductViewTable() {

    const history = useHistory();
    const [Products, setpoducts] = useState([]);
    const [url, seturl] = useState('');
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(Products);


    useEffect(() => {
        const myurl = getLocalhostUrl();
        seturl(myurl)
        axios.get(myurl + '/api/v1/product/getAllProducts').then((response) => {
            setpoducts(response.data.content);
            setFilteredData(response.data.content)
        });
    }, [])

    const handleChange = event => {
        setSearchTerm(event.target.value);
        const filteredData = Products.filter(item =>
            item.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.productName.toUpperCase().includes(searchTerm.toUpperCase())
        );
        setFilteredData(filteredData);
    };

    //delete the specific column
    const deleteConference = (id) => {
        axios.delete(url + '/api/v1/product/deleteRegisteredProduct/' + id).then(() => {
            alert("deleted successfully!!");
            history.push('/admin/ProductRegistration')
            window.location.reload(false);
        }).catch((err) => {
            alert(err);
        })
    };

    return (
        <>
        
            <Container>
            <div class="form-group has-search">
                    <span class="fa fa-search form-control-feedback"></span>
                    <input type="text" class="searchbar" value={searchTerm}
                        onChange={handleChange} placeholder="Search by Item Name" />
                </div>
                

                <Row>
                    <Col md="12">
                        <Card className="card-plain table-plain-bg">
                           
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover">
                                    <thead style={{ backgroundColor: "#EFEFEF" }}>
                                        <tr>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "24px 0 0 0" }}>Id</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>Name</th>
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>description</th>
                                            {/* <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>date_and_time</th> */}
                                            <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 24px 0 0" }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData?.map((pro, index) => {
                                            return (
                                                <tr key={pro.productId}>
                                                    <td>{pro.productId}</td>
                                                    <td>{pro.productName}</td>
                                                    <td>{pro.description}</td>
                                                    {/* <td>{pro.dateAndTime}</td> */}
                                                    <td>

                                                    <Link id="icon" className="" style={{ color: '#555' }} to={`/admin/updateProduct/${pro.productId}`}
                                                        >
                                                            <em
                                                                className="far fa-edit" />
                                                        </Link>

                                                        <a className="" style={{ color: '#555' }} id="icon"><em
                                                            className="fa fa-trash"
                                                            onClick={() => { if (window.confirm("Are you sure you want to delete this?")) { deleteConference(pro.productId) }; }} /></a>
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

export default ProductViewTable;
