import React, { useState, useEffect } from "react"
import axios from "axios";
import { getLocalhostUrl } from 'components/url/Url.js'
import "../../assets/css/CardInsideBody.css";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Length from '../../assets/img/length1.jpeg'
import {
    Card,
} from "react-bootstrap";
import Speedometer, {
    Background,
    Arc,
    Needle,
    Progress,
    Marks,
    Indicator,
} from 'react-speedometer';
import DefaultParameterValues from "./DefaultParameterValues";

function PerameterValueView(props) {
    const { value, min, max } = props;

    //set the maximum value to all gauge
    let previouslength = 0;
    const gaugeWidth = 300;
    const gaugeHeight = 20;
    const gaugeColor = 'colorfromprop';
    const backgroundColor = '#D3D3D3';

    const valueWidth = (value / (max - min)) * gaugeWidth;


    const { score } = props;
    const calcColor = (percent, start, end) => {
        let a = percent / 100,
            b = (end - start) * a,
            c = b + start;

        // return an CSS hsl color string
        return 'hsl(' + c + ', 100%, 50%)';
    }

    //set the varibles using props
    const current_Job = props.job;
    const current_batch = props.batch;
    const current_Line = props.lid;
    const current_pOrder = props.proOder;
    const current_Machine = props.machine;
    const current_deviceId = props.deviceId;
    const current_pID = props.pID;
    const current_date = props.date;
    const colorfromprop = props.color;
    const msg = props.msg;


    //set the varibles to initial values
    const [Values, setValues] = useState([[{
        value_tra: 87,
        parameter_id_in_iot_input_tra: "TEMP",
        measuring_unit: "°C"
    }]]);

    const [value123, setValue] = useState(0);
    const [url, seturl] = useState('');
    const [progerss, setProgerss] = useState([]);
    const [valuesinbutton, setvaluesinbutton] = useState();
    const [speed, setspeed] = useState('');

    //initially load the data for the first loading page
    useEffect(() => {
        const myurl = getLocalhostUrl();
        seturl(myurl)
        //get device values
        axios.get(myurl + '/api/v1/admin/GetValueByDevice/' + current_Job + '/' + current_batch + '/' + current_Line + '/' + current_pOrder + '/' + current_Machine + '/' + current_deviceId + '/' + current_pID + '/' + current_date).then((response) => {
            setValues(response.data);

        });

        //get total length to length gauge
        axios.get(myurl + '/api/v1/admin/getsumofproduct/' + current_Line).then((response) => {
            setValue(response.data);

        });

        //initial value setter
        axios.get(myurl + '/api/v1/admin/ButtonOnorNot/' + current_Line + '/' + current_date).then((response) => {
            setvaluesinbutton(response.data.ReturnVal);
           
        });
        
     
        //load the data by 7 seconds
        setInterval(() => (new axios.get(myurl + '/api/v1/admin/GetValueByDevice/' + current_Job + '/' + current_batch + '/' + current_Line + '/' + current_pOrder + '/' + current_Machine + '/' + current_deviceId + '/' + current_pID + '/' + current_date).then((response) => {
            setValues(response.data);
       
            axios.get(myurl + '/api/v1/admin/getsumofproduct/' + current_Line).then((response) => {
                setValue(response.data);

            });

       
        })), 7000);
    }, [])

    //show the all values inside the parametrs if button pause and resume
    if (valuesinbutton == 1 || valuesinbutton == 4) {
        return (<DefaultParameterValues />)

        
    }
    if (valuesinbutton == 2 || valuesinbutton == 3) {

        return (
            <>
            {/*length gauge displaing*/}
                {Values?.map((Value, index) => {
                    //check only length
                    if (Value.parameter_id_in_iot_input_tra == "LNTH") {
                        const date = new Date(Value.time_in_iot_update_tra);
                        // console.log("value",Value.date_time_update_iot_input_tra)
                        const time = date.toLocaleTimeString();
                     
                        return (
                            <>
                                <div className="Length">
                                    <br></br>
                                    {value123.IOT + Value.measuring_unit}
                                    <br></br>
                                </div>
                               
                               {/*get the speed */}
                               <div className='ViewtimelengthAndPower'>{time}</div>
                                <hr style={{ marginTop: "1.2rem" }}></hr>
                                <>
                                    <p className=" textcolor " >
                                        SPEED
                                    </p>
                                    <div className="Length">{value123.a_Speed} (m/min)</div>
                                </>
                               
                            </>
                        )
                        //get the TEMP gauges
                    } else if (Value.parameter_id_in_iot_input_tra == "TEMP") {
                        const date = new Date(Value.time_in_iot_update_tra);
                        const time = date.toLocaleTimeString();
                        return (
                            <>
                                <CircularProgressbar
                                    value={Value.value_tra}
                                    maxValue={300}
                                    text={Value.value_tra + Value.measuring_unit}
                                    circleRatio={0.7}
                                    styles={{
                                        trail: {
                                            strokeLinecap: "butt",
                                            transform: "rotate(-126deg)",
                                            transformOrigin: "center center",
                                            stroke: "#d6d6d6"
                                        },
                                        path: {
                                            strokeLinecap: "butt",
                                            transform: "rotate(-126deg)",
                                            transformOrigin: "center center",
                                            stroke: colorfromprop
                                        },
                                        text: {
                                            textAnchor: "middle"
                                        }
                                    }}
                                    strokeWidth={10}
                                />
                                <div className='Viewtime'>{time}</div>
                                <hr></hr>
                            </>

                        )
                        //get the POWER (only displaying the values in the card)
                    } else if (Value.parameter_id_in_iot_input_tra == "POWR") {
                        const date = new Date(Value.time_in_iot_update_tra);
                        console.log(date)
                        const time = date.toLocaleTimeString();
                        return (
                            <>
                                <div className="speedometer">
                                    <br></br>
                                    {Value.value_tra + Value.measuring_unit}
                                </div>
                                <div className='ViewtimelengthAndPower'>{time}</div>
                                <hr style={{ marginTop: "1.2rem" }}></hr>
                               
                                {/* <Speedometer
                                        value={Value.value_tra}
                                        fontFamily='squada-one'
                                        width={70}
                                        alignItems="center"
                                    >
                                        <Background color={'white'} />
                                        <Arc />
                                        <Needle color={'black'} offset={15} baseWidth={4} circleRadius={8} />
                                        <Progress color={colorfromprop} />
                                        <Marks fontSize={10} lineSize={5} numbersRadius={8} lineColor={"black"} step={10} alignItems={"center"} />
                                    </Speedometer> */}

                            </>
                        )
                    } else if (!value) {
                        return (<div>error</div>)
                    }
                })}
               
            </>
        );
    }
}

export default PerameterValueView;
