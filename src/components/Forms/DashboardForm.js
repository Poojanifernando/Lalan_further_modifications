// import React, { useState, useEffect } from "react"
// import { Button, Card, Row, Col, Form, } from "react-bootstrap";
// import { getLocalhostUrl } from 'components/url/Url.js'
// import axios from "axios";

// function DashboardForm() {



//     const [jobId, setJobId] = useState("");
//     const [BatchId, setBatchId] = useState("");
//     const [LineId, setLineId] = useState("");
//     const [Lines, setLines] = useState([]);
//     const [url, seturl] = useState('');

//     //retrive all data array
//     const [AllJobs, SetAllJobs] = useState([]);
//     const JobIdSetter = (e) => {
//         setJobId(e.target.value);
//     }
//     const BatchIDSetter = (e) => {
//         setBatchId(e.target.value);
//     }
//     const LineIDSetter = (e) => {
//         setLineId(e.target.value);
//     }

//     //retrive all data to the dropdown
//     // const R_AllJobSetter = (e) => {
//     //     SetAllJobs(e.target.value);
//     // }

//     const onSubmit = (e) => {
//         e.preventDefault();
//         console.log(jobId, BatchId, LineId);
//     }

//     //dropBox
//     const onDropdownSelectedInJobId = (e) => {
//         if (e.target.value !== '') {
//             const inst = (e.target.value)
//             console.log('Installation name:', inst);
//         }
//     }


//     useEffect(() => {
//         const myurl = getLocalhostUrl();
//         seturl(myurl)
//         axios.get(myurl+'/api/v1/line/getAllLines').then((response) => {
//             setLines(response.data.content);

//         });

//         axios.get(myurl+'/api/v1/job/getAllJobs').then((response) => {
//             SetAllJobs(response.data.content);

//         });
//     }, [])
//     return (
//         <div>
//             <Card>
//                 <Card.Header>
//                     <Card.Title as="h4">Job Add Form</Card.Title>
//                 </Card.Header>
//                 <Card.Body>
//                     <Form>
//                         <Row>
//                             <Col className="pr-1" md="4">
//                                 <Form.Group>
//                                     <label for="JOB_ID">JOB ID -</label>
//                                     {/* <Form.Control
//                                         // defaultValue="Mike"
//                                         placeholder="JOB ID"
//                                         type="text"
//                                         onChange={JobIdSetter}
//                                     ></Form.Control> */}
//                                     <select class="form-control" onChange={onDropdownSelectedInJobId}>
//                                         {AllJobs.map((AllJobs, index) =>
//                                             <option
//                                                 key={AllJobs.jobId}
//                                                 name={AllJobs.jobId}
//                                                 value={AllJobs.jobId}>{AllJobs.jobId}
//                                             </option>

//                                         )}
//                                     </select>
//                                 </Form.Group>
//                             </Col>
//                             <Col className="px-1" md="4">
//                                 <Form.Group>
//                                     <label>Batch ID -</label>
//                                     <Form.Control
//                                         // defaultValue=""
//                                         placeholder="Batch ID"
//                                         type="text"
//                                         onChange={BatchIDSetter}
//                                     ></Form.Control>
//                                 </Form.Group>
//                             </Col>
//                             <Col className="pl-1" md="4">
//                                 <Form.Group>
//                                     <label>Line ID -</label>
//                                     <Form.Control
//                                         placeholder="Line ID "
//                                         type="text"
//                                         onChange={LineIDSetter}
//                                     ></Form.Control>
//                                     {/* <Form.Select onChange={onDropdownSelected}>
//                                         {Lines.map((Lines, index) =>
//                                             <option
//                                                 key={Lines.lineName}
//                                                 name={Lines.lineName}
//                                                 value={Lines.lineName}>{Lines.lineName}
//                                             </option>
                                            
//                                         )}
                                        
//                                     </Form.Select> */}
//                                 </Form.Group>
//                             </Col>
//                         </Row>
//                         <Button
//                             className="btn-fill pull-right"
//                             type="submit"
//                             // variant="info"
//                             onClick={onSubmit}
//                         >
//                             View Job
//                         </Button>
//                         <div className="clearfix"></div>
//                     </Form>
//                 </Card.Body>
//             </Card>
//         </div>
//     );
// }

// export default DashboardForm;
