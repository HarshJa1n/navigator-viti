import React from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





// logo location
const logo = "./Graviti Logo 1.png"

function App() {
  return (
    <>
      <Navbar imgSrc={logo} />
      <Container />
      <ToastContainer />

    </>
  )
}

export default App;
