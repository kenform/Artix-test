

export type typeActionsData = {
	actionName: string;
	actionCode: number;
}[];

export enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}


export interface IDrawerSliceState {
	actions?: typeActionsData[];
	color: string;
	select: string;
	name: string;
	status: Status;
}
