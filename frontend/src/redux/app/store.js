import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/Auth/authSlice'
import formReducer from '../features/HostForm/formSlice'
import SearchCarReducer from '../features/searchCar/searchCarslice'
import DateAndPlaceReducer from '../features/Dates/dateSlice'

export const store = configureStore({
  reducer: {
      auth:authReducer ,
      forms:formReducer,
      cars:SearchCarReducer,
      dateAndPlace:DateAndPlaceReducer
  },
});
