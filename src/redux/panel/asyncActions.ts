import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { typeInitialStateForm } from './types';

export const fetchInitialStateData = createAsyncThunk<typeInitialStateForm[]>(
	'panel/fetchPanelStatus',
	async () => {
		const { data } = await axios.get(`./api/action-panel.json`);
		
		return data;
	},
);


