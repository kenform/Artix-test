import TextField from '@mui/material/TextField';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { setName } from '../../../../redux/drawer/slice';
import { useCallback } from 'react';

type typeTextFieldProps = {
	text: string,
	width: string,
	defaultValue?: string,
	value?:string,

}

export default function PanelTextField({text,width,defaultValue,value}:typeTextFieldProps) {
	const dispatch = useDispatch();
	const updateSearchValue = useCallback(
		debounce((str: string) => {
			dispatch(setName(str));
		}, 300),
		[],
	);

	const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		updateSearchValue(event.target.value);
	};
	return (
			<TextField
				id='outlined-basic'
				size="small"
				label={text}
				variant='outlined'
				defaultValue={defaultValue}
				margin='normal'
				onChange={onChangeInput}
				sx={{
					'& > :not(style)': { width: `${width}` },
				}}
				value={value}
			/>


	);
}
