import { Route, Routes } from "react-router-dom";
import { Homepage } from "./components/pages/homepage";
import { ClientSignUp } from "./components/pages/clientSignUp";

function App() {
  return (
    <>
      <div className="box-border ">
        <Routes>
          <Route path="/" element={<ClientSignUp />} />
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
