import {configureStore} from '@reduxjs/toolkit';
import main from './models/main';

export const store = configureStore({
  reducer: {
    main,
  },
});

export let AppDispatch = typeof store.dispatch;
export let RootState = typeof store.getState;