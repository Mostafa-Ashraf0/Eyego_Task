import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/reducers/authSlice';
import tableReducer from '../features/reducers/tableSlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    table: tableReducer
  },
});

export default store;