import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";
import { playCurrent } from "../ReduxToolkit/Features/SongSlice";
import { DELETE_SONG, GET_SONG } from "../ReduxSaga/Types/ActionTypes";
import { UPDATE_SONG } from "../ReduxSaga/Types/ActionTypes";
import {
  Cards,
  CardBody,
  CardText,
  CardIcon,
  EditButton
} from "../Style/Card.styled";
import {  ArtistEditInput} from "../Style/Upload.styled"
import io from "../../../public/d3.jpg";
import { FaRegEdit } from "react-icons/fa";

const Card = () => {
  const songList = useSelector((state) => state.Songs.songs);
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

  const handleDelete = async (id) => {
    dispatch({ type: DELETE_SONG, id });
  };

  const handleSubmit = async (song, changedValue) => {
    const id = song._id;
    dispatch({ type: UPDATE_SONG, id, artist: changedValue });
  };

  return (
    <Cards>
      {songList &&
        songList.map((song) => (
          <div key={song._id}>
            <CardItem
              song={song}
              handleDelete={handleDelete}
              handleSong={handleSong}
              handleSubmit={handleSubmit}
            />
          </div>
        ))}
    </Cards>
  );
};

const CardItem = ({ song, handleDelete, handleSubmit }) => {
  const [clickedUpdate, setClickedUpdate] = useState(false);
  const [changedValue, setChangedValue] = useState(song.artist);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setChangedValue(e.target.value);
  };

  const handleEditClick = () => {
    setClickedUpdate(true);
  };

  const handleCancelClick = () => {
    setClickedUpdate(false);
    setChangedValue(song.artist);
  };

  return (
    <div>
      <CardBody>
        <img src={io} alt="" />
        {clickedUpdate ? (
          <ArtistEditInput
            type="text"
            value={changedValue}
            onChange={(e) => handleChange(e)}
          />
        ) : (
          <CardText>{song.artist}</CardText>
        )}
        <CardIcon onClick={() => handleDelete(song._id)}>
          <RiDeleteBin5Line />
        </CardIcon>
        {clickedUpdate ? (
          <>
            <EditButton onClick={() => handleSubmit(song, changedValue)}>
              Submit
            </EditButton>
            <EditButton onClick={handleCancelClick}>Cancel</EditButton>
          </>
        ) : (
          <CardIcon onClick={handleEditClick}>
            <FaRegEdit />
          </CardIcon>
        )}
      </CardBody>
    </div>
  );
};

export default Card;
