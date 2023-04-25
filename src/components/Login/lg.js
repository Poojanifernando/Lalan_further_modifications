import React, { useState, useEffect, Component } from "react"
import { Link, useHistory } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { getLocalhostUrl } from 'components/url/Url.js'
import axios from "axios";
import { useFormik } from 'formik';
import useAuth from "isAuth/useAuth";
import image from 'assets/img/loginImg.jpg';
import logo from "../../assets/img/logo123.png"
import "../../assets/css/loginpage.css";

function Login(props) {
  const [url, seturl] = useState('');
  const [isAuth, loginAuth, logoutAuth] = useAuth(false)
  const [user, setuser] = useState([]);

  useEffect(() => {
    const myurl = getLocalhostUrl();
    seturl(myurl)
  });

  let navigate = useHistory();

  const handleClickLogin = async (username, password) => {
    console.log("alert", username);
    console.log("pass", password);
    try {
      axios.get(url + '/api/v1/admin/checkuser/' + username + '/' + password).then((response) => {
        console.log(response.data.USERLOG);
        console.log("response.data.USERLOG", response.data);
        if (response.data.USERLOG === 'Valid') {
          console.log("dashboard")
          localStorage.setItem("userId", response.data.USERID)
          localStorage.setItem("isAuth", true)
          navigate.push('/admin/dashboard')
          window.location.reload(false);
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  const login = useFormik({
    initialValues: {
      userEmail: '',
      userPassword: '',
    },

    onSubmit: values => {
      console.log(JSON.stringify(login.values))
      loginAuth()
    }
  })

  useEffect(() => {
    // localStorage.setItem("isAuth", '')
  }, [])

  return (
    // <div style={{ backgroundImage: `url(${image})` }}>
    // <Container className="">
  <Row className="container">
    <Col md={4} lg={6} xs={12} className="d-flex align-items-center pe-0">
      <img src={image} alt="loginImg" height={700} width={700} className="loginImg" />
    </Col>

    <Col md={4} lg={6} xs={12}>
      <Card className="formbackground">
        <div className="mb-3">
          <Form>
            <Col md={8} lg={6} xs={12}>
              <img src={logo} alt="logoImg" height={80} width={240} className="logoimg" />
            </Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                className="emailtext"
                type="email"
                placeholder="Email Address"
                name="userEmail"
                onChange={login.handleChange}
                value={login.values.userEmail}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
            >
              <Form.Control
                type="password"
                className="emailtext"
                placeholder="Password"
                name="userPassword"
                onChange={login.handleChange}
                value={login.values.userPassword}
              />
            </Form.Group>
            <Button
              type="submit"
              onClick={() => handleClickLogin(login.values.userEmail, login.values.userPassword)}
              className="loginButton"
            >
              Login
            </Button>
            <p className="forgotpassword">
              <a className="text-primary" href="#!">
                Forgot password?
              </a>
            </p>
          </Form>
        </div>
      </Card>
    </Col>
  </Row>
// </Container>
    // </div>

  );
}

export default Login;
