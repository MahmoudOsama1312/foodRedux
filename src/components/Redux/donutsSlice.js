import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  donuts: [],
  loading: false,
  error: null,
};

const donutsSlice = createSlice({  // el name hena bta3 el Slice , malosh 3elaka bel Store.js
  name: 'donuts',
  initialState,
  reducers: {
    fetchDonutsStart(state) {
      state.loading = true;
    },
    fetchDonutsSuccess(state, action) {
      state.loading = false;
      state.donuts = action.payload;
    },
    fetchDonutsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDonutsStart, fetchDonutsSuccess, fetchDonutsFailure } =
  donutsSlice.actions;

export const fetchDonuts = () => async (dispatch) => {
  dispatch(fetchDonutsStart());

  try {
    const response = await axios.get(
      'https://forkify-api.herokuapp.com/api/search?q=donuts'
    );
    dispatch(fetchDonutsSuccess(response.data.recipes));
  } catch (error) {
    dispatch(fetchDonutsFailure(error.message));
  }
};

export default donutsSlice.reducer;
