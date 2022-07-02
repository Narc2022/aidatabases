import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Chart from "./Component/Chart";
import Table from "./Component/Table";
import './index.css'


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(<div>
  <App />
  <div  className="container">
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Table />} />
      <Route path="chart" element={<Chart />} />
    </Routes>
  </BrowserRouter>
  </div>
  </div>
);