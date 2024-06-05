import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import LogIn from "./views/LogIn";
import Absence from "./views/Absence";
import AbsentApplication from "./views/AbsentApplication";
import { useState } from "react";

const App = () => {
  const [visible, setVisible] = useState(false);
  const [createdAbsent, setCreatedAbsent] = useState([]);
  const [number, setNumber] = useState(1);

  return (
    <>
      <Navigation visible={visible} />
      <Routes>
        <Route path="/" element={<LogIn setVisible={setVisible} />} />
        <Route path="/home" element={<Home setVisible={setVisible} />} />
        <Route
          path="/absent-letter"
          element={
            <Absence
              setVisible={setVisible}
              createdAbsent={createdAbsent}
              setCreatedAbsent={setCreatedAbsent}
              setNumber={setNumber}
              number={number}
            />
          }
        />
        <Route
          path="/absent-letter/absence-application"
          element={
            <AbsentApplication
              setVisible={setVisible}
              createdAbsent={createdAbsent}
              setCreatedAbsent={setCreatedAbsent}
              number={number}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
