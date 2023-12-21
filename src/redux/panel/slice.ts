import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPanelSliceState, Status, typeInitialStateForm, typeLayouts } from './types';

import { fetchInitialStateData } from './asyncActions';
import { IDrawerSliceState } from '../drawer/types';

const initialState: IPanelSliceState = {
	items: [],
	layouts: [],
	status: Status.LOADING,
	test:[],
};

export const panelSlice = createSlice({
	name: 'panel',
	initialState,
	reducers: {
		setItems(state, action: PayloadAction<typeInitialStateForm[]>) {
			state.items = action.payload;
		},
		setLayouts(state, action: PayloadAction<typeLayouts[]>) {
			state.layouts = action.payload;
		},

		addItem(state, action: PayloadAction<IDrawerSliceState>) {
			// console.log(...action.payload);
			state.test.push({ ...action.payload });
		},

		// changeItem(state, action: PayloadAction<typeInitialStateForm[]>) {
		// 	state.items = action.payload;
		// },

		// clearItems(state) {
		// 	state.items. = [];
		// },
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

export const { setItems, setLayouts, addItem } = panelSlice.actions;

export default panelSlice.reducer;
