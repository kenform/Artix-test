import { IDrawerSliceState } from "../drawer/types";

export type typeInitialStateForm = {
	code: number;
	contextCode: number;
	page: number;
	rowCount: number;
	columnCount: number;
	actionPanelItems: typeActionPanelItems[];
} 

export type typeLayouts = {
	code: number;
	row: number;
	column: number;
	rowSpan: number;
	columnSpan: number;
	i: number;
	x: number;
	y: number;
	w: number;
	h: number;
};
export type typeActionPanelItems = {
		code: number;
		actionCode: number;
		row: number;
		column: number;
		rowSpan: number;
		columnSpan: number;
		color: string;
		name: string;
};


export enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}

export interface IPanelSliceState {
	items: typeInitialStateForm[];
	layouts: typeLayouts[];
	test: IDrawerSliceState[];
	status: Status;
}
