import AppRoute from "./route/AppRoute";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <AppRoute />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
