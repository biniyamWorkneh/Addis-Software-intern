import React, { useState } from 'react';
import { Header, Nav, Text, Logo, UploadContainer, 
  FileInput, UploadButton, DropdownButton, DropdownContent, DropdownItem } from '../Style/Navbar.styled';
import immm from "../../../public/b22.jpg";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { ADD_SONG } from "../ReduxSaga/Types/ActionTypes";

const Navbar = () => {
  const [fileValue, setFileValue] = useState("");
  const [artist, setArtist] = useState("");
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility
  const error = useSelector((state) => state.Songs.error);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", fileValue);
    formData.append("artist", artist);
    dispatch({ type: ADD_SONG, formData });
    setShowForm(!showForm);
  };

  const handleUpload = (e) => {
    setFileValue(e.target.files[0]);
  };

  const toggleForm = () => {
    setShowForm(!showForm); // Toggle the state to show/hide the form
  };

  return (
    <Header>
      <Nav>
        <Text>
          <Logo src={immm} alt="Addis Software"/>
          Music Player
        </Text>
        <UploadContainer>
          {/* <h5>song</h5> */}
          Song
          <DropdownButton onClick={toggleForm}>
            <IoIosArrowDropdownCircle  />
          </DropdownButton>
          <DropdownContent show={showForm}>
            <form>
              <FileInput
                type="file"
                onChange={handleUpload}
                accept="audio/*"
                required
              />
              <p style={{ color: "red" }}>{error}</p>
              <br />
              <UploadButton type="submit" onClick={handleSubmit} value="Add Song" />
            </form>
          </DropdownContent>
        </UploadContainer>
      </Nav>
    </Header>
  );
};

export default Navbar;
