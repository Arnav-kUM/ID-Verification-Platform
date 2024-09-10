import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Verification_page from "./components/verification_page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:verificationId" element={<Verification_page/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
