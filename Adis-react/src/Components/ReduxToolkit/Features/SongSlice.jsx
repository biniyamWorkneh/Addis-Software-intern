import { createSlice } from "@reduxjs/toolkit";
export const SongSlice = createSlice({
  name: "song",
  initialState: {
    songs: null,
    createSong: {},
    selected: "",
    error: null,
    currentSong: null,
  },
  reducers: {
    getSongs: (state, action) => {
      state.songs = action.payload;
    },
    addSong: (state, action) => {
      state.songs = [action.payload, ...state.songs];
    },
    deleteSong: (state, action) => {
      state.songs = state.songs.filter(
        (song) => song._id !== action.payload._id
      );
    },
    updateSong: (state, action) => {
      state.songs = action.payload;
    },
    playCurrent: (state, action) => {
      state.currentSong = action.payload;
    },
    single: (state, action) => {
      state.selected = action.payload;
    },
    addError: (state, action) => {
      state.error = action.payload;
    },
  },
});
export const {
  getSongs,
  addSong,
  deleteSong,
  updateSong,
  playCurrent,
  single,
  addError,
} = SongSlice.actions;

export default SongSlice.reducer;
