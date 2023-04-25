import React from "react";
import ProductLineRegistrationForm from "components/Forms/ProductLineRegistrationForm";
import LineViewTable from "components/Tables/LineViewTable";


function ProductLineRegistration() {
  return (
    <>
      <ProductLineRegistrationForm />
      <div/>
      <LineViewTable/>
    </>
  );
}

export default ProductLineRegistration;
