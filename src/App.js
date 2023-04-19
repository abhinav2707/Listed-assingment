import Auth from "./Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Auth/>}></Route>
      <Route path = "dashboard" element={<Dashboard/>}></Route>
    
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
