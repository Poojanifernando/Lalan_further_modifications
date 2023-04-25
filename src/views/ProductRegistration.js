import React from "react";
import ProductRegistrationForm from "components/Forms/ProductRegistrationForm";
import ProductViewTable from "components/Tables/ProductViewTable";


function ProductRegistration() {
  return (
    <>
      <ProductRegistrationForm />
      <br/>
      <ProductViewTable/>
    </>
  );
}

export default ProductRegistration;
