import React, { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { DELETE_SONG, UPDATE_SONG } from "../ReduxSaga/Types/ActionTypes";
import { CardBody, CardText, CardIcon, EditButton,IconD,CardIconU,DisIn} from "../Style/Card.styled";
import { ArtistEditInput } from "../Style/Upload.styled";
import io from "../../../public/d3.jpg";
import { FaPlayCircle } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";



const CardItem = ({ song, handleSong, currentMusic }) => {
  const [clickedUpdate, setClickedUpdate] = useState(false);
  const [changedValue, setChangedValue] = useState(song.artist);
  const [isPlaying, setIsPlaying] = useState(
    currentMusic && currentMusic._id === song._id
  );
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setChangedValue(e.target.value);
  };

  const handleEditClick = () => {
    setClickedUpdate(true);
  };

  const handleDelete = () => {
    dispatch({ type: DELETE_SONG, id: song._id });
  };

  const handleSubmit = () => {
    const id = song._id;
    const artist = { changedValue };
    dispatch({ type: UPDATE_SONG, id, artist });
    setClickedUpdate(false);
  };

  const togglePlay = () => {
    if (currentMusic && currentMusic._id === song._id) {
      setIsPlaying(!isPlaying);
    } else {
      handleSong(song);
    }
  };

  useEffect(() => {
    setIsPlaying(currentMusic && currentMusic._id === song._id);
  }, [currentMusic, song]);

  return (
    <CardBody>
      <img src={io} alt="" />
      {clickedUpdate ? (
        <DisIn>
          <ArtistEditInput
            type="text"
            value={changedValue}
            onChange={(e) => handleChange(e)}
          />
          <EditButton onClick={handleSubmit}>Submit</EditButton>
        </DisIn>
      ) : (
        <CardText>{song.artist}</CardText>
      )}

      {isPlaying ? (
        <FaPause onClick={togglePlay} style={{ color: '#153250' }} />
      ) : (
        <FaPlayCircle
          onClick={togglePlay}
          style={{ color: '#153250' }}
        />
      )}

      <IconD>
        <CardIcon onClick={handleDelete}>
          <RiDeleteBin5Line />
        </CardIcon>
        {clickedUpdate ? null : (
          <>
            <CardIconU onClick={handleEditClick}>
              <FaRegEdit />
            </CardIconU>
          </>
        )}
      </IconD>
    </CardBody>
  );
};

export default CardItem;