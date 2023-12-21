import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {fetchContextsData } from './asyncActions';
import { IContextsSliceState, Status, typeContextData } from './types';

 const initialState: IContextsSliceState = {
	contexts: [],
	status: Status.LOADING,
};

export const contextsSlice = createSlice({
	name: 'context',
	initialState,
	reducers: {
		setContexts(state, action: PayloadAction<typeContextData[]>) {
			state.contexts = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchContextsData.pending, (state) => {
				state.status = Status.LOADING;
			})

			.addCase(fetchContextsData.fulfilled, (state, action) => {
				state.contexts = action.payload;
				state.status = Status.SUCCESS;
			})

			.addCase(fetchContextsData.rejected, (state) => {
				state.status = Status.ERROR;
				state.contexts = [];
			});
	},
});

export const { setContexts } = contextsSlice.actions;

export default contextsSlice.reducer;
