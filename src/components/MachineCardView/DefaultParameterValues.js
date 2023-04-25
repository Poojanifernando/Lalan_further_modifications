import React, { useState, useEffect } from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import axios from "axios";

function DefaultParameterValues() {
    // if (Value.parameter_id_in_iot_input_tra == "LNTH") {
        return (
            <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                <CircularProgressbar
                    value={0}
                    maxValue={250}
                    text={0 + "m"}
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
                            stroke: "red"
                        },
                        text: {
                            textAnchor: "middle"
                        }
                    }}
                    strokeWidth={10}
                />
            </div>
        </>
        )
        //other details
    // }
}
export default DefaultParameterValues;