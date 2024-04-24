import React from "react";
// import SongList from "./SongList";
import Card from "./Card";
import DisplaySong from "./DisplaySong";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import DisplaySong from "./BDisplaySong";
import Navbar from "./Navbar";
import { MainContainer, ContentContainer } from "../Style/MainContainer.styled";
const Container = () => {
  return (
    <MainContainer>
      <Navbar />
      <ContentContainer style={{}}>
        <Card />
        {<DisplaySong />}
        {/* <SongList/> */}
        {/* <DisplaySong/> */}
      </ContentContainer>
      <ToastContainer />
    </MainContainer>
  );
};

export default Container;
