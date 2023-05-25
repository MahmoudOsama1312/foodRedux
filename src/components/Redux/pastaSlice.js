import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  pastas: [],
  loading: false,
  error: null,
};

const pastaSlice = createSlice({  // el name hena bta3 el Slice , malosh 3elaka bel Store.js
  name: 'pasta',
  initialState,
  reducers: {
    fetchPastasStart(state) {
      state.loading = true;
    },
    fetchPastasSuccess(state, action) {
      state.loading = false;
      state.pastas = action.payload;
    },
    fetchPastasFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPastasStart, fetchPastasSuccess, fetchPastasFailure } =
  pastaSlice.actions;

export const fetchPastas = () => async (dispatch) => {
  dispatch(fetchPastasStart());

  try {
    const response = await axios.get(
      'https://forkify-api.herokuapp.com/api/search?q=pasta'
    );
    dispatch(fetchPastasSuccess(response.data.recipes));
  } catch (error) {
    dispatch(fetchPastasFailure(error.message));
  }
};

export default pastaSlice.reducer;
