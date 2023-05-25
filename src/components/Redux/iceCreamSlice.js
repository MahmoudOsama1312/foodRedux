import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  icecream: [],
  loading: false,
  error: null,
};

const iceCreamSlice = createSlice({  // el name hena bta3 el Slice , malosh 3elaka bel Store.js
  name: 'icecream',
  initialState,
  reducers: {
    fetchIceCreamStart(state) {
      state.loading = true;
    },
    fetchIceCreamSuccess(state, action) {
      state.loading = false;
      state.icecream = action.payload;
    },
    fetchIceCreamFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchIceCreamStart, fetchIceCreamSuccess, fetchIceCreamFailure } =
  iceCreamSlice.actions;

export const fetchIceCream = () => async (dispatch) => {
  dispatch(fetchIceCreamStart());

  try {
    const response = await axios.get(
      'https://forkify-api.herokuapp.com/api/search?q=ice cream'
    );
    dispatch(fetchIceCreamSuccess(response.data.recipes));
  } catch (error) {
    dispatch(fetchIceCreamFailure(error.message));
  }
};

export default iceCreamSlice.reducer;
