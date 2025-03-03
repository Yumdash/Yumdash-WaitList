import { Route, Routes } from "react-router-dom";
import WaitList from "./components/Pages";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<WaitList />} />
      </Routes>
    </div>
  );
}

export default App;
