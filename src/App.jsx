import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Homepage from './Homepage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/homepage' element={<Homepage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
