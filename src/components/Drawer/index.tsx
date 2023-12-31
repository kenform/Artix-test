import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button, { ButtonProps } from '@mui/material/Button';
import PanelTextField from '../ui/Inputs/PanelTextField';
import PanelSelectField from '../ui/Inputs/PanelSelectField';
import Buttons from '../PanelSetting/Buttons';
import PanelColorPicker from '../PanelColorPicker';
import PanelButton from '../ui/Button';
import styled from '@emotion/styled';

import { drawerDataSelector } from '../../redux/drawer/selectors';
import { useSelector } from 'react-redux';

const data = [
	{
		value: '1',
		label: 'Выход',
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

type Anchor = 'right';

export default function PanelDrawer() {
	const { color, status, actions } = useSelector(drawerDataSelector);
	const [state, setState] = React.useState({
		right: false,
	});

	const toggleDrawer =
		(anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' ||
					(event as React.KeyboardEvent).key === 'Shift')
			) {
				return;
			}

			setState({ ...state, [anchor]: open });
		};

	const DrawerButton = styled(Button)<ButtonProps>(() => ({
		marginLeft: '-8px',
	}));

	const list = (anchor: Anchor) => (
		<Box sx={{ width: 480, paddingLeft: '33px' }} role='presentation'>
			<div className='main-block__suptitle'>
				{/* Сделать условие для отображения правильного заголовка редактирование и создание клавиши */}
				<h5>Создание клавиши</h5>
			</div>

			<PanelTextField text='Название' width='400px' defaultValue={''} />

			<PanelSelectField
				text='Действие'
				width='400px'
				defaultValue={'2'}
				array={actions}
			/>

			<PanelTextField text='Цвет' width='200px' defaultValue={color} value={color} />
			<PanelColorPicker />

			<Buttons modifier='blue' modifier2='outline' text='Сохранить' text2='Отменить' />
		</Box>
	);

	return (
		<div>
			{status === 'success' &&
				(['right'] as const).map((anchor) => (
					<React.Fragment key={anchor}>
						<DrawerButton onClick={toggleDrawer(anchor, true)}>
							<PanelButton modifier='purple' text='Добавить клавишу' />
						</DrawerButton>
						<Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
							{list(anchor)}
						</Drawer>
						<PanelButton modifier='purple' text='Очистить панель' />
					</React.Fragment>
				))}
		</div>
	);
}
