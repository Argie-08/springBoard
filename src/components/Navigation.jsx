import "./Navigation.css";
import { useNavigate } from "react-router-dom";

const Navigation = ({ visible }) => {
  const navigate = useNavigate();

  function backhome(e) {
    e.preventDefault();
    navigate("/home");
  }

  return (
    <>
      <header className="d-flex">
        <div className="logo">
          <a href="" onClick={backhome}>
            Attendify
          </a>
        </div>
        {visible && (
          <div className="d-flex justify-content-between test">
            <form>
              <input type="text" placeholder="Search" />
            </form>
            <ul className="d-flex m-0 ">
              <a className="bell d-flex align-items-center">
                <i className="pi pi-bell"></i>
                <span className="blueDot">1</span>
              </a>
              <a className="profile ">
                <img
                  src="https://s3-alpha-sig.figma.com/img/3b92/e823/4f6f233567237111b801af9ce754bbfa?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H~WrCtEsoQ6gGCN3gUMVuzgPfdIMdHN8Idd3dcSigYRJL-BpNdHHeA2v32vErcBVWtZa1YZW41UoPceXJSySIlUGcZUNPDsnmrADFmKPASJloRgHrwjhoPm9UhwiEPPeJKzoia8iHh5r2MII0Rs95p6i2X0qrNUQ4EBn2rs31rcA6A3xOzSB48TLOI~T8uYrve6hgX4Dy93evtBwgtE-q2a78SwsLwyZ1-AD26mj3A98VDcxkZrfHqw5114Oy9nvLo48GOaIBlXS3b0ISkn53Ni8SsWnoS4WafWXf7a~1qG4B~OTsOsnF156g5hiCdljkimAGTXGW6aLi2BGbdua~g__"
                  alt=""
                />
                <span className="peter ms-3">Peterpan</span>
              </a>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Navigation;
