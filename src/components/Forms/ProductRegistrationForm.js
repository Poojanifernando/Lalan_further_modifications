import React, { useState, useEffect } from "react";
import axios from "axios";
import { getLocalhostUrl } from "components/url/Url.js";
import { useFormik } from "formik";
import "../../assets/css/allForms.css";
import ProductMaxMinTable from "components/Tables/ProductMaxMinTable";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Dropdown,
} from "react-bootstrap";
import { DropdownItem } from "reactstrap";

function ProductRegistrationForm() {
  const userid_pro = "UID_005";
  const [url, seturl] = useState("");

  //Get Product line details for the selector
  const [lineDetails, setLineDetails] = useState([]);
  //Get items(product lines) for the selector
  const [itemDetails, setItemDetails] = useState([]);

  //Get Selected value from the production line selector
  const [selectedLine, setSelectedLine] = useState("");

  //Get Selected value from the product selector
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleOptionChangeLine = (event) => {
    setSelectedLine(event.target.value);
    console.log(event.target.value);
  };

  const handleOptionChangeProduct = (event) => {
    setSelectedProduct(event.target.value);
    console.log(event.target.value);
  };

  // const lineHandleSubmit = (event) => {
  //   event.preventDefault();
  // };

  //Hook
  const ProDetails = useFormik({
    initialValues: {
      userID_pro: userid_pro,
      productId: "",
      productName: "",
      description: "",
      image: "",
      productLine: "",
    },

    validate: (values) => {
      const errors = {};
      if (!values.productId) {
        errors.productId = "Item id is required";
      }
      if (!values.productName) {
        errors.productName = "Item name is required";
      }
      if (!values.description) {
        errors.description = " Item Description is required";
      }
      if (!values.productLine) {
        errors.productLine = " Production Line Name is required";
      }
      return errors;
    },
    onSubmit: (values) => {
      if (ProDetails.isValid) {
        axios
          .post(url + "/api/v1/product/saveProduct", ProDetails.values)
          .then(() => {
            alert("Item added successfully!!!");
            window.location.reload(false);
          })
          .catch((err) => {
            alert(err);
          });
      } else {
        console.log("Not all fields are filled in");
      }
    },
  });
  useEffect(() => {
    const myurl = getLocalhostUrl();
    seturl(myurl);
    //Calling API to get product line details
    axios.get(myurl + "/api/v1/line/getAllLineAndId").then((response) => {
      setLineDetails(response.data);
    });
    //calling API to get items (products) details

    axios
      .get(myurl + "/api/v1/product/getAllProductsNameAndIds")
      .then((response) => {
        setItemDetails(response.data);
      });
  }, []);
  return (
    <>
      <Container>
        <div className="cardDesign ">
          <Card.Header style={{ border: "none", backgroundColor: "white" }}>
            <Card.Title
              style={{
                color: "#555",
                fontSize: "0.8rem",
                fontWeight: "600",
                marginTop: "30px",
              }}
            >
              ITEMS REGISTRATION
            </Card.Title>
            <hr style={{ padding: "0", margin: "0" }} />
          </Card.Header>
          <Card.Body style={{ paddingTop: "0" }}>
            <Form>
              <div className="row">
                <div className="col-md-5">
                  <Form.Group className="formDesign">
                    <label className="lblDesign">ITEM CODE</label>
                    <Form.Control
                      placeholder="Item Code"
                      type="text"
                      name="productId"
                      onChange={ProDetails.handleChange}
                      value={ProDetails.values.productId}
                      style={{ borderRadius: "10px" }}
                    ></Form.Control>
                    {ProDetails.errors.productId && (
                      <div className="text-danger">
                        {ProDetails.errors.productId}
                      </div>
                    )}
                  </Form.Group>

                  <Form.Group className="formDesign">
                    <label className="lblDesign">ITEM NAME</label>
                    <Form.Control
                      placeholder="Item Name"
                      type="text"
                      name="productName"
                      onChange={ProDetails.handleChange}
                      value={ProDetails.values.productName}
                      style={{ borderRadius: "10px" }}
                    ></Form.Control>
                    {ProDetails.errors.productName && (
                      <div className="text-danger">
                        {ProDetails.errors.productName}
                      </div>
                    )}
                  </Form.Group>

                  <Form.Group className="formDesign">
                    <label className="lblDesign">ITEM DESCRIPTION</label>
                    <Form.Control
                      placeholder="eg:9mmx2500mx0.55mm YELLOW UNPRINTED SEMI AUTO"
                      type="text"
                      name="description"
                      onChange={ProDetails.handleChange}
                      value={ProDetails.values.description}
                      style={{ borderRadius: "10px" }}
                    ></Form.Control>
                    {ProDetails.errors.description && (
                      <div className="text-danger">
                        {ProDetails.errors.description}
                      </div>
                    )}
                  </Form.Group>

                  <Form.Group className="formDesign">
                    <label className="lblDesign">ITEM IMAGE</label>
                    <Form.Control
                      placeholder="Product Image"
                      type="file"
                      name="image"
                      onChange={ProDetails.handleChange}
                      value={ProDetails.values.image}
                      style={{ borderRadius: "10px" }}
                    ></Form.Control>
                  </Form.Group>
                </div>

                <div className="col-md-7">
                  <div className="row">
                    <div className="col-sm-6">
                      <Form.Group className="formDesign">
                        <label className="lblDesign">
                          PRODUCTION LINE NAME
                        </label>
                        <Form.Select
                          size="lg"
                          className="form-control"
                          name="productLine"
                          style={{ borderRadius: "10px" }}
                          //onSubmit={lineHandleSubmit}
                          value={selectedLine}
                          onChange={handleOptionChangeLine}
                        >
                          <option value="">Choose</option>
                          {lineDetails.map((item) => {
                            return (
                              <option key={item.lineId} value={item.lineId}>
                                {item.lineName}
                              </option>
                            );
                          })}
                        </Form.Select>
                        {ProDetails.errors.productLine && (
                          <div className="text-danger">
                            {ProDetails.errors.productLine}
                          </div>
                        )}
                      </Form.Group>
                    </div>

                    <div className="col-sm-6">
                      <Form.Group className="formDesign">
                        <label className="lblDesign">ITEMS</label>
                        <Form.Select
                          size="lg"
                          className="form-control"
                          name="product"
                          style={{ borderRadius: "10px" }}
                          value={selectedProduct}
                          onChange={handleOptionChangeProduct}
                        >
                          <option value="">Choose</option>
                          {itemDetails.map((item) => {
                            return (
                              <option
                                key={item.productId}
                                value={item.productId}
                              >
                                {item.productId} - {item.productname}
                              </option>
                            );
                          })}
                        </Form.Select>
                      </Form.Group>
                    </div>
                  </div>
                  <ProductMaxMinTable
                    selectedLine={selectedLine}
                    selectedProduct={selectedProduct}
                  />
                </div>
              </div>

              <div className="button ">
                <button
                  className="btnSubmit"
                  type="submit"
                  variant="primary"
                  onClick={ProDetails.handleSubmit}
                >
                  ADD
                </button>
              </div>
              <div className="clearfix"></div>
            </Form>
          </Card.Body>
          {/* </Card>
                    </Col> */}
        </div>
      </Container>
    </>
  );
}

export default ProductRegistrationForm;
