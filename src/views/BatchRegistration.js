import React, { useState, useEffect } from "react"
import BatchRegistrationForm from "components/Forms/BatchRegistrationForm";
import BatchViewTable from "components/Tables/BatchViewTable";

// import "assets/css/Popup.css";


// function Modal({ children, shown, close }) {
//   return shown ? (
//     <div
//       className="modal-backdrop"
//       onClick={() => {
//         // close modal when outside of modal is clicked
//         close();
//       }}
//     >
//       <div
//         className="modal-content"
//         onClick={e => {
//           // do not close modal if anything inside modal content is clicked
//           e.stopPropagation();
//         }}
//       >
//         <button onClick={close}>Close</button>
//         {children}
//       </div>
//     </div>
//   ) : null;
// }



function BatchRegistration() {
  // const [modalShown, toggleModal] = React.useState(false);


  return (
    <>
 {/* <div className="App">
    
      
      <button
        onClick={() => {
          toggleModal(!modalShown);
        }}
      >
        Toggle Modal
      </button>
      <Modal
        shown={modalShown}
        close={() => {
          toggleModal(false);
        }}
      >
      
      </Modal>
    </div> */}
    <BatchRegistrationForm/>
      <BatchViewTable />
    </>
  );
}

export default BatchRegistration;
