export type typeActionsData = {
	actionCode: number;
	actionName: string;
}[];

export enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}


export interface IDrawerSliceState {
	actions: typeActionsData[];
	status: Status;
	color: string;
}
