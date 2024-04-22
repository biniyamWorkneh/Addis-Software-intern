import axios from "axios";

export const getSongAPI = async () =>
  await axios.get("http://localhost:3000/getSongs");
export const postSongAPI = async (sendFile) => {
  const data = await axios.post(
    "http://localhost:3000/addSongs",
    sendFile
  );
  return data;
};
export const deleteSongAPI = async (id) => {
  const data = await axios.delete(
    "http://localhost:3000/deleteSong/" + id
  );
  return data;
};
export const updateSongAPI = async (id, artist) => {
  const data =  await axios.patch(
    "http://localhost:3000/updateSongs/" + id,
    artist
  );
  return data;
};