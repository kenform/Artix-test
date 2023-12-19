import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { typeContextData } from './types';

export const fetchContextsData = createAsyncThunk<typeContextData[]>(
	'panel/fetchPanelStatus',
	async () => {
		const { data } = await axios.get(`./api/context.json`);
		console.log(data)
		return data;
	},
);




