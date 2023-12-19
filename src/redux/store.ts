import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import panel from './panel/slice';
import drawer from './drawer/slice';
import contexts from './drawer/slice';

export const store = configureStore({
	reducer: {
		panel,
		drawer,
		contexts,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
