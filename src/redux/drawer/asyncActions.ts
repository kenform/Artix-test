import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { typeActionsData } from './types';

export const fetchActionsData = createAsyncThunk<typeActionsData[]>('drawer/fetchActionsStatus', async () => {
	const { data } = await axios.get(`./api/actions.json`);
	return data;
});




