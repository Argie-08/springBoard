import "./Absence.css";
import { Button } from "primereact/button";
import SideNav from "../components/SideNav";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Toast } from "primereact/toast";
import { useRef } from "react";

const Absence = ({
  setVisible,
  createdAbsent,
  setCreatedAbsent,
  setNumber,
  number,
}) => {
  const navigate = useNavigate();
  const [day, setDay] = useState("");
  const [reason, setReason] = useState("");
  const toast = useRef(null);

  function handleAbsence(e) {
    e.preventDefault();

    toast.current.show({
      severity: "success",
      summary: "Info",
      detail: "Successfully created absent application",
    });

    const newReason = {
      day: day,
      reason: reason,
      number: number,
    };
    let newReasons = [...createdAbsent];
    newReasons.push(newReason);
    setCreatedAbsent(newReasons);

    setNumber((prev) => prev + 1);
    setDay("");
    setReason("");

    setTimeout(() => {
      navigate("/absent-letter/absence-application");
    }, 2000);
  }

  function handleReset(e) {
    e.preventDefault();
    setDay("");
    setReason("");
  }

  function checkStatus(e) {
    e.preventDefault();
    navigate("/absent-letter/absence-application");
  }

  return (
    <div className="absentApp">
      <Toast ref={toast} position="top-center" />
      <SideNav setVisible={setVisible} />
      <article>
        <p>Absent Application</p>
        <ul className="d-flex m-0 p-0">
          <li>
            <p>Manage /</p>
          </li>
          <li>
            <p>Subject /</p>
          </li>
          <li>
            <p className="active">Add Subject</p>
          </li>
        </ul>
        <form className="mt-5" onSubmit={handleAbsence}>
          <div className="inFormDiv">
            <p>Send Absent Application</p>
            <section className="inForm">
              <div id="placeholder" className="d-flex">
                <div className="d-flex flex-column gapLabelInput">
                  <label>Date</label>
                  <input type="date" />
                </div>
                <div className="d-flex flex-column gapLabelInput">
                  <label>Number of Days</label>
                  <input
                    type="number"
                    value={day}
                    placeholder="No. of days"
                    onChange={(e) => setDay(e.target.value)}
                  />
                </div>
              </div>
              <p>Reason</p>
              <textarea
                type="text"
                value={reason}
                placeholder="Reason for being absent . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ."
                className="inputReason mt-2"
                onChange={(e) => setReason(e.target.value)}
              />
            </section>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex buttonGap">
              <Button label="Submit" className="submitBtn" type="submit" />
              <Button
                label="Reset"
                className="resetBtn"
                onClick={handleReset}
              />
            </div>
            <a href="" onClick={checkStatus} className="viewApp">
              View Application Status
            </a>
          </div>
        </form>
      </article>
    </div>
  );
};

export default Absence;
