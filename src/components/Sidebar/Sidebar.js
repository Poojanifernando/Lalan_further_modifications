import React, { Component } from "react";
import { useLocation, NavLink } from "react-router-dom";

import { Nav } from "react-bootstrap";


import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from "../../assets/img/lalangrouplogo.png";
import { Background } from "react-speedometer/dist";

function Sidebar({ color, image, routes }) {
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };

  const logout = () => {
    localStorage.setItem("isAuth", false)
    localStorage.removeItem("userId")
    navigate.push('/')
  }
  return (
    <div className="sidebar" data-image={image} data-color={color} style={{ backgroundColor: '#F3F3F3', opacity: ".86" }}>
      <div
        className="sidebar-background"
        style={{
          backgroundImage: "url(" + color + ")"
        }}
      />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a
            // href="https://www.creative-tim.com?ref=lbd-sidebar"
            className="simple-text logo-mini mx-1"
          >
            <div className="logo-img">
              <img src={require("assets/img/lalangrouplogo.png")} alt="..." />
            </div>
          </a>
          {/* <a className="simple-text" >
            Lalan Group
          </a> */}
        </div>
        <Nav>

          {/* <li>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Dropdown"
              // menuVariant="dark"
              // className="nav-link"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </li> */}

          {routes.map((prop, key) => {
            if (prop.invisible) return null;
            if (!prop.redirect)
              return (
                <>
                  <li
                    className={
                      prop.upgrade
                        ? "active active-pro"
                        : activeRoute(prop.layout + prop.path)
                    }
                    key={key}
                  >
                    <NavLink
                      to={prop.layout + prop.path}
                      className="nav-link"
                      activeClassName="active"
                    >
                      <i className={prop.icon} />
                      <p>{prop.name}</p>
                    </NavLink>

               
                  

                  </li>
                  
                  

                </>

              );
            return null;
          })}

        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
