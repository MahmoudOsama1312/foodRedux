import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  seafood: [],
  loading: false,
  error: null,
};

const seafoodSlice = createSlice({  // el name hena bta3 el Slice , malosh 3elaka bel Store.js
  name: 'seafood',
  initialState,
  reducers: {
    fetchSeafoodStart(state) {
      state.loading = true;
    },
    fetchSeafoodSuccess(state, action) {
      state.loading = false;
      state.seafood = action.payload;
    },
    fetchSeafoodFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchSeafoodStart, fetchSeafoodSuccess, fetchSeafoodFailure } =
  seafoodSlice.actions;

export const fetchSeafood = () => async (dispatch) => {
  dispatch(fetchSeafoodStart());

  try {
    const response = await axios.get(
      'https://forkify-api.herokuapp.com/api/search?q=seafood'
    );
    dispatch(fetchSeafoodSuccess(response.data.recipes));
  } catch (error) {
    dispatch(fetchSeafoodFailure(error.message));
  }
};

export default seafoodSlice.reducer;
