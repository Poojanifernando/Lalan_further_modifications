// import React, { useState, useEffect, Component } from "react"
// import { Link, useHistory } from "react-router-dom";
// import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
// import { getLocalhostUrl } from 'components/url/Url.js'
// import axios from "axios";
// import { useFormik } from 'formik';
// import useAuth from "isAuth/useAuth";
// import image from 'assets/img/login.png';
// import logo from "../../assets/img/logo123.png"
// import "../../assets/css/loginpage.css";

// function Login(props) {
//   // localStorage.setItem("isAuth", false)
//   const [url, seturl] = useState('');
//   const [isAuth, loginAuth, logoutAuth] = useAuth(false)
//   const [user, setuser] = useState([]);

//   useEffect(() => {
//     const myurl = getLocalhostUrl();
//     seturl(myurl)
//   });

//   let navigate = useHistory();

//   const handleClickLogin = async (username, password) => {

//     console.log("alert", username);
//     console.log("pass", password);
//     // // setIsRunning(false);
//     try {
//       axios.get(url + '/api/v1/admin/checkuser/' + username + '/' + password).then((response) => {
//         // setuser(response.data.USERLOG);
//         console.log(response.data.USERLOG);
//         console.log("response.data.USERLOG", response.data);

//         if (response.data.USERLOG == 'Valid') {

//           console.log("dashboard")
//           // navigate.push('/admin/dashboard');
//           localStorage.setItem("userId", response.data.USERID)
//           localStorage.setItem("isAuth", true)
//           navigate.push('/admin/dashboard')
//           window.location.reload(false);
//         }

//       });

//     } catch (error) {
//       console.error(error);
//     }

//   }

//   // useEffect(() => {
//   //   const myurl = getLocalhostUrl();
//   //   seturl(myurl)

//   //   axios.get(myurl + '/api/v1/admin/checkuser' + login.values.userEmail + '/' + login.values.userPassword).then((response) => {
//   //     setuser_name(response);

//   //   });
//   // }, [])

//   const login = useFormik({
//     initialValues: {
//       userEmail: '',
//       userPassword: '',
//     },

//     onSubmit: values => {
//       console.log(JSON.stringify(login.values))
//       //auth
//       loginAuth()

//       //   if (login.values.userEmail == user_name && login.values.userPassword == user_password) {
//       //     console.log(response);
//       //     localStorage.setItem("isAuth", true)
//       //     localStorage.setuser_name(true)

//       //     alert("valid");
//       //     // localStorage.setItem("userId", login.values.userEmail)
//       //     localStorage.setItem("userId", "UID_005")
//       //     navigate.push('/admin/dashboard')
//       //     window.location.reload(false);
//       //   }
//       //   // else {
//       //   //   alert(response.data);
//       //   //   window.location.reload(false);
//       //   // }

//     }
//   })

//   useEffect(() => {
//     // localStorage.setItem("isAuth", '')
//   }, [])

//   return (

//     <div style={{ backgroundImage: `url(${image})` }}>
//       <Container>
//         <Row className="vh-100 d-flex justify-content-center align-items-center">
//           <Col md={8} lg={6} xs={12}>
//             <div className=""></div>
//             <Card className="formbackground">
//               {/* <Card.Body> */}
//               {/* <div className="cardbody"> */}

//               <img src={logo} alt="logoImg" height={80} width={240} className="logoimg" alignItem="center" />
//               {/* <p className=" mb-5">Please enter your login and password!</p> */}
//               {/* <br /><br /> */}
//               <div className="mb-3" style={{alignItems:"center"}}>
//                 <Form>

//                 <div className="lblDesignLogin">USERNAME</div>
//                   <Form.Group className="mb-3" controlId="formBasicEmail">

//                     <Form.Control
//                       className="emailtext"
//                       type="text"
//                       placeholder="Email Address"
//                       name="userEmail"
//                       onChange={login.handleChange}
//                       alignItem="center"
//                       value={login.values.userEmail}
//                       />

