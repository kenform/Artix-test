import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDrawerSliceState, Status, typeActionsData } from './types';

import { fetchActionsData } from './asyncActions';

const initialState: IDrawerSliceState = {
	actions: [],
	color: '',
	status: Status.LOADING,
};

export const drawerSlice = createSlice({
	name: 'drawer',
	initialState,
	reducers: {
		setItems(state, action: PayloadAction<typeActionsData[]>) {
			state.actions = action.payload;
		},
		setColor(state, action: PayloadAction<string>) {
			state.color = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchActionsData.pending, (state) => {
				state.status = Status.LOADING;
			})

			.addCase(fetchActionsData.fulfilled, (state, action) => {
				state.actions = action.payload;
				state.status = Status.SUCCESS;
			})

			.addCase(fetchActionsData.rejected, (state) => {
				state.status = Status.ERROR;
				state.actions = [];
			});
	},
});

export const { setItems, setColor } = drawerSlice.actions;

export default drawerSlice.reducer;
