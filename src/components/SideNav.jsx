import "./SideNav.css";
import { useNavigate } from "react-router-dom";

const options = [
  {
    scroll: true,
    backdrop: false,
  },
];

const SideNav = ({ setVisible }) => {
  const navigate = useNavigate();

  function absence(e) {
    e.preventDefault();
    navigate("/absent-letter");
  }

  function handleLogOut(e) {
    e.preventDefault();
    setVisible(false);
    navigate("/");
  }

  return (
    <>
      <nav>
        <ul>
          <a href="">
            <i className="pi pi-chart-line"></i>
            <p>Dashboard</p>
          </a>
          <h5>ANALYSE</h5>
          <a href="">
            <i className="pi pi-clipboard"></i>
            <p>Attendance</p>
          </a>
          <h5>REQUEST</h5>
          <a href="">
            <i className="pi pi-id-card"></i>
            <p onClick={absence}>Absent Application</p>
          </a>
          <a href="">
            <i className="pi pi-user"></i>
            <p>Student</p>
          </a>
          <h5>GETOUT</h5>
          <a href="">
            <i className="pi pi-sign-out"></i>
            <p onClick={handleLogOut}>Logout</p>
          </a>
        </ul>
      </nav>
    </>
  );
};

export default SideNav;
