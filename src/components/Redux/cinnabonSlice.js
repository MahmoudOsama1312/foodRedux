import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cinnabon: [],
  loading: false,
  error: null,
};

const cinnabonSlice = createSlice({  // el name hena bta3 el Slice , malosh 3elaka bel Store.js
  name: 'cinnabon',
  initialState,
  reducers: {
    fetchCinnabonStart(state) {
      state.loading = true;
    },
    fetchCinnabonSuccess(state, action) {
      state.loading = false;
      state.cinnabon = action.payload;
    },
    fetchCinnabonFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchCinnabonStart, fetchCinnabonSuccess, fetchCinnabonFailure } =
  cinnabonSlice.actions;

export const fetchCinnabon = () => async (dispatch) => {
  dispatch(fetchCinnabonStart());

  try {
    const response = await axios.get(
      'https://forkify-api.herokuapp.com/api/search?q=cinnamon'
    );
    dispatch(fetchCinnabonSuccess(response.data.recipes));
  } catch (error) {
    dispatch(fetchCinnabonFailure(error.message));
  }
};

export default cinnabonSlice.reducer;
