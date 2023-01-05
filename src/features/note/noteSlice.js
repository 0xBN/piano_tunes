import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'A',
};

const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    setNote: (state, action) => {
      // console.log('🌟 ~ file: noteSlice.js:12 ~ action', action.payload);

      state.value = action.payload;
    },
  },
});

export const { setNote } = noteSlice.actions;

export default noteSlice.reducer;
