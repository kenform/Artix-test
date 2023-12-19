export type typeContextData = {
	contextCode: number;
	contextName: string;
}[];
export enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}

export interface IContextsSliceState {
	contexts: typeContextData[];
	status: Status;
}
