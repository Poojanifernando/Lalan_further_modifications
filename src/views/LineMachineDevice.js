import LineMachineDeviceForm from "components/Forms/LineMachineDeviceForm";
import LineMachineDevicetable from "components/Tables/LineMachineDevicetable";
import React, { useState, useEffect } from "react"


function LineMachineDevice() {
  return (
    <>
    <LineMachineDeviceForm/>
    <LineMachineDevicetable/>
      {/* <BatchViewTable /> */}
    </>
  );
}

export default LineMachineDevice;
