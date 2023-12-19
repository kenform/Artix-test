import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { typeActionsData } from '../../../../redux/drawer/types';
import { InputLabel } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import { ListItemIcon } from '@mui/material';

type typeTextFieldProps = {
	text: string;
	width: string;
	defaultValue: string;
	array: typeActionsData;
	icon?:string;
};

export default function PanelTextField({ text, width, defaultValue, array,icon }: typeTextFieldProps) {
	const [age, setAge] = useState(defaultValue);
	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value);
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
					value={age}
					onChange={handleChange}
					size='small'
					variant='outlined'
					defaultValue={defaultValue}
				>
					{array.map((element) => (
						<MenuItem
							sx={{
								paddingLeft: `10px`,
							}}
							key={Object.values(element)[0]}
							value={Object.values(element)[0]}
						>
							{Object.values(element)[1]}
							{icon && <ListItemIcon sx={{
								position:'absolute',	
								right: `10px`,
							}}>
								<CloseIcon/>
							</ListItemIcon> }
							
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</>
	);
}
