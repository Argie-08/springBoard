import SideNav from "../components/SideNav";
import "./Home.css";

const Home = ({ setVisible }) => {
  return (
    <main>
      <SideNav setVisible={setVisible} />
      <article>
        <h5 className="school">Attendify Institute</h5>
      </article>
    </main>
  );
};

export default Home;
