// import React, { useState, useEffect } from "react"
// import axios from "axios";
// import "../../assets/css/CardInsideBody.css"
// // import "assert/style.css"
// // import ChartistGraph from "react-chartist";
// // react-bootstrap components
// import temp from '../../assets/img/temp.png';
// import lenth from '../../assets/img/length.png';
// import power from '../../assets/img/power.png';




// import {
//     Card,
//     Container,
//     Row,
//     Col,
// } from "react-bootstrap";

// function CardInsideBody() {
//     const [Parameters, setParameters] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:8081/api/v1/PDM/getalltestsdevices').then((response) => {
//             setParameters(response.data);
//             console.log(response.data)
//         });
//     }, [])
//     return (

//         <>
//             {Parameters?.map((Parameters, index) => {

//                 if ("temp" == Parameters.paraId_PDM) {
//                     return (
//                         // <>
//                         //     <Row className="rowss">
//                         //         <Col xs="7">
//                         //             <div className="numbers">
//                         //                 <p className="card-category">Device Name - {Parameters?.paraId_PDM}</p>
//                         //                 <Card.Title className="h3">150 C</Card.Title>
//                         //             </div>
//                         //         </Col>
//                         //         <Col xs="5">
//                         //             <div className="icon-big text-center icon-warning">
//                         //                 {/* <i class="fa-solid fa-temperature-three-quarters" ></i> */}
//                         //                 {/* <i class="fa-solid fa-temperature-quarter"></i> */}
//                         //                 {/* <img src={temp} alt="horse" style={{ maxHeight: "40px" }} /> */}
//                         //             </div>
//                         //         </Col>
//                         //     </Row>

//                         // </>

//                         <>
//                             <Row className="rowstest">
//                                 <Col xs="6 ab">
//                                     {/* <div className="numbers"> */}
//                                     <p className="card-category">
//                                         Mold Temperature
//                                     {/* {Parameters?.paraId_PDM} */}
//                                     </p>
                                    
                                    
//                                     {/* <Card.Title className="h3">150 C</Card.Title> */}
//                                     {/* </div> */}
//                                 </Col>
//                                 <Col xs="4 abc">
//                                     {/* <div className="numbers"> */}
//                                     {/* <p className="card-category">Device Name  - {Parameters?.paraId_PDM}</p> */}
//                                     <Card.Title className="h3">150 C</Card.Title>
//                                     {/* </div> */}
//                                 </Col>
//                                 {/* <Col xs="2 a"> */}
//                                     {/* <div className="icon-big text-center icon-warning" > */}
//                                     {/* <img src={lenth} alt="horse" style={{ maxHeight: "50px" }} /> */}
//                                     {/* <i class="fa-solid fa-temperature-quarter"></i> */}
//                                     {/* <FontAwesomeIcon icon="fa-thin fa-ruler" /> */}
//                                     {/* </div> */}
//                                 {/* </Col> */}
//                             </Row>
//                         </>

//                     )
//                 }
//                 else if ("lenth" == Parameters.paraId_PDM) {
//                     return (
//                         // <Card.Body>
//                         //     <Row className="rowss">
//                         //         <Col xs="7">
//                         //             <div className="numbers">
//                         //                 <p className="card-category">Device Name  - {Parameters?.paraId_PDM}</p>
//                         //                 <Card.Title className="h3">150 C</Card.Title>
//                         //             </div>
//                         //         </Col>
//                         //         <Col xs="5">
//                         //             <div className="icon-big text-center icon-warning" >
//                         //                 {/* <img src={lenth} alt="horse" style={{ maxHeight: "50px" }} /> */}
//                         //                 <i class="fa-sharp fa-solid fa-tape"></i>
//                         //                 {/* <FontAwesomeIcon icon="fa-thin fa-ruler" /> */}
//                         //             </div>
//                         //         </Col>
//                         //     </Row>

//                         // </Card.Body>

//                         // <Card.Body>
//                         //     <div Row className="rowss">
//                         //         <Col xs="5 abc">
//                         //             < >
//                         //                 Device Name - {Parameters?.paraId_PDM}
//                         //             </>
//                         //         </Col>
//                         //         <Col xs="2 ab">
//                         //             <Card.Title className="h3">150 C</Card.Title>

