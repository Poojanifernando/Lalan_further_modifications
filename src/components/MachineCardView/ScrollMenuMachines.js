import React, { useState, useEffect } from "react"
import axios from "axios";
import { getLocalhostUrl } from 'components/url/Url.js'
import "../../assets/css/ScrollView.css"
import CardParameterbody from "components/MachineCardView/CardParameterbody.js";
import {
    Card,
    Col,
    Container
} from "react-bootstrap";
function ScrollMenuMachines(props) {

    //set the variables using props
    const current_date = props.date;
    const current_Line = props.line;
    const current_pOrder = props.pOrder;
    const [AllMachines, setAllMachines] = useState([]);
    const [url, seturl] = useState('');

    useEffect(() => {
        const myurl = getLocalhostUrl();
        seturl(myurl)
        //get the machines cards using line
        axios.get(myurl + '/api/v1/admin/GetDetailsByDateAndLineIdAndPOrder/' + current_date + '/' + current_Line + '/' + current_pOrder).then((response) => {
            setAllMachines(response.data);
        });
    }, [])

    //scroll view in the machines
    return (
        <div>
            <br />
            <div class="scrollmenu">
                {/*display the machine list in the cards*/}
                {AllMachines?.map((Machins, index) => {
                    return (
                        <Col
                            
                            className="aa test"
                            >
                            <Card className="card-stats" style={{ filter: "drop-shadow(0.15rem 0.6rem 0.15rem rgba(0, 0, 0, 0.5))", boxShadow: "0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.15)" }}>
                                <Card.Header style={{ fontWeight: "600", fontSize: '0.8rem', filter: "drop-shadow(1.0rem 0.20rem 0.2rem rgba(0.5, 0, 0, 0))", boxShadow: "1.0rem 0.25rem 0.5rem rgba(0.15, 0, 0, 0)" }}>
                                    {Machins.machine_name}
                                </Card.Header>
                                {/* <br /> */}
                                {/*pass the data from the this components to the cardparameterbody using props*/}
                                <CardParameterbody date={current_date} line={current_Line} POrder={current_pOrder} MachineId={Machins.machine_id} />
                            </Card>
                        </Col>
                    )
                })}
            </div>
        </div>
    );
}

export default ScrollMenuMachines;
