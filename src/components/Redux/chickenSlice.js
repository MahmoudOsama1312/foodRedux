import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  chicken: [],
  loading: false,
  error: null,
};

const chickenSlice = createSlice({  // el name hena bta3 el Slice , malosh 3elaka bel Store.js
  name: 'chicken',
  initialState,
  reducers: {
    fetchChickenStart(state) {
      state.loading = true;
    },
    fetchChickenSuccess(state, action) {
      state.loading = false;
      state.chicken = action.payload;
    },
    fetchChickenFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchChickenStart, fetchChickenSuccess, fetchChickenFailure } =
  chickenSlice.actions;

export const fetchChicken = () => async (dispatch) => {
  dispatch(fetchChickenStart());

  try {
    const response = await axios.get(
      'https://forkify-api.herokuapp.com/api/search?q=chicken'
    );
    dispatch(fetchChickenSuccess(response.data.recipes));
  } catch (error) {
    dispatch(fetchChickenFailure(error.message));
  }
};

export default chickenSlice.reducer;
