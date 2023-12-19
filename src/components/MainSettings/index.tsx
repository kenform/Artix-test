import Box from '@mui/material/Box';
import PanelTextField from '../ui/Inputs/PanelTextField';
import PanelSelectField from '../ui/Inputs/PanelSelectField';

import { useSelector } from 'react-redux';

import { panelDataSelector } from '../../redux/panel/selectors';
import { contextsDataSelector } from '../../redux/context/selectors';

const data = [
	{
		value: '1',
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
	const { items, status } = useSelector(panelDataSelector);
	// пробовал брать из редакса состояние context и передать его как массив в PanelSelectField
	// но не разобрался как типизировать передаваемые пропсы или как подстроить под все случаи пропсы для  array в PanelSelectField. Пока оставил заглушку массив data

	const { contexts } = useSelector(contextsDataSelector);
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
					<PanelTextField text='Код' width='200px' defaultValue={items.code} />
					<PanelTextField text='Страница' width='100%' defaultValue={items.page} />

					<PanelSelectField
						text='Контекст'
						width='100%'
						defaultValue={'1'}
						array={data}
						icon='true'
					/>
				</Box>
			)}
		</>
	);
}
