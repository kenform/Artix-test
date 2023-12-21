import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDrawerSliceState, Status, typeActionsData } from './types';

import { fetchActionsData } from './asyncActions';

const initialState: IDrawerSliceState = {
	actions: [],
	color: '',
	select:'',
	name:'',
	status: Status.LOADING,
};

export const drawerSlice = createSlice({
	name: 'drawer',
	initialState,
	reducers: {
		setActions(state, action: PayloadAction<typeActionsData[]>) {
			state.actions = action.payload;
		},
		setColor(state, action: PayloadAction<string>) {
			state.color = action.payload;
		},
		setSelectText(state, action: PayloadAction<string>) {
			state.select = action.payload;
		},
		setName(state, action: PayloadAction<string>) {
			state.name = action.payload;
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

export const { setActions, setColor, setSelectText, setName } = drawerSlice.actions;

export default drawerSlice.reducer;
