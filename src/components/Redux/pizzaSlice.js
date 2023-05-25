import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  pizzas: [],
  loading: false,
  error: null,
};

const pizzaSlice = createSlice({  // el name hena bta3 el Slice , malosh 3elaka bel Store.js
  name: 'pizza',
  initialState,
  reducers: {
    fetchPizzasStart(state) {
      state.loading = true;
    },
    fetchPizzasSuccess(state, action) {
      state.loading = false;
      state.pizzas = action.payload;
    },
    fetchPizzasFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPizzasStart, fetchPizzasSuccess, fetchPizzasFailure } =
  pizzaSlice.actions;

export const fetchPizzas = () => async (dispatch) => {
  dispatch(fetchPizzasStart());

  try {
    const response = await axios.get(
      'https://forkify-api.herokuapp.com/api/search?q=pizza'
    );
    dispatch(fetchPizzasSuccess(response.data.recipes));
  } catch (error) {
    dispatch(fetchPizzasFailure(error.message));
  }
};

export default pizzaSlice.reducer;
