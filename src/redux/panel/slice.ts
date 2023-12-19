import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPanelSliceState, Status, typeInitialStateForm } from './types';

import { fetchInitialStateData } from './asyncActions';

const initialState: IPanelSliceState = {
	items: [],
	status: Status.LOADING,
};

export const panelSlice = createSlice({
	name: 'panel',
	initialState,
	reducers: {
		setItems(state, action: PayloadAction<typeInitialStateForm[]>) {
			state.items = action.payload;
		},
		
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchInitialStateData.pending, (state) => {
				state.status = Status.LOADING;
			})

			.addCase(fetchInitialStateData.fulfilled, (state, action) => {
				state.items = action.payload;
				state.status = Status.SUCCESS;
			})

			.addCase(fetchInitialStateData.rejected, (state) => {
				state.status = Status.ERROR;
				state.items = [];
			});
	},
});

export const { setItems } = panelSlice.actions;

export default panelSlice.reducer;
