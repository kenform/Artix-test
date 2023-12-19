import Box from '@mui/material/Box';

import { panelDataSelector } from '../../redux/panel/selectors';
import { useSelector } from 'react-redux';
import PanelSelectField from '../ui/Inputs/PanelSelectField';

const dataRows = [
	{
		value: '1',
		label: '1',
	},
	{
		value: '2',
		label: '2',
	},
	{
		value: '3',
		label: '3',
	},
	{
		value: '4',
		label: '4',
	},
];

const dataColumns = [
	{
		value: '1',
		label: '1',
	},
	{
		value: '2',
		label: '2',
	},
	{
		value: '3',
		label: '3',
	},
	{
		value: '4',
		label: '4',
	},
	{
		value: '5',
		label: '5',
	},
	{
		value: '6',
		label: '6',
	},
];

export default function PanelSetting() {
	const { items, status } = useSelector(panelDataSelector);

	return (
		<>
			{status === 'success' && (
				<Box
					component='form'
					sx={{
						display: 'flex',
						'& > :not(style)': { mr: 1 },
					}}
					noValidate
					autoComplete='off'
				>
					<PanelSelectField
						text='Количество строк'
						width='200px'
						defaultValue={'3'}
						array={dataRows}
			
					/>

					<PanelSelectField
						text='Количество столбцов'
						width='200px'
						defaultValue={'6'}
						array={dataColumns}
	
					/>
				
				</Box>
				
			)}
		</>
	);
}
