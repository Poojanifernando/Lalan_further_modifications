import React from "react";
import DeviceRegistrationForm from "components/Forms/DeviceRegistrationForm.js";
import DeviceViewTable from "components/Tables/DeviceViewTable";


function DeviceRegistration() {
  return (
    <>
      <DeviceRegistrationForm />
      <br/>
      <DeviceViewTable/>
    </>
  );
}

export default DeviceRegistration;
