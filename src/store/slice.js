import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  defaultValue: "0",
  currentValue: "0",
  operation: null,
  value1: 0,
  value2: 0,
  isCalculatingStart: false,
  isPrevOperationEqual: false,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    setOperation: (state, action) => {
      state.operation = action.payload;
    },
    setCalculatingStart: (state, action) => {
      state.isCalculatingStart = action.payload;
    },
    setPrevOperationEqual: (state, action) => {
      state.isPrevOperationEqual = action.payload;
    },
    setValue1: (state, action) => {
      state.value1 = action.payload;
    },
    setValue2: (state, action) => {
      state.value2 = action.payload;
    },
    editCurrentValue: (state, action) => {
      if (state.isCalculatingStart) {
        state.currentValue = action.payload;
        state.isCalculatingStart = false;
      } else {
        state.currentValue =
          state.currentValue === state.defaultValue
            ? action.payload
            : state.currentValue.concat(action.payload);
      }
    },
    setCurrentValue: (state, action) => {
      state.currentValue = action.payload;
    },
    eraseValue: (state) => {
      state.currentValue =
        state.currentValue.length > 1
          ? state.currentValue.slice(0, -1)
          : state.defaultValue;
    },
    cleanValue: (state) => {
      state.currentValue = state.defaultValue;
      state.operation = null;
      state.value1 = 0;
      state.value2 = 0;
    },
  },
});

export const {
  editCurrentValue,
  setCurrentValue,
  setOperation,
  setCalculatingStart,
  setPrevOperationEqual,
  setValue1,
  setValue2,
  setSign,
  eraseValue,
  cleanValue,
} = calculatorSlice.actions;

export const Reducer = calculatorSlice.reducer;