//                   </Form.Group>
// <div className="lblDesignLogin">PASSWORD</div>
//                   <Form.Group
//                     className="mb-3"
//                     controlId="formBasicPassword"
//                   >

//                     <Form.Control
//                       type="password"
//                       className="emailtext"
//                       placeholder="Password"
//                       name="userPassword"
//                       onChange={login.handleChange}
//                       value={login.values.userPassword} />
//                   </Form.Group>
//                     <Button

//                       type="submit"
//                       onClick={() => handleClickLogin(login.values.userEmail, login.values.userPassword)}
//                       className="loginButton"
//                     > Login

//                     </Button>

//                     <p className="forgotpassword">
//                       <a className="text-primary" href="#!">
//                         Forgot password?
//                       </a>
//                     </p>
//                   {/* </Form.Group> */}
//                   <div className="col-md-12 text-center">

//                   </div>
//                 </Form>
//                 <div className="mt-3">
//                   {/* <p className="mb-0  text-center">
//                         Don't have an account?{" "}
//                         <Link className="text-primary fw-bold "
//                         //  to={`/signup`}
//                         >
//                           Sign Up
//                         </Link>
//                       </p> */}
//                 </div>
//               </div>
//               {/* </div> */}
//               {/* </Card.Body> */}
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>

//   );
// }

// export default Login;

import React, { useState, useEffect, Component } from "react";
import { Link, useHistory } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { getLocalhostUrl } from "components/url/Url.js";
import axios from "axios";
import { useFormik } from "formik";
import useAuth from "isAuth/useAuth";
import image from "assets/img/web2.png";
import logo from "../../assets/img/logo123.png";
import "../../assets/css/loginpage.css";

function Login(props) {
  const [url, seturl] = useState("");
  const [isAuth, loginAuth, logoutAuth] = useAuth(false);
  const [user, setuser] = useState([]);

  useEffect(() => {
    const myurl = getLocalhostUrl();
    seturl(myurl);
  });

  let navigate = useHistory();

  const handleClickLogin = async (username, password) => {
    console.log("alert", username);
    console.log("pass", password);
    try {
      axios
        .get(url + "/api/v1/admin/checkuser/" + username + "/" + password)
        .then((response) => {
          console.log(response.data.USERLOG);
          console.log("response.data.USERLOG", response.data);
          if (response.data.USERLOG === "Valid") {
            console.log("dashboard");
            localStorage.setItem("userId", response.data.USERID);
            localStorage.setItem("isAuth", true);
            navigate.push("/admin/dashboard");
            window.location.reload(false);
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  const login = useFormik({
    initialValues: {
      userEmail: "",
      userPassword: "",
    },

    onSubmit: (values) => {
      console.log(JSON.stringify(login.values));
      loginAuth();
    },
  });

  useEffect(() => {
    // localStorage.setItem("isAuth", '')
  }, []);

  return (
    <div className="loginContainer">
      <div className="left">
        <img 
        className="loginImg" 
        src={image} 
        alt="loginImg" />
      </div>

      <div className="right">
        <Card className="formbackground">
          <Card.Body>
            <img src={logo} className="logoImg" alt="logoImg" />

            <br></br>
            <br></br>

            <div className="lblDesignLogin">USERNAME</div>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                className="emailtext"
                type="text"
                placeholder="Email Address"
                name="userEmail"
                onChange={login.handleChange}
                value={login.values.userEmail}
              />
            </Form.Group>

            <br></br>

            <div className="lblDesignLogin">PASSWORD</div>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                className="emailtext"
                type="password"
                placeholder="Password"
                name="userPassword"
                onChange={login.handleChange}
                value={login.values.userPassword}
              />
            </Form.Group>

            <br></br>
            <div className="loginBtn">
              <Button
                className="loginButton"
                type="submit"
                onClick={() =>
                  handleClickLogin(
                    login.values.userEmail,
                    login.values.userPassword
                  )
                }
              >
                LOGIN
              </Button>
            </div>

            <br></br>
            <div className="forgotPassword">
              <a className="text-primary" href="#!">
                Forgot password?
              </a>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Login;
