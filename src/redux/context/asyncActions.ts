import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { typeContextData } from './types';

export const fetchContextsData = createAsyncThunk<typeContextData[]>(
	'context/fetchContextsStatus',
	async () => {
		const { data } = await axios.get(`./api/context.json`);
		return data;
	},
);




