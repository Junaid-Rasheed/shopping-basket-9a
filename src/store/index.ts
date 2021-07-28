import { createSlice, configureStore } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./Store";

const basketSlice = createSlice({
  name: "basket",
  initialState: INITIAL_STATE,
  reducers: {
    add: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }

        return {
          ...item,
          added: true,
        };
      });
    },
    remove: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }

        return {
          ...item,
          added: false,
        };
      });
    },
  },
});

//store declartion
const store = configureStore({ reducer: basketSlice.reducer });

//exports
export const { add,remove } = basketSlice.actions;

export { basketSlice, store };
