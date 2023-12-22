import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { typeActionsData } from '../../../../redux/drawer/types';
import { typeContextData } from '../../../../redux/context/types';

import { InputLabel } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import { ListItemIcon } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { drawerDataSelector } from '../../../../redux/drawer/selectors';
// import { setSelectText } from '../../../../redux/drawer/slice';

type typeTextFieldProps = {
	text: string;
	width: string;
	defaultValue?: string;
	array: typeActionsData | typeContextData;
	icon?: string;
};

export default function PanelTextField({
	text,
	width,
	defaultValue,
	array,
	icon,
}: typeTextFieldProps) {
	const [state, setState] = useState(defaultValue);
	const dispatch = useDispatch();
	const { actions } = useSelector(drawerDataSelector);
	// {},

	const handleChange = (event: SelectChangeEvent) => {
		setState(event.target.value);
		const num = event.target.value;
		
		const arta = actions.actionCode;
		console.log(arta);

		// dispatch(setSelectText(actions[event.target.value].actionName));
	};

	return (
		<>
			<FormControl
				sx={{
					'& > :not(style)': { width: `${width}` },
				}}
				margin='normal'
			>
				<InputLabel id='demo-simple-select-filled-label'>{text}</InputLabel>
				<Select
					margin='dense'
					label={text}
					id='demo-simple-select-filled'
					value={state}
					onChange={handleChange}
					size='small'
					variant='outlined'
					defaultValue={defaultValue}
				>
					{array.map((element) => (
						<MenuItem
							sx={{
								paddingLeft: `5px`,
							}}
							key={Object.values(element)[0]}
							value={Object.values(element)[0]}
						>
							{Object.values(element)[1]}

							{icon && (
								<ListItemIcon
									sx={{
										position: 'absolute',
										right: `10px`,
									}}
								>
									<CloseIcon />
								</ListItemIcon>
							)}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</>
	);
}
