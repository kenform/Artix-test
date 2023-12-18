import Box from '@mui/material/Box';
import PanelTextField from '../ui/Inputs/PanelTextField';
import PanelSelectField from '../ui/Inputs/PanelSelectField';

import { panelDataSelector } from '../../redux/panel/selectors';
import { useSelector } from 'react-redux';


const data = [
	{
		value: '6',
		label: 'Открытый документ',
	},
	{
		value: '2',
		label: 'item 2',
	},
	{
		value: '3',
		label: 'item 2',
	},
	{
		value: '4',
		label: 'item 2',
	},
];

export default function MainSettings() {
	const { items,status } = useSelector(panelDataSelector);
	
	return (
		<>
			{status === 'success' && (
				<Box
					component='form'
					sx={{
						display: 'flex',
						flexDirection: 'column',
					}}
					noValidate
					autoComplete='off'
				>
					
					{/* {console.log(items.actionPanelItems[0].columnSpan)} */}
					
			
					<PanelTextField text='Код' width='200px' defaultValue={items.code} /> 
					<PanelTextField text='Страница' width='100%' defaultValue={items.page} />
					{/* <PanelSelectField text='Контекст' width='100%' defaultValue={1} actionPanelItems={items.actionPanelItems} /> */}
				</Box>
			)}
		</>
	);
}
