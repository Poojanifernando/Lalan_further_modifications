import React, { useState, useEffect } from "react"
import axios from "axios";
import { getLocalhostUrl } from 'components/url/Url.js'
import { useHistory } from 'react-router-dom';
import "../../assets/css/allForms.css"
// react-bootstrap components
import {
    Badge,
    Button,
    Card,
    Form,
    Navbar,
    Nav,
    Container,
    Row,
    Col,
    Dropdown
} from "react-bootstrap";

function DeviceUpdate({ match }) {

    const history = useHistory();
    const userId = localStorage.getItem("userId");
    const [lineDetails, setLineDetails] = useState([]);
    const [detail, setdetail] = useState([]);
    const [url, seturl] = useState('');

    const [userid_reg_bch, setuserid_reg_bch] = useState(userId);
    const [LineId, setlineId] = useState("");
    const [MachineID, setMachineID] = useState("");
    const [MachineName, setMachineName] = useState("");
    const [MachineDiscription, setMachineDiscription] = useState("");
    const [deviceid_dvc_reg, setdeviceid_dvc_reg] = useState("");
    const [device_name_dvc_reg, setdevice_name_dvc_reg] = useState("");
    const [description, setdescription] = useState("");
    const [devicegpslocation, setdevicegpslocation] = useState("");
    const [device_ip_address, setdevice_ip_address] = useState("");
    const [parameter_id, setparameter_id] = useState("");
    const [min_value, setmin_value] = useState("");
    const [max_value, setmax_value] = useState("");
    const [measuring_unit, setmeasuring_unit] = useState("");
    const [is_it_starter_value, setis_it_starter_value] = useState("");
    const [alarm_alert_type, setalarm_alert_type] = useState("");
    const [completed_prod_count, setcompleted_prod_count] = useState("");
    const [message, setmessage] = useState("");

    const [deviceDetails] = useState({

        userid_reg_bch: userId,
        LineId: '',
        MachineID: '',
        MachineName: '',
        MachineDiscription: '',
        deviceid_dvc_reg: '',
        device_name_dvc_reg: '',
        description: '',
        devicegpslocation: '',
        device_ip_address: '',
        parameter_id: '',
        min_value: '',
        max_value: '',
        measuring_unit: '',
        is_it_starter_value: '',
        alarm_alert_type: '',
        completed_prod_count: '',
        message: ''

    })


    useEffect(() => {

        const myurl = getLocalhostUrl();
        seturl(myurl)
        axios.get(myurl + '/api/v1/line/getAllLineAndId').then((response) => {
            setLineDetails(response.data);
        });
        axios.get(myurl + '/api/v1/admin/getalldeviceregistration/' + match.params.id).then((response) => {
            setdetail(response.data);
            setlineId(response.data.line_id);
            setMachineID(response.data.machine_id);
            setMachineName(response.data.machine_name);
            setdeviceid_dvc_reg(response.data.deviceid_dvc_reg);
            setparameter_id(response.data.parameter_id);
            setmin_value(response.data.min_value);
            setmax_value(response.data.max_value);
            setmeasuring_unit(response.data.measuring_unit);
            setis_it_starter_value(response.data.is_it_starter_value);
            setalarm_alert_type(response.data.is_it_alarm_parameter);
            setdevice_name_dvc_reg(response.data.device_name_dvc_reg);
            setdescription(response.data.description);
            setdevicegpslocation(response.data.devicegpslocation);
            setdevice_ip_address(response.data.device_ip_address);
            setmessage(response.data.message);
            setMachineDiscription(response.data.machine_description);
            setcompleted_prod_count(response.data.completed_prod_count)
        });

    }, []);



    const ChangeOnClick = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("userid_reg_bch", userid_reg_bch);
        formData.append("LineId", LineId);
        formData.append("MachineID", MachineID);
        formData.append("MachineName", MachineName);
        formData.append("MachineDiscription", MachineDiscription);
        formData.append("deviceid_dvc_reg", deviceid_dvc_reg);
        formData.append("device_name_dvc_reg", device_name_dvc_reg);
        formData.append("description", description);
        formData.append("devicegpslocation", devicegpslocation);
        formData.append("device_ip_address", device_ip_address);
        formData.append("parameter_id", parameter_id);
        formData.append("min_value", min_value);
        formData.append("max_value", max_value);
        formData.append("measuring_unit", measuring_unit);
        formData.append("is_it_starter_value", is_it_starter_value);
        formData.append("alarm_alert_type", alarm_alert_type);
        formData.append("completed_prod_count", completed_prod_count);
        formData.append("message", message);


        deviceDetails.userid_reg_bch = formData.get('userid_reg_bch');
        deviceDetails.LineId = formData.get('LineId');
        deviceDetails.MachineID = formData.get('MachineID');
        deviceDetails.MachineName = formData.get('MachineName');
        deviceDetails.MachineDiscription = formData.get('MachineDiscription');
        deviceDetails.deviceid_dvc_reg = formData.get('deviceid_dvc_reg');
        deviceDetails.device_name_dvc_reg = formData.get('device_name_dvc_reg');
        deviceDetails.description = formData.get('description');
        deviceDetails.devicegpslocation = formData.get('devicegpslocation');
        deviceDetails.device_ip_address = formData.get('device_ip_address');
        deviceDetails.parameter_id = formData.get('parameter_id');
        deviceDetails.max_value = formData.get('max_value');
        deviceDetails.min_value = formData.get('min_value');
        deviceDetails.measuring_unit = formData.get('measuring_unit');
        deviceDetails.is_it_starter_value = formData.get('is_it_starter_value');
        deviceDetails.alarm_alert_type = formData.get('alarm_alert_type');
        deviceDetails.completed_prod_count = formData.get('completed_prod_count');
        deviceDetails.message = formData.get('message');
        console.log(deviceDetails);

        await axios.get(url + '/api/v1/admin/DeviceRegistration/' + deviceDetails.LineId + '/' + deviceDetails.MachineID + '/' + deviceDetails.MachineName + '/' + deviceDetails.MachineDiscription + '/' + deviceDetails.deviceid_dvc_reg + '/' + deviceDetails.parameter_id + '/' + deviceDetails.description + '/' + deviceDetails.alarm_alert_type + '/' + deviceDetails.completed_prod_count + '/' + deviceDetails.is_it_starter_value + '/' + deviceDetails.min_value + '/' + deviceDetails.max_value + '/' + deviceDetails.measuring_unit + '/' + deviceDetails.message + '/' + deviceDetails.devicegpslocation + '/' + deviceDetails.device_ip_address + '/' + deviceDetails.device_name_dvc_reg + '/3')
            .then(res => {
                deviceid_dvc_reg
                console.log("Return Data", res);
                alert("Update Success!!");
                history.push('/admin/DeviceRegistration')

            })
            .catch(err => {
                alert("Update Failed!!");
                console.log(err);
            });

    }

    const CancelOnClick = async (e) => {
        e.preventDefault();
        history.push('/admin/DeviceRegistration')
    }

    console.log(JSON.stringify(detail))
    return (
        <>
            <Container >
                <div className="cardDesign ">
                    <Card.Header style={{ border: "none", backgroundColor: "white" }}>
                        <Card.Title style={{ color: '#555', fontSize: "0.8rem", fontWeight: "600", marginTop:"30px"}}>DEVICE REGISTRATION UPDATE</Card.Title>
                        <hr />
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group>
                                        <label className="lblDesign">PRODUCTION LINE NAME</label>
                                        <Form.Select size="lg" className="form-control" name="LineId"
                                            value={LineId}
                                            onChange={e => setlineId(e.target.value)}
                                            disabled={true}
                                        >
                                            {lineDetails.map(item => {
                                                return (<option key={item.lineId} value={item.lineId}>{item.lineName}</option>);
                                            })}
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col className="pl-1" md="6">
                                    <Form.Group>
                                        <label className="lblDesign">MACHINE ID</label>
                                        <Form.Control
                                            placeholder="Machine ID"
                                            type="text"
                                            name="MachineID"
                                            value={MachineID}
                                            disabled={true}
                                            onChange={e => setMachineID(e.target.value)}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group>
                                        <label className="lblDesign">MACHINE NAME</label>
                                        <Form.Control
                                            placeholder="Machine Name"
                                            type="text"
                                            name="MachineName"
                                            value={MachineName}
                                            disabled={true}
                                            onChange={e => setMachineName(e.target.value)}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col className="pl-1" md="6">
                                    <Form.Group>
                                        <label className="lblDesign">MACHINE DESCRIPTION</label>
                                        <Form.Control
                                            placeholder="Machine Discription"
                                            type="text"
                                            name="MachineDiscription"
                                            value={MachineDiscription}
                                            disabled={true}
                                            onChange={e => setMachineDiscription(e.target.value)}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group>
                                        <label className="lblDesign">DEVICE ID</label>
                                        <Form.Control
                                            placeholder="Device ID"
                                            type="text"
                                            name="deviceid_dvc_reg"
                                            value={deviceid_dvc_reg}
                                            disabled={true}
                                            onChange={e => setdeviceid_dvc_reg(e.target.value)}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col className="pl-1" md="6">
                                    <Form.Group>
                                        <label className="lblDesign">DEVICE NAME</label>
                                        <Form.Control
                                            placeholder="Device Name"
                                            type="text"
                                            name="device_name_dvc_reg"
                                            disabled={true}
                                            value={device_name_dvc_reg}
                                            onChange={e => setdevice_name_dvc_reg(e.target.value)}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group>
                                        <label className="lblDesign">DEVICE DESCRIPTION</label>
                                        <Form.Control
                                            placeholder="Device Description"
                                            type="text"
                                            name="description"
                                            value={description}
                                            disabled={true}
                                            onChange={e => setdescription(e.target.value)}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col className="pl-1" md="6">
                                    <Form.Group>
                                        <label className="lblDesign">DEVICE LOCATION</label>
                                        <Form.Control
                                            placeholder="Device Location"
                                            type="text"
                                            name="devicegpslocation"
                                            value={devicegpslocation}
                                            disabled={true}
                                            onChange={e => setdevicegpslocation(e.target.value)}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group>
                                        <label className="lblDesign">DEVICE IP ADDRESS</label>
                                        <Form.Control
                                            placeholder="Device IP Address"
                                            type="text"
                                            name="device_ip_address"
                                            value={device_ip_address}
                                            onChange={e => setdevice_ip_address(e.target.value)}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pl-1" md="6">
                                    <Form.Group>
                                        <label className="lblDesign">MIN VALUE</label>
                                        <Form.Control
                                            placeholder="Min value"
                                            type="number"
                                            min="0"
                                            name="min_value"
                                            value={min_value}
                                            onChange={e => setmin_value(e.target.value)}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col className="pr-1" md="6">
                                    <Form.Group>
                                        <label className="lblDesign">MAX VALUE</label>
                                        <Form.Control
                                            placeholder="Max value"
                                            type="number"
                                            min="0"
                                            name="max_value"
                                            value={max_value}
                                            onChange={e => setmax_value(e.target.value)}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group>
                                        <label className="lblDesign">MEASURING UNIT</label>
                                        <Form.Control
                                            placeholder="Mesuring Unit"
                                            type="text"
                                            name="measuring_unit"
                                            value={measuring_unit}
                                            onChange={e => setmeasuring_unit(e.target.value)}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col className="pr-1" md="6">

                                    <label className="lblDesign">START-UP PARAMETER/NOT</label>
                                    <Form.Group>
                                        <Form.Check
                                            label="Yes"
                                            type="radio"
                                            id="option1"
                                            name="is_it_starter_value"
                                            value={1}
                                            onChange={e => setis_it_starter_value(e.target.value)}
                                            style={{ borderRadius: "10px" }}
                                        // onBlur={Devicereg.handleBlur}
                                        />
                                        <Form.Check
                                            label="No"
                                            type="radio"
                                            id="option2"
                                            name="is_it_starter_value"
                                            value={0}
                                            onChange={e => setis_it_starter_value(e.target.value)}
                                            style={{ borderRadius: "10px" }}
                                        // onBlur={Devicereg.handleBlur}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            {/* <Row>
                                        <Col className="pr-1" md="6">
                                            <label>Is length</label>
                                            <Form.Group>

                                                <Form.Check
                                                    label="yes"
                                                    type="radio"
                                                    id="option1"
                                                    name="completed_prod_count"
                                                    value={1}
                                                    onChange={e => setcompleted_prod_count(e.target.value)}
                                                    style={{ borderRadius: "10px" }}
                                                />
                                                <Form.Check type="radio"
                                                    label="no"
                                                    id="option2"
                                                    name="completed_prod_count"
                                                    value={0}
                                                    onChange={e => setcompleted_prod_count(e.target.value)}
                                                    style={{ borderRadius: "10px" }}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row> */}
                            <Row>
                                <Col className="pr-1" md="6">
                                    <label className="lblDesign">ALARM ALERT TYPE { }</label>
                                    <Form.Group>

                                        <Form.Check
                                            label="yes"
                                            type="radio"
                                            id="option1"
                                            name="alarm_alert_type"
                                            value={1}
                                            onChange={e => setalarm_alert_type(e.target.value)}
                                            style={{ borderRadius: "10px" }}
                                        // onBlur={Devicereg.handleBlur}
                                        />
                                        <Form.Check type="radio"
                                            label="no"
                                            id="option2"
                                            name="alarm_alert_type"
                                            value={0}
                                            onChange={e => setalarm_alert_type(e.target.value)}
                                            style={{ borderRadius: "10px" }}
                                        // onBlur={Devicereg.handleBlur}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col className="pl-1" md="6">
                                    <Form.Group>
                                        <label className="lblDesign">MESSAGE</label>
                                        <Form.Control
                                            placeholder="message"
                                            type="text"
                                            name="message"
                                            value={message}
                                            onChange={e => setmessage(e.target.value)}
                                            style={{ borderRadius: "10px" }}
                                        ></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className="button">
                                <button
                                    className="btnSubmit"
                                    type="submit"
                                    variant="success"
                                    onClick={(e) => ChangeOnClick(e)}
                                >
                                    UPDATE
                                </button>
                                &nbsp;&nbsp;
                                <button
                                    className="btnCancel"
                                    type="submit"
                                    variant="danger"
                                    onClick={(e) => CancelOnClick(e)}

                                >
                                    CANCEL
                                </button>
                            </div>
                            <div className="clearfix"></div>
                        </Form>
                    </Card.Body>
                    {/* </Card>
                    </Col> */}
                </div>
            </Container>
        </>
    );
}

export default DeviceUpdate;
