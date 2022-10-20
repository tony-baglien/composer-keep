import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Upload from "./Routes/Upload";
import YourPieces from "./Routes/YourPieces";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="upload" element={<Upload />} />
        <Route path="your-pieces" element={<YourPieces />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
