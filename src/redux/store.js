import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greeting/greetingReducer';

export default configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});
