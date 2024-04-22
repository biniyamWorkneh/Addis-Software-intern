import React from "react";
import SongList from "./SongList";
import Card from "./Card";
import DisplaySong from "./DisplaySong";
import Navbar from "./Navbar";
import { MainContainer, ContentContainer } from "../Style/MainContainer.styled";
const Container = () => {
  return (
    <MainContainer>
      <Navbar />
      <ContentContainer style={{marginTop:'40px',marginBottom:"40px", maxHeight: 'calc(100vh - 90px)', overflowY: 'auto' }}>
        <Card />
        {<DisplaySong/>}
      </ContentContainer>
    </MainContainer>
  );
};

export default Container;