import React, { useState, useEffect } from "react"
import axios from "axios";
import { getLocalhostUrl } from 'components/url/Url.js'
import "../../assets/css/ScrollView.css"
import LineHeader from "components/LineHeadder/LineHeader.js";
import { useFormik } from 'formik';
// react-bootstrap components
import {
  Button,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function MachinesCardView() {
  const [dateState, setDateState] = useState(new Date());
  const [Lines, setLines] = useState([]);
  const [url, seturl] = useState('');
  const [lineDetails, setLineDetails] = useState([]);



  useEffect(() => {
    const myurl = getLocalhostUrl();
    seturl(myurl)

    const lid = localStorage.getItem("LineId")
    
    //call date 
    setInterval(() => setDateState(new Date()), 30000);

    axios.get(myurl + '/api/v1/admin/getLineByDate/' + lid).then((response) => {
      setLines(response.data);
      // console.log("ado no",response.data)
    });
    
    axios.get(myurl + '/api/v1/line/getAllLineAndId').then((response) => {
      setLineDetails(response.data);
    });

  }, [])

  let objectDate = new Date();
  let day1 = objectDate.getDate();
  let month1 = objectDate.getMonth()+1;
  let year1 = objectDate.getFullYear();

  let convertdate = year1+'-'+month1+'-'+day1
  console.log(convertdate)

  //Hook
  //set the forms values using useFormik
  const getlineDetails = useFormik({
    initialValues: {
        LineId: ''
    },
    onSubmit: values => {
      //set line id to locle storage and refresh the page to show the line details.
      console.log(values.LineId)
      localStorage.setItem("LineId", values.LineId)
      window.location.reload(false);
    }
    
})
 
  return (
    <div>
      <Form className="center-form">
        <Row>
          <Col className="pr-1" md="3">
            <Form.Group>
              <Form.Select size="lg" className="form-control min-width" name="LineId"
              onChange={getlineDetails.handleChange}
              value={getlineDetails.values.LineId}
              >
                <option value="">SELECT</option>
                {lineDetails.map(item => {
                  return (<option key={item.lineId} value={item.lineId}>{item.lineName}</option>);
                })}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col className="pr-5" md="6">
            <Button
              className="btn-fill center justify-content-center"
              type="submit"
              variant="primary"
            onClick={getlineDetails.handleSubmit}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
      <br />
      {Lines.length !== 0 ?
        Lines.map((Line, index) => {
          // pass data to the LineHeader for get customer details.
          return (
            <Container className="test">
              <LineHeader date={convertdate} line={Line.product_lineid_ad} lineName={Line.line_name} />
            </Container>
          )
        }) :
        //if data is not there print this 
         <div className="d-flex justify-content-center align-items-center centerContent">
          {/* <p className="no-data-msg" style={{ color: "#5E5E5E" }}>Please select the line to show data</p> */}
        </div>
      }
    </div>
  );
}

export default MachinesCardView;
