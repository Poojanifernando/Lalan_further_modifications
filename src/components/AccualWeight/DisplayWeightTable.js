import React, { useState, useEffect } from "react"
import axios from "axios";
import { getLocalhostUrl } from 'components/url/Url.js' 
import ActualWeight from 'components/AccualWeight/ActualWeight';
import { Link } from "react-router-dom";
import "../../assets/css/allForms.css"
import Swal from 'sweetalert2';
// react-bootstrap components
import {
    Card,
    Table,
    Container,
    Row,
    Col,
} from "react-bootstrap";

function DisplayWeightTable(props) {

     const ProcessId = props.data;
     console.log("process id",ProcessId)

    // const userid = localStorage.getItem("userId");
    const [url, seturl] = useState('');
    const [searchTerm, setSearchTerm] = useState("");
    // const [ProcessId, setProcessId] = useState('');
    // const [weightData, setweightData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [displayData, setdisplayData] = useState('');

 


    useEffect(() => {
        const myurl = getLocalhostUrl();
        seturl(myurl)

        axios.get(myurl + `/api/v1/admin/getacctualweigthtotable/${ProcessId}`).then((response) => {
            setdisplayData(response.data)
            setFilteredData(response.data)
            // console.log("data", response.data)
        });

    }, [ProcessId])

  //search data
  const handleChange = event => {
    setSearchTerm(event.target.value);
    const filteredData = displayData.filter(item =>
        // item.number_of_rolls.toLowerCase().includes(searchTerm.toLowerCase()) ||
        // item.number_of_rolls.toUpperCase().includes(searchTerm.toUpperCase()) ||
        item.number_of_rolls.toString().includes(searchTerm.toString())
    );
    setFilteredData(filteredData);
};

const  handleInsertWeight = async (ProcessId, Roll) => {
    try{
    const { value: Weight } = await Swal.fire({
        title: 'Input Actual Weight',
        input: 'text',
        // value: {Weight},
        inputLabel: 'Enter Weight(Kg)',
        inputPlaceholder: 'weight - Kg'
      })  
      axios.get(url + `/api/v1/admin/updateActualWeight/${ProcessId}/${Roll}/${Weight}`).then((response) => {
        console.log("updated value",Weight)
        const updatedData = displayData.map(item => {
          if (item.process_id === ProcessId && item.number_of_rolls === Roll) {
            return {
              ...item,
              accual_weightcol: Weight
            }
          } else {
            return item
          }
        });
        setdisplayData(updatedData);
        setFilteredData(updatedData);
      });

    } catch(error) {
      console.log(error);
    }
  }

    return (
        <>
<Container>

<div class="form-group has-search">
                    <span class="fa fa-search form-control-feedback"></span>
                    <input type="text" class="searchbar" value={searchTerm}
                        onChange={handleChange} placeholder="Search by Roll Count" />
                </div>

    <Row>
        <Col md="12">
            <Card className="card-plain table-plain-bg">
                <Card.Body className="table-full-width table-responsive px-0">
                    <Table className="table-hover">
                        <thead style={{ backgroundColor: "#EFEFEF" }}>
                            <tr>
                                <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "24px 0 0 0" }}>Production ID</th>
                                <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>System Length</th>
                                <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>Number of Rolls</th>
                                <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 0 0 0" }}>Acctual Weight</th>

                                <th style={{ color: '#555', fontSize: "0.8rem", fontWeight: "700", lineHeight: "24px", textAlign: "flex-start", borderRadius: "0 24px 0 0" }}>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData?.map((displayData, index) => {
                                return (
                                    <tr>
                                        <td>{displayData.process_id}</td>
                                        <td>{displayData.system_length}</td>
                                        <td>{displayData.number_of_rolls}</td>
                                        <td>{displayData.accual_weightcol}</td>
                                      
                                        <td>
                                            <button id="icon" className="btnSelect" float="left" style={{ float: "center" }}onClick={() => handleInsertWeight(displayData.process_id,displayData.number_of_rolls)} > UPDATE</button>

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

export default DisplayWeightTable;
