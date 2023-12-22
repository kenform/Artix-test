import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPanelSliceState, Status, typeInitialStateForm, typeLayouts } from './types';

import { fetchInitialStateData } from './asyncActions';
import { IDrawerSliceState } from '../drawer/types';

const initialState: IPanelSliceState = {
	items: [],
	layouts: [],
	status: Status.LOADING,
	test:[]
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
				// state.items.push({ ...action.payload });
			state.test.push({ ...action.payload });
		},

		removeItem(state, action: PayloadAction<typeInitialStateForm[]>) {
				const findItem = state.test.find((obj) => obj.code === action.payload);
				if (findItem) {
					state.test = state.test.filter((obj) => obj.code !== action.payload);
				}
		},

		clearItems(state) {
			state.test = [];
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

export const { setItems, setLayouts, addItem, clearItems, removeItem } = panelSlice.actions;

export default panelSlice.reducer;
