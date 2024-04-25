import axios from "axios";

export const getSongAPI = async () =>
  await axios.get("https://addis-software-intern-1.onrender.com/getSongs");
export const postSongAPI = async (sendFile) => {
  const data = await axios.post(
    "https://addis-software-intern-1.onrender.com/addSongs",
    sendFile
  );
  return data;
};
export const deleteSongAPI = async (id) => {
  const data = await axios.delete(
    "https://addis-software-intern-1.onrender.com/deleteSong/" + id
  );
  return data;
};
export const updateSongAPI = async (id, artist) => {
  const data =  await axios.patch(
    "https://addis-software-intern-1.onrender.com/updateSongs/" + id,
    artist
  );
  return data;
};