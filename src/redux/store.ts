import { configureStore } from '@reduxjs/toolkit';
import panel from './panel/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
	reducer: {
		panel,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
