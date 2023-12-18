import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { typeContext, typeInitialStateForm } from './types';

export const fetchInitialStateData = createAsyncThunk<typeInitialStateForm[]>(
	'panel/fetchPanelStatus',
	async () => {
		const { data } = await axios.get(`./api/action-panel.json`);
		return data;
	},
);

export const fetchOutputData = createAsyncThunk<typeContext[]>('panel/fetchPanelStatus', async () => {
	const { data } = await axios.get(`./api/context.json`);
	return data;
});

// Необходимо оптимизировать функции

