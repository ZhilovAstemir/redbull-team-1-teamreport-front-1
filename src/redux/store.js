import {configureStore} from '@reduxjs/toolkit';
import main from './models/main';

export const store = configureStore({
  reducer: {
    main,
  },
});
