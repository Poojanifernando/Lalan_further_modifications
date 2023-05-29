import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
// import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import CustomerRegister from "views/CustomerRegister";
import CurrentProcessRegistration from "views/CurrentProcessRegistration";
import BatchRegistration from "views/BatchRegistration";
import ProductRegistration from "views/ProductRegistration";
import ProductLineRegistration from "views/ProductLineRegistration";
import MachineRegistration from "views/MachineRegistration";
import ParameterCode from "views/ParameterCode";
import DeviceRegistration from "views/DeviceRegistration";
import Login from "components/Login/Login";
import LineHeader from "components/LineHeadder/LineHeader";
import BatchUpdate from "components/UpdateForms/BatchUpdate";
import CustomerUpdate from "components/UpdateForms/CustomerUpdate";
import LineUpdate from "components/UpdateForms/LineUpdate";
import ProductUpdate from "components/UpdateForms/ProductUpdate";
import CurrentProcessUpdate from "components/UpdateForms/CurrentProcessUpdate";
import LineMachineDevice from "views/LineMachineDevice";
import DeviceUpdate from "components/UpdateForms/DeviceUpdate";
import ChangeOrder from "components/ChangeOrder/ChangeOrder";
import Reports from "components/Reports/Reports";
import ActualWeight from "components/AccualWeight/ActualWeight";
import TestingService from "components/TestingService/TestingService";
import ActualRawMaterials from "components/ActualRawMaterials/ActualRawMaterials";


const dashboardRoutes = [
  
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-grid-45",
    component: Dashboard,
    layout: "/admin"
  }
  ,
  {
    path: "/CustomerRegister",
    name: "Customer",
    icon: "nc-icon nc-single-02",
    component: CustomerRegister,
    layout: "/admin"
  }
  ,
  {
    path: "/ProductRegistration",
    name: "product",
    icon: "nc-icon nc-app",
    component: ProductRegistration,
    layout: "/admin"
  }
  ,
  {
    path: "/ProductLineRegistration",
    name: "Product Line",
    icon: "nc-icon nc-layers-3",
    component: ProductLineRegistration,
    layout: "/admin"
  }
  ,
  {
    path: "/DeviceRegistration",
    name: "Device",
    icon: "nc-icon nc-preferences-circle-rotate",
    component: DeviceRegistration,
    layout: "/admin"
  }
  ,
  {
    path: "/CurrentProcessRegistration",
    name: "Production",
    icon: "nc-icon nc-cart-simple",
    component: CurrentProcessRegistration,
    layout: "/admin"
  }
  ,
  {
    path: `/ChangeOrder`,
    name: "Changing Order",
    icon: "nc-icon nc-refresh-02",
    component: ChangeOrder,
    layout: "/admin",
  }
  ,
  {
    path: `/Reports`,
    name: "Reports",
    icon: "nc-icon nc-notes",
    component: Reports,
    layout: "/admin",
  },

  {
    path: `/ActualWeight`,
    name: "Actual Weight",
    icon: "nc-icon nc-notes",
    component: ActualWeight,
    layout: "/admin",
  },

 
  ,{
    path: `/ActualRawMaterials`,
    name: "Raw Materials",
    icon: "nc-icon nc-map-big",
    component: ActualRawMaterials,
    layout: "/admin"
  },

  {
    path: "/TestingService",
    name: "Testing Service",
    icon: "nc-icon nc-puzzle-10",
    component: TestingService,
    layout: "/admin"
  },


  
  
 
  //updates

  {
    path: `/updateBatch/:id`,
    name: "updateBatch",
    icon: "nc-icon nc-notes",
    component: BatchUpdate,
    layout: "/admin",
    invisible: true
  }
  ,
  {
    path: `/updateCustomer/:id`,
    name: "Update Customer",
    icon: "nc-icon nc-notes",
    component: CustomerUpdate,
    layout: "/admin",
    invisible: true
  }
  ,
  {
    path: `/updateLine/:id`,
    name: "Update Line",
    icon: "nc-icon nc-notes",
    component: LineUpdate,
    layout: "/admin",
    invisible: true
  }
  ,
  {
    path: `/updateProduct/:id`,
    name: "Update Product",
    icon: "nc-icon nc-notes",
    component: ProductUpdate,
    layout: "/admin",
    invisible: true
  },
  {
    path: `/CurrentProcessUpdate/:id`,
    name: "Current Process Update",
    icon: "nc-icon nc-notes",
    component: CurrentProcessUpdate,
    layout: "/admin",
    invisible: true
  }
  ,
  {
    path: `/DeviceUpdate/:id`,
    name: "Device Update",
    icon: "nc-icon nc-notes",
    component: DeviceUpdate,
    layout: "/admin",
    invisible: true
  }

  
 
 
];

export default dashboardRoutes;
