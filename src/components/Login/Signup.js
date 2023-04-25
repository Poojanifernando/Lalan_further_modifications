import React from 'react'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';

export default function Signup() {

  const signup = useFormik({
    initialValues: {
      userId:'',
      userName: '',
      userNIC: '',
      userEmail: '',
      userContactNumber: '',
      userRole: '',
      userPosition: '',
      userPassword: '',
    },
    onSubmit: values => {
        console.log(JSON.stringify(signup.values))
    }
})

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
          <div className="border border-2 border-primary"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">Sign-Up</h2>
                  <div className="mb-3">
                    <Form>
                    <Form.Group className="mb-3" controlId="EmployeeId">
                        <Form.Label className="text-center">Employee Id</Form.Label>
                        <Form.Control
                         type="email"
                          placeholder="Employee Id"
                          name="userId"
                          onChange={signup.handleChange}
                          value={signup.values.userId} 
                          />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Name</Form.Label>
                        <Form.Control
                         type="text"
                          placeholder="Enter Name"
                          name="userName"
                          onChange={signup.handleChange}
                          value={signup.values.userName} 
                          />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">Email address</Form.Label>
                        <Form.Control
                         type="email"
                          placeholder="Enter email"
                          name="userEmail"
                          onChange={signup.handleChange}
                          value={signup.values.userEmail} 
                          />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicNic">
                        <Form.Label className="text-center">NIC Number</Form.Label>
                        <Form.Control 
                        type="text"
                         placeholder="Enter NIC"
                         name="userNIC"
                          onChange={signup.handleChange}
                          value={signup.values.userNIC}
                         />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                         type="password"
                          placeholder="Password" 
                          name="userPassword"
                          onChange={signup.handleChange}
                          value={signup.values.userPassword}
                          />
                      </Form.Group>
                      {/* <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group> */}
                      <Form.Group className="mb-3" controlId="formBasicPosition">
                        <Form.Label className="text-center">Position</Form.Label>
                        <Form.Control
                         type="text"
                          placeholder="Enter Position"
                          name="userPosition"
                          onChange={signup.handleChange}
                          value={signup.values.userPosition}
                          />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicRole">
                        <Form.Label className="text-center">Role</Form.Label>
                        <Form.Control
                         type="text"
                          placeholder="Enter Role"
                          name="userRole"
                          onChange={signup.handleChange}
                          value={signup.values.userRole}
                          />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit" onClick={signup.handleSubmit}>
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                      Already have an account??{" "}

                        <Link  className="text-primary fw-bold" to={`/` }
                                                           >
                                                          Login
                                                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}