import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import PrivateRoute from 'PrivateRt/PrivateRoute';

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AdminLayout from "layouts/Admin.js";
import Login from "components/Login/Login";
import NotFound from "components/NotFound/NotFound";
import Signup from "components/Login/Signup";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(



  <BrowserRouter>

    <Switch>
      <Route path="/" component={(props) => <Login />} exact />
      <Route path="/Signup" component={(props) => <Signup />} />


      {/* <Route path="/admin" component={(props) => <AdminLayout {...props} />} /> */}
      <PrivateRoute path={"/admin"} component={(props) => <AdminLayout {...props} />} auth={localStorage.getItem("isAuth")} />

      {/* <Redirect from="/" to="/admin/dashboard" /> */}
      <Route path="*"><NotFound /></Route>

    </Switch>
  </BrowserRouter>
);
