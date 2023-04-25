import React from "react";
import MachineRegistrationForm from "components/Forms/MachineRegistrationForm";
import MachineViewTable from "components/Tables/MachineViewTable";


function MachineRegistration() {
  return (
    <>
      <MachineRegistrationForm />
      <br/>
      <MachineViewTable/>
    </>
  );
}

export default MachineRegistration;
