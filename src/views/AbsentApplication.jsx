import SideNav from "../components/SideNav";
import { Button } from "primereact/button";
import "./AbsentApplication.css";
import { useNavigate } from "react-router-dom";

const AbsentApplication = ({ setVisible, createdAbsent }) => {
  const navigate = useNavigate();

  function backAbsentApplication(e) {
    e.preventDefault();
    navigate("/absent-letter");
  }

  return (
    <div className="absentApp">
      <SideNav setVisible={setVisible} />
      <article>
        <div className="d-flex justify-content-between">
          <div>
            <p>Absent Application</p>
            <ul className="d-flex m-0 p-0">
              <li>
                <p>Absent Application /</p>
              </li>
              <li>
                <p className="active">Absence Record</p>
              </li>
            </ul>
          </div>
          <Button
            label="Send application"
            className="absentBtn"
            onClick={backAbsentApplication}
          ></Button>
        </div>

        <div className="mt-5">
          <table>
            <caption>Absence records</caption>
            <tbody>
              <tr className="d-flex  tableRow">
                <th className="numberTh">#</th>
                <th>Student name</th>
                <th>Course</th>
                <th>Absence reason</th>
                <th>Absence for</th>
                <th>Status</th>
              </tr>
            </tbody>

            {createdAbsent.map((data, i) => {
              return (
                <tbody key={i}>
                  <tr className="d-flex ">
                    <td className="numberTh">{data.number}</td>
                    <td className="rowRecord">Maria</td>
                    <td className="rowRecord">BICT</td>
                    <td className="rowRecord">{data.reason}</td>
                    <td className="rowRecord">{data.day}</td>
                    <td className="rowRecord">
                      <p className="progressAbsent">In progress</p>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </article>
    </div>
  );
};

export default AbsentApplication;
