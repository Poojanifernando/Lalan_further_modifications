import React from "react";
import CustomerRegisterForm from "components/Forms/CustomerRegistraionForm.js";
import CustomerViewTable from "components/Tables/CustomerViewTable";


function CustomerRegister() {
  return (
    <>
      <CustomerRegisterForm />
      <br/>
      <CustomerViewTable/>
    </>
  );
}

export default CustomerRegister;
