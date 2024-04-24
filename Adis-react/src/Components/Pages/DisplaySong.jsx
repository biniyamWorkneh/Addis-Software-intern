import React, { useState } from "react";
import {
  Footer,
  Play,
  ProgressBarContainer,
  Time,
  RangeInput,
  Containers,
  StyledAiFillPlayCircle,
  StyledIoPauseCircle,
} from "../Style/DisplaySong.styled";
import { useSelector } from "react-redux";
import styled from "styled-components";
const DisplaySong = () => {
  const [playing, setPlaying] = useState(true);
  const currentMusic = useSelector((state) => state.Songs.currentSong);
  const toogle = () => {
    setPlaying(!playing);
  };
  return (
    <Footer>
      {currentMusic && <AudioPlayer
        src={`http://localhost:3000/uploads/${currentMusic.song}`}
        controls
        autoPlay
      ></AudioPlayer>}
    </Footer>
  );
};

export default DisplaySong;
export const AudioPlayer = styled.audio`
  width: 100%;
  background-color:blue;
`;
