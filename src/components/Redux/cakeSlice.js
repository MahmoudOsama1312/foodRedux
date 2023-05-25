import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cake: [],
  loading: false,
  error: null,
};

const cakeSlice = createSlice({  // el name hena bta3 el Slice , malosh 3elaka bel Store.js
  name: 'cake',
  initialState,
  reducers: {
    fetchCakeStart(state) {
      state.loading = true;
    },
    fetchCakeSuccess(state, action) {
      state.loading = false;
      state.cake = action.payload;
    },
    fetchCakeFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchCakeStart, fetchCakeSuccess, fetchCakeFailure } =
  cakeSlice.actions;

export const fetchCake = () => async (dispatch) => {
  dispatch(fetchCakeStart());

  try {
    const response = await axios.get(
      'https://forkify-api.herokuapp.com/api/search?q=cinnamon'
    );
    dispatch(fetchCakeSuccess(response.data.recipes));
  } catch (error) {
    dispatch(fetchCakeFailure(error.message));
  }
};

export default cakeSlice.reducer;
