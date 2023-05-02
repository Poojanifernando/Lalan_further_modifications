


import React from "react";
import TestServiceForm from "components/TestServiceScreen/TestServiceForm.js";
import TestScreenViewTable from "components/TestServiceScreen/TestScreenViewTable.js";
import TestServiceImage from "components/TestServiceScreen/TestServiceImage.js";



function TestServiceScreen() {
  return (
     <>
       <TestServiceForm/>
       <br></br>
       <div className="row">

        <div className="col-md-6 ml-4">

        <TestScreenViewTable/> 

        <br></br>
</div>
        
      

        <div className="col-md-4 mt-5 ">
      
        <TestServiceImage/>

        
       </div>
       </div>


     </>
  

  );
}


export default TestServiceScreen;
