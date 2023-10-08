import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PizzaBlockItem } from '../../components/PizzaBlock';
import { RootState } from '../store';
//это просто коммит

type ParamsFetch = {
  category: string;
  search: string;
  order: string;
  sortBy: string;
  currentPage: number;
};

export const fetchPizzas = createAsyncThunk<PizzaBlockItem[], ParamsFetch>('pizza/fetchPizzasStatus', async (params, thunkAPI) => {
  const { sortBy, order, category, search, currentPage } = params;
  const { data } = await axios.get<PizzaBlockItem[]>(
    `https://6474f3f57de100807b1bfd08.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
  );

  return data;
});

export const enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

interface PizzaSliceInt {
  items: PizzaBlockItem[];
  status: Status;
}

const initialState: PizzaSliceInt = {
  items: [],
  status: Status.LOADING,
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.items = [];
      state.status = Status.ERROR;
    });
  },
});

export const selectPizzaData = (state: RootState) => state.pizza;

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
