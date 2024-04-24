import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_SONG } from "../ReduxSaga/Types/ActionTypes";
import { playCurrent } from "../ReduxToolkit/Features/SongSlice";
import CardItem from "./CardItem";
import {Cards} from "../Style/Card.styled"
const Card = () => {
  const songList = useSelector((state) => state.Songs.songs);
  const currentMusic = useSelector((state) => state.Songs.currentSong);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchFunc = async () => {
      dispatch({ type: GET_SONG });
    };
    fetchFunc();
  }, []);

  const handleSong = (song) => {
    dispatch(playCurrent(song));
  };

  return (
    <Cards>
      {songList &&
        songList.map((song) => (
          <div key={song._id}>
            <CardItem song={song} handleSong={handleSong} currentMusic={currentMusic} />
          </div>
        ))}
    </Cards>
  );
};

export default Card;
