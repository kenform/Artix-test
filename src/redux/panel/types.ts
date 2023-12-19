export type typeInitialStateForm = {
	code: number;
	contextCode: number;
	page: number;
	rowCount: number;
	columnCount: number;
} & typeActionPanelItems;

export type typeActionPanelItems = {
	actionPanelItems: {
		code: number;
		actionCode: number;
		row: number;
		column: number;
		rowSpan: number;
		columnSpan: number;
		color: string;
		name: string;
	}[];
};


export enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}

export interface IPanelSliceState {
	items: typeInitialStateForm[];
	status: Status;
}
