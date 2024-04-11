import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import userSlice from '../features/user/userSlice';
import themeSlice from '../features/user/themSlice';
 // Adjusted import to import reducer

const rootReducer = combineReducers({
  user: userSlice.reducer,
  theme: themeSlice.reducer // Use the imported reducer
}
)
export const store = configureStore({
  reducer: rootReducer
});