//                         //         </Col>
//                         //         <Col xs="1">
//                         //             {/* <div className="icon-big text-center icon-warning" > */}
//                         //                 <i class="fa-sharp fa-solid fa-tape"></i>
//                         //             {/* </div> */}
//                         //         </Col>
//                         //     </div>
//                         // </Card.Body>



//                         <>
//                             <Row className="rowstest">
//                                 <Col xs="6 ab">
//                                     {/* <div className="numbers"> */}
//                                     <p className="card-category">Device Name - {Parameters?.paraId_PDM}</p>
//                                     {/* <Card.Title className="h3">150 C</Card.Title> */}
//                                     {/* </div> */}
//                                 </Col>
//                                 <Col xs="4 abc">
//                                     {/* <div className="numbers"> */}
//                                     {/* <p className="card-category">Device Name  - {Parameters?.paraId_PDM}</p> */}
//                                     <Card.Title className="h3">100m</Card.Title>
//                                     {/* </div> */}
//                                 </Col>
//                                 {/* <Col xs="2 a"> */}
//                                     {/* <div className="icon-big text-center icon-warning" > */}
//                                     {/* <img src={lenth} alt="horse" style={{ maxHeight: "50px" }} /> */}
//                                     {/* <i class="fa-sharp fa-solid fa-tape"></i> */}
//                                     {/* <FontAwesomeIcon icon="fa-thin fa-ruler" /> */}
//                                     {/* </div> */}
//                                 {/* </Col> */}
//                             </Row>
//                         </>
//                     )
//                 }
//                 else if ("power" == Parameters.paraId_PDM) {
//                     return (
//                         // <>
//                         //     <Row className="rowss">
//                         //         <Col xs="7">
//                         //             <div className="numbers">
//                         //                 <p className="card-category">Device Name - {Parameters?.paraId_PDM}</p>
//                         //                 <Card.Title className="h3">150 C</Card.Title>
//                         //             </div>
//                         //         </Col>
//                         //         <Col xs="5">
//                         //             <div className="icon-big text-center icon-warning">
//                         //                 {/* <img src={power} alt="horse" style={{ maxHeight: "50px" }} /> */}
//                         //                 {/* <i class="fas fa-plug" ></i> */}

//                         //             </div>
//                         //         </Col>
//                         //     </Row>
//                         // </>


//                         <>
//                             <Row className="rowstest">
//                                 <Col xs="6 ab">
//                                     {/* <div className="numbers"> */}
//                                     <p className="card-category">Device Name - {Parameters?.paraId_PDM}</p>
//                                     {/* <Card.Title className="h3">150 C</Card.Title> */}
//                                     {/* </div> */}
//                                 </Col>
//                                 <Col xs="4 abc">
//                                     {/* <div className="numbers"> */}
//                                     {/* <p className="card-category">Device Name  - {Parameters?.paraId_PDM}</p> */}
//                                     <Card.Title className="h3">10VA</Card.Title>
//                                     {/* </div> */}
//                                 </Col>
//                                 {/* <Col xs="2 a"> */}
//                                     {/* <div className="icon-big text-center icon-warning" > */}
//                                     {/* <img src={lenth} alt="horse" style={{ maxHeight: "50px" }} /> */}
//                                     {/* <i class="fas fa-plug" ></i> */}
//                                     {/* </div> */}
//                                 {/* </Col> */}
//                             </Row>
//                         </>
//                     )
//                 }
//                 else {
//                     return (
//                         <>
//                             <Row className="rowss">
//                                 <Col xs="7">
//                                     <div className="numbers">
//                                         <p className="card-category">Device Name - {Parameters?.paraId_PDM}</p>
//                                         <Card.Title className="h3">15 C</Card.Title>
//                                     </div>
//                                 </Col>
//                                 <Col xs="5">
//                                     <div className="icon-big text-center icon-warning">
//                                         {/* <i class="fa-solid fa-sensor"></i> */}
//                                     </div>
//                                 </Col>
//                             </Row>

//                         </>

//                     )
//                 }

//             })}

//         </ >
//     );
// }

// export default CardInsideBody;
