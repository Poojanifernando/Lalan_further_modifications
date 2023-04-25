import React from "react";
import CurrentProcessForm from "components/Forms/CurrentProcessForm.js";
import ProcessRegistrationTable from "components/Tables/ProcessRegistrationTable";


function CurrentProcessRegistration() {
  return (
    <>
      <CurrentProcessForm />
      <ProcessRegistrationTable/>
    </>
  );
}

export default CurrentProcessRegistration;
