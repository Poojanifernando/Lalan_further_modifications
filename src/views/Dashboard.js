import React from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

import MachinesCardView from "components/MachineCardView/MachinesCardView.js";


import DashboardForm from "components/Forms/DashboardForm.js";






function Dashboard() {
  return (
    <>
      <Container fluid>
        
        {/**card row start */}
        {/* <DashboardForm /> */}
        
        <MachinesCardView />
        {/**card row End */}

        {/* <Login/> */}

      </Container>
    </>
  );
}

export default Dashboard;
