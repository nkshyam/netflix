import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/banner/Banner";
import RowPoster from "./components/rowPoster/RowPoster";


function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <RowPoster/>
    </>
  );
}

export default App;
