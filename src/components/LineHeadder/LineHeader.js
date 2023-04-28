import React, { useState, useEffect } from "react";
import "../../assets/css/LineHeader.css";
import { getLocalhostUrl } from "components/url/Url.js";
import axios from "axios";
import ScrollMenuMachines from "components/MachineCardView/ScrollMenuMachines.js";
import Swal from "sweetalert2";
import "../../assets/css/allForms.css";

function LineHeader(props) {
  const UserId = localStorage.getItem("userId");
  const reson = localStorage.getItem("reson");
  const current_date = props.date;
  const current_Line = props.line;
  const current_Line_name = props.lineName;
  const [lineCustomerDetails, setlineCustomerDetails] = useState([]);
  const [test, settest] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [url, seturl] = useState("");
  const [Wastage, setWastage] = useState();
  const [result, setresult] = useState("");
  const [SumLength, setSumLength] = useState("");
  const [completedRollCount, setCompletedRollCount] = useState(0);
  const [currentRollCount, setcurrentRollCount] = useState(0);

  //Refresh button
  const handleClickRefresh = () => {
    axios.get("").then((response) => {
      console.log(response.data);
    });
  };

  useEffect(() => {
    setresult();
    const myurl = getLocalhostUrl();
    seturl(myurl);

    //display production details in the dashboard
    axios
      .get(
        myurl +
          "/api/v1/admin/GetDetailsByDateAndLineId/" +
          current_date +
          "/" +
          current_Line
      )
      .then((response) => {
        setlineCustomerDetails(response.data);
        // console.log(response.data[0].batchid_ad)
      });

    //initial value setter
    //set the color according to the online, warmup status
    axios
      .get(
        myurl +
          "/api/v1/admin/getcolorcode/" +
          current_Line +
          "/" +
          current_date
      )
      .then((response) => {
        settest(response.data);
      });

    //initial value setter
    //warm up and start , stops buutons(load the data according to the button clicks)
    axios
      .get(
        myurl +
          "/api/v1/admin/ButtonOnorNot/" +
          current_Line +
          "/" +
          current_date
      )
      .then((response) => {
        setIsRunning(response.data.ReturnVal);
        // console.log(response.data.ReturnVal)
        // setIsRunning(1);
      });
    //westage
    //get wastage from the length when press start button
    axios
      .get(myurl + "/api/v1/admin/getSumOfProductWastage/" + current_Line)
      .then((response) => {
        setWastage(response.data.IOT);
      });

    //get sum of product
    axios
      .get(myurl + "/api/v1/admin/getsumofproduct/" + current_Line)
      .then((response) => {
        setSumLength(response.data.IOT);
      });

    setInterval(
      () =>
        axios
          .get(myurl + "/api/v1/admin/getsumofproduct/" + current_Line)
          .then((response) => {
            setSumLength(response.data.IOT);
          }),
      10000
    );

    //loop
    setInterval(
      () =>
        new axios.get(
          myurl +
            "/api/v1/admin/getcolorcode/" +
            current_Line +
            "/" +
            current_date
        ).then((response) => {
          settest(response.data);
          //westage
          //get total wastage from the current line
          axios
            .get(myurl + "/api/v1/admin/getSumOfProductWastage/" + current_Line)
            .then((response) => {
              setWastage(response.data.IOT);
            });
        }),
      5000
    );

    //check the results of button
    setInterval(
      () =>
        new axios.get(
          myurl +
            "/api/v1/admin/ButtonOnorNot/" +
            current_Line +
            "/" +
            current_date
        ).then((response) => {
          setIsRunning(response.data.ReturnVal);
        }),
      1000
    );

    setInterval(() => {
      getCompletedRollCount();
    }, 10000);
  }, [isRunning]);

  // GET COMPLETED ROLE COUNT

  let firstWarm = true;
  let firstOnline = true;
  // let startbuttonhold =false;

  let startbuttonhold = localStorage.getItem("testbuton");
  const boolValue = JSON.parse(startbuttonhold);
  // console.log(isRunning)
  // let buttontruefalse = true;

  //stop button disable or not
  let stopbutton = true;
  if (isRunning == 1) {
    localStorage.setItem("testbuton", false);
    stopbutton = true;
  } else if (isRunning == 2) {
    stopbutton = true;
  } else if (isRunning == 3) {
    stopbutton = false;
  } else if (isRunning == 4) {
    stopbutton = false;
  }

  //click event in 4 button
  const handleClick1 = async (id) => {
    //warmup

    if (isRunning == 1) {
      //click warmp button
      if (confirm("Are you want to start warmup this?")) {
        // setIsRunning(true);
        try {
          //call the sp and post massages only not retun anything
          axios
            .get(
              url +
                "/api/v1/admin/AddStartTime/" +
                current_Line +
                "/" +
                current_date +
                "/" +
                id +
                "/1"
            )
            .then(() => {
              localStorage.setItem("testbuton", true);
              window.location.reload(false);
            })
            .catch((err) => {
              alert(err);
            });
        } catch (error) {
          console.error(error);
        }
      }
    }
    //start
    else if (isRunning == 2) {
      //when press start button
      if (confirm("Are you want to start this?")) {
        try {
          //console.log("Are you want to start this?", current_date, current_Line, id);
          //call the sp and post massages only not retun anything
          axios
            .get(
              url +
                "/api/v1/admin/AddStartTime/" +
                current_Line +
                "/" +
                current_date +
                "/" +
                id +
                "/2"
            )
            .then(() => {
              window.location.reload(false);
            })
            .catch((err) => {
              alert(err);
            });
        } catch (error) {
          console.error(error);
        }
      }
    }
    //pause
    else if (isRunning == 3) {
      //when click pause buuton
      if (confirm("Are you want to pause this?")) {
        //pop massage to select the reason to hold and stop
        try {
          const { value: option } = await Swal.fire({
            title: "Select an option",
            allowOutsideClick: false,
            input: "select",

            inputOptions: {
              MachineBreakdown: "Machine Breakdown",
              MoldChanging: "Mold Changing",
              StraptapeBroken: "Strap tape Broken",
              Maintenance: "Maintenance",
              NoPower: "No Power",
            },
            inputPlaceholder: "Select an option",
            showCancelButton: true,
            confirmButtonColor: "#DADADA",
          });

          if (option) {
            setresult(option);

            localStorage.setItem("reson", option);

            axios
              .get(
                url +
                  "/api/v1/admin/HoldProduction/" +
                  current_Line +
                  "/" +
                  id +
                  "/" +
                  "1" +
                  "/" +
                  UserId +
                  "/" +
                  option
              )
              .then(() => {
                window.location.reload(false);
              })
              .catch((err) => {
                alert(err);
              });
          } else {
            setresult("error");
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
    //resume
    else if (isRunning == 4) {
      //for resume the holded production
      if (confirm("Are you want to resume this?")) {
        try {
          axios
            .get(
              url +
                "/api/v1/admin/HoldProduction/" +
                current_Line +
                "/" +
                id +
                "/" +
                "2" +
                "/" +
                UserId +
                "/reson resume"
            )
            .then(() => {
              localStorage.setItem("reson", "");
              window.location.reload(false);
            })
            .catch((err) => {
              alert(err);
            });
        } catch (error) {
          console.error(error);
        }
      }
    }
  };

  //stop button
  const handleClickStop = async (id) => {
    //to stop the production
    if (confirm("Are you want to stop this?")) {
      try {
        // axios.get(url + '/api/v1/admin/getrollnumbers/' + id + '/' + current_Line).then(() => {

        // });
        axios
          .get(
            url +
              "/api/v1/admin/DeleteValuesByEndTime/" +
              current_Line +
              "/" +
              current_date +
              "/" +
              id
          )
          .then(() => {
            window.location.reload(false);
          })
          .catch((err) => {
            alert(err);
          });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const style = {
    // backgroundColor: isRunning ? 'red' : 'green',
    backgroundColor: (() => {
      switch (isRunning) {
        case 1:
          return "yellow";
        case 2:
          return "green";
        case 3:
          return "orange";
        case 4:
          return "orange";
        default:
          return "white";
      }
    })(),
    color: "White",
  };

  const getCompletedRollCount = async () => {
    try {
      const response1 = await axios.get(
        url + "/api/v1/admin/getsumofproduct/" + current_Line
      );
      const sumOfLenght = response1.data.IOT;
      setSumLength(sumOfLenght);

      const response2 = await axios.get(
        url +
          "/api/v1/admin/GetDetailsByDateAndLineId/" +
          current_date +
          "/" +
          current_Line
      );
      const rollLenght = response2.data[0].roll_length;
      const proOrder = response2.data[0].production_order;

      setlineCustomerDetails(response2.data);

      const compltedRollCount = Math.floor(sumOfLenght / rollLenght);
      setCompletedRollCount(compltedRollCount);

      const currentCount = Math.floor(sumOfLenght / rollLenght + 1);
      setcurrentRollCount(currentCount);

      axios
        .get(
          url +
            "/api/v1/admin/getCompletedCountandDate/" +
            proOrder +
            "/" +
            current_Line +
            "/" +
            compltedRollCount
        )
        .then(() => {
          // console.log("roll count", compltedRollCount);
        });
    } catch (error) {
      console.error(error);
    }
  };

  //show the all customer details in ths page
  return (
    <div>
      {lineCustomerDetails.length !== 0 ? (
        lineCustomerDetails.map((cusDetails, index) => {
          return (
            <>
              <div class="row1">
                <div>
                  <br></br>

                  <div class="row align-items-center">
                    <div class="col text-left">
                      <b style={{ fontSize: "1.0rem" }}>
                        LINE - {current_Line_name}
                      </b>
                    </div>

                    {/* Add Refresh button */}

                    <div class="col text-right">
                      <b>
                        <button
                          className="refreshBtn mr-3"
                          style={{ color: "white", backgroundColor: "#023e8a" }}
                          onClick={handleClickRefresh}
                        >
                          Refresh - Devices
                        </button>
                      </b>
                    </div>
                  </div>
                  {/* </> */}
                  <hr className="hrDesign"></hr>
                  <div className="onlinrtestrow">
                    {test.map((Value, index) => {
                      if (Value.t_warmup === "Warming Up" && firstWarm) {
                        firstWarm = false;
                        if (isRunning == 2) {
                          localStorage.setItem("testbuton", true);
                        }
                        return (
                          <div
                            class="columnrow rightrow"
                            style={{ backgroundColor: Value.t_color }}
                          >
                            {Value.t_warmup}
                          </div>
                        );
                      }
                      if (Value.t_warmup === "Online" && firstOnline) {
                        firstOnline = false;
                        // buttontruefalse = false;
                        // startbuttonhold = false;
                        localStorage.setItem("testbuton", false);
                        return (
                          <div
                            class="columnrow rightrow"
                            style={{ backgroundColor: "#027739" }}
                          >
                            {Value.t_warmup}
                            {reson ? <> || {reson} </> : null}
                          </div>
                        );
                      }
                    })}
                  </div>

                  <div class="columnrowbtnpadding">
                    <button
                      onClick={() => handleClick1(cusDetails.production_order)}
                      className="startBtn"
                      disabled={boolValue}
                    >
                      {isRunning == 1
                        ? "WARMUP"
                        : isRunning == 2
                        ? "START"
                        : isRunning == 3
                        ? "PAUSE"
                        : isRunning == 4
                        ? "RESUME"
                        : ""}
                    </button>

                    {/* stop button */}
                    <button
                      className="stopBtn"
                      style={{ color: "white", backgroundColor: "red" }}
                      disabled={stopbutton}
                      onClick={() =>
                        handleClickStop(cusDetails.production_order)
                      }
                    >
                      STOP
                    </button>
                  </div>
                </div>
              </div>

              <br></br>
              <div class="row1">
                {/* to display the production data */}
                <div class="column1">
                  <p className="linetitle">
                    JOB NO :
                    <p className="ptagRemove"> {cusDetails.job_id_ad}</p>
                  </p>
                </div>
                <div class="column1">
                  <p className="linetitle">
                    PRODUCT :
                    <p className="ptagRemove"> {cusDetails.product_name}</p>
                  </p>{" "}
                </div>
                <div class="column1">
                  <p className="linetitle">
                    TOTAL LENGTH :
                    <p className="ptagRemove"> {cusDetails.count_reg_bch}m</p>
                  </p>{" "}
                </div>
                <div class="column1">
                  <p className="linetitle">
                    ROLL COUNT :
                    <p className="ptagRemove"> {cusDetails.Number_of_rolls}</p>
                  </p>{" "}
                </div>
                <div class="column1">
                  <p className="linetitle">
                    BATCH :{" "}
                    <p className="ptagRemove"> {cusDetails.batchid_reg_bch}</p>
                  </p>{" "}
                </div>
                <div class="column1">
                  <p className="linetitle">
                    CUSTOMER :
                    <p className="ptagRemove"> {cusDetails.customer_name}</p>
                  </p>{" "}
                </div>
                <div class="column1">
                  <p className="linetitle">
                    WASTAGE : <p className="ptagRemove"> {Wastage}m</p>
                  </p>
                </div>
              </div>
              <br />

              <div class="row1">
                <div class="column1">
                  <p className="linetitle">
                    COMPLETED ROLL COUNT :
                    <p className="ptagRemove"> {completedRollCount}</p>
                  </p>
                </div>
                <div class="column1">
                  <p className="linetitle">
                    CURRENT ROLL COUNT :
                    <p className="ptagRemove" style={{ color: "red" }}>
                      {" "}
                      {currentRollCount}{" "}
                    </p>
                  </p>
                </div>
              </div>

              {/* call to the ScrollMenuMachines to view all the machine view using props*/}
              <ScrollMenuMachines
                date={current_date}
                line={current_Line}
                pOrder={cusDetails.production_order}
              />
            </>
          );
        })
      ) : (
        <p className="no-data-msg">
          Enter new production to <b>{current_Line_name}</b>
        </p>
      )}
    </div>
  );
}

export default LineHeader;
