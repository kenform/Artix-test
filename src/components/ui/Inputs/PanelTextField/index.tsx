import TextField from '@mui/material/TextField';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { setName } from '../../../../redux/drawer/slice';
import { useCallback, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

type typeTextFieldProps = {
	text: string;
	width: string;
	defaultValue?: string;
	value?: string;
	typeField?:string;
};

interface IFormInput {
	value: number;
}
export default function PanelTextField({ text, width, defaultValue, value,typeField }: typeTextFieldProps) {
	const {
		register,
		formState: { errors },
	} = useForm<IFormInput>({ mode: 'onChange' });

	const textField = useRef<HTMLDivElement>(null);
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
			ref={textField}
			{...register('value', {valueAsNumber: true, })}
			id='outlined-basic'
			size='small'
			label={text}
			type={typeField}
			variant='outlined'
			defaultValue={defaultValue}
			margin='normal'
			onChange={onChangeInput}
			sx={{
				'& > :not(style)': { width: `${width}` },
			}}
			value={value}
		>
			{errors.value && (
				<div style={{ color: 'red', marginTop: '-10px' }}>{errors.value.message}</div>
			)}
		</TextField>
	);
}
