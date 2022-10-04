import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/Auth/authSlice'
import formReducer from '../features/HostForm/formSlice'

export const store = configureStore({
  reducer: {
      auth:authReducer ,
      forms:formReducer

  },
});
