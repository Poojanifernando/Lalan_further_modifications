import React, { useState, useEffect } from "react"
import axios from "axios";
import CardInsideBody from "components/MachineCardView/CardInsideBody.js";
import PerameterValueView from "components/MachineCardView/PerameterValueView.js";
import { getLocalhostUrl } from 'components/url/Url.js'
import "../../assets/css/CardInsideBody.css";


import {
    Card,
    Container,
    Row,
    Col,
} from "react-bootstrap";

function CardParameterbody(props) {

    //set the variables using passed props
    const current_date = props.date;
    const current_Line = props.line;
    const current_pOrder = props.POrder;
    const current_Machine = props.MachineId;
  

    const [machinePerameters, setMachinePerameters] = useState([]);
    const [linecolors, setlinecolor] = useState([]);
    const [url, seturl] = useState('');


    useEffect(() => {
        const myurl = getLocalhostUrl();
        seturl(myurl)
        //get the device data from the sp
        axios.get(myurl + '/api/v1/admin/GetDetailsByDateAndLineIdAndPOrder/' + current_date + '/' + current_Line + '/' + current_pOrder + '/' + current_Machine).then((response) => {
            setMachinePerameters(response.data);
        });

        //get the colors according to the device values
        axios.get(myurl + '/api/v1/admin/getcolorcode/' + current_Line + '/' + current_date).then((response) => {
            setlinecolor(response.data);
        });

        setInterval(() => (new axios.get(myurl + '/api/v1/admin/getcolorcode/' + current_Line + '/' + current_date).then((response) => {
            setlinecolor(response.data);
        })), 7000);

    }, [])

//show only the machine names in page 1 by one
    return (
        <Container style={{ minHeight: "350px", minWidth: "160px"}}>
            < >
                {machinePerameters?.map((machineperameter, index) => {
                    let color = "#00A300";
                    let name;
                    let msg123 = '';
                    let variable = false;
                    return (
                        <>
                            {linecolors?.map((linecolor, index) => {
                                if (variable == false) {
                                    if (machineperameter.device_id == linecolor.device_id) {
                                        name = machineperameter.device_id
                                        color = linecolor.t_color
                                        msg123 = linecolor.high_or_low
                                        variable = true;
                                    }
                                }
                            })}

                            <>
                            <div className="rowstest " style={{ backgroundColor: "white", padding:"0px", alignItems:'center'}}>
                                    {/* <Col xs="6 ab"> */}
                                    
                                        <p className=" textcolor" style={{}}>
                                          
                                            {machineperameter.device_name_dvc_reg}
                                        </p>
                                        
                                    {/* </Col> */}
                                    {/* <Col xs="6 abc"> */}
                                        {/* to show the parameter values using props*/}
                                        <PerameterValueView job={machineperameter.job_id_ad} batch={machineperameter.batchid_ad} lid={current_Line} proOder={current_pOrder} machine={current_Machine} deviceId={machineperameter.device_id} pID={machineperameter.parameter_id} date={current_date} color={color} msg={msg123} />
                                    {/* </Col> */}

                                </div>

                            </>
                        </>
                    )
                })}

            </>

        </Container>
    );
}

export default CardParameterbody;
