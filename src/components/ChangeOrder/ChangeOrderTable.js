import React, { useState, useEffect } from "react"
import axios from "axios";
import { getLocalhostUrl } from 'components/url/Url.js'
import { Link } from "react-router-dom";
import "../../assets/css/allForms.css"
import ChangeOrderForm from '../ChangeOrder/ChangeOrderForm.js'
import Paginate from "components/Forms/Paginate";
import Swal from 'sweetalert2'
// react-bootstrap components
import {
    Card,
    Table,
    Container,
    Row,
    Col,
} from "react-bootstrap";

function ChangOrderTable(props) {

    const selectedPorder = props.selectedpOrdrer;
    const selectedPID = props.selectedPId;
    console.log(selectedPorder + " and " + selectedPID)

    const userid = localStorage.getItem("userId");
    const [url, seturl] = useState('');
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [filteredData2, setfilteredData2] = useState([]);
    const [displayData, setdisplayData] = useState('');

    // const [test, settest] = useState('');


    useEffect(() => {
        const myurl = getLocalhostUrl();
        seturl(myurl)

        axios.get(myurl + `/api/v1/admin/getChangedOrdersToSecondTable/${selectedPID}`).then((response) => {
            setFilteredData(response.data)
            setfilteredData2(response.data)
        });

    }, [selectedPID])



    //search data
    const handleChange = event => {
        setSearchTerm(event.target.value);
        const filteredData = filteredData2.filter(item =>
            item.job_id_ad.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.job_id_ad.toUpperCase().includes(searchTerm.toUpperCase())
        );
        setFilteredData(filteredData);
    };



    const handleDelete = (sceID, scePorder) => {

        Swal.fire({
            title: 'Are You Sure?',
            text: 'Do you want to change the production order?',
            // icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            confirmButtonColor: '#DADADA',
            cancelButtonText: 'Cancel',
            cancelButtonColor: "#DADADA",
            reverseButtons: true,
            customClass: {
                popup: 'my-swal-modal-popup',
            }

        }).then((result) => {
            if (result.isConfirmed) {

                // console.log("aaaa",selectedPID,selectedPorder,sceID,scePorder)
                axios.get(url + '/api/v1/admin/checkChangeOrder/' + selectedPID + '/' + selectedPorder + '/' + sceID + '/' + scePorder).then((response) => {
                    console.log('sasdasd ' + JSON.stringify(response.data))
                    if (response.data.returnmsg == 'YOU CANNOT CHANGE') {
                        console.log('YOU CANNOT CHANGE')
                        Swal.fire("Error!", "Prodoction is alrady started!", "error");

                    }
                    else if (response.data.returnmsg == 'YOU CAN CHANGE') {
                        console.log('YOU CAN CHANGE')
                        Swal.fire({
                            title: '<span style="font-size: 1.2rem; font-weight: 700px;">Updated Order</span>',
                            confirmButtonText: 'Yes',
                            confirmButtonColor: '#DADADA',
                            customClass: {
                                popup: 'my-swal-modal-popup',
                                
                            },
                            html:
                                '<form>' +
                                '<div class="row mb-2">' +
                                '<div class="col" id="formGridCity">' +
                                '<label for="customerName" class="form-label text-end" style="font-size: 0.8rem"; "font-weight: 400px;">Customer Name</label>' +
                                `<input type="text" class="form-control" id="customerName" value="${response.data.customer_name}" disabled="true" >` +
                                '</div>'
                                +
                                '<div class="col" id="formGridCity">' +
                                '<label for="customerName" class="form-label" style="font-size: 0.8rem;">Job ID</label>' +
                                `<input type="text" class="form-control" id="customerName" value="${response.data.job_id_ad}" disabled >` +
                                '</div>' +
                                '</div>' +

                                '<div class="row mb-2">' +
                                '<div class="col" id="formGridCity">' +
                                '<label for="customerName" class="form-label" style="font-size: 0.8rem;">Batch ID</label>' +
                                `<input type="text" class="form-control" id="customerName" value="${response.data.batchid_ad}" disabled >` +
                                '</div>' +
                                '<div class="col" id="formGridCity">' +
                                '<label for="customerName" class="form-label" style="font-size: 0.8rem;">Production Order</label>' +
                                `<input type="text" class="form-control" id="customerName" value="${response.data.production_order}" disabled >` +
                                '</div>' +
                                '</div>' +
                                '</form>',
                        }).then(() => {
                            window.location.reload(false);
                        });


                    }
                })
                 
                    ;



            }
           
        })


    }

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
                                                        <button id="icon" className="btnSelect" float="left" style={{ float: "center" }} onClick={() => handleDelete(changeorder.admin_id, changeorder.production_order)}> CHANGE</button>

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
            </Container>
        </>
    );
}

export default ChangOrderTable;
