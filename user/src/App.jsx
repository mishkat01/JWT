import AppRoute from "./route/AppRoute";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <div>
        <ToastContainer />
        <BrowserRouter>
          <AppRoute />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
