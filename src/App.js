import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/banner/Banner";
import RowPoster from "./components/rowPoster/RowPoster";
import {Recommend, Popular, Top_rated} from './url'


function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <RowPoster url = {Recommend} title = 'Recommend'/>
      <RowPoster url = {Popular} title = 'Popular'/>
      <RowPoster url = {Top_rated} title = 'Top rated'/>
    </>
  );
}

export default App;
