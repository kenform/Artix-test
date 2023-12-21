import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button, { ButtonProps } from '@mui/material/Button';
import PanelTextField from '../ui/Inputs/PanelTextField';
import PanelSelectField from '../ui/Inputs/PanelSelectField';

import PanelColorPicker from '../PanelColorPicker';
import PanelButton from '../ui/Button';
import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import { drawerDataSelector } from '../../redux/drawer/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { panelDataSelector } from '../../redux/panel/selectors';

import { addItem, setItems } from '../../redux/panel/slice';
import { setActions, setColor } from '../../redux/drawer/slice';
import { IDrawerSliceState } from '../../redux/drawer/types';

type Anchor = 'right';

export default function PanelDrawer() {
	const dispatch = useDispatch();
	const { actions, color,select,name } = useSelector(drawerDataSelector);
	const { items, status } = useSelector(panelDataSelector);

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

	const onClickAdd = () => {
		const item:IDrawerSliceState = {
			// props
			color,
			select,
			name,
		};
		dispatch(addItem(item));
	};
	const list = (anchor: Anchor) => (
		<Box sx={{ width: 480, paddingLeft: '33px' }} role='presentation'>
			<div className='main-block__suptitle'>
				{/* Сделать условие для отображения правильного заголовка редактирование и создание клавиши */}
				<h5>Создание клавиши</h5>
			</div>

			<PanelTextField text='Название' width='400px'  />
			<PanelSelectField text='Действие' width='400px' defaultValue={'2'} array={actions} />
			<PanelTextField text='Цвет' width='200px' defaultValue={color} value={color} />
			<PanelColorPicker />

			{/* onClick={onClickAdd} */}
			<Stack spacing={2} mt={3} mb={3} direction='row'>
				<PanelButton onClick={onClickAdd} modifier='blue' text='Сохранить' />
				<PanelButton modifier='outline' text='Отменить' />
			</Stack>
		</Box>
	);

	useEffect(() => {
		if (status === 'success') {
			dispatch(setItems(items));
			dispatch(setActions(actions));
			dispatch(setColor(color));
			// const ActionsValues = Object.values(actions);

			// const itemsActionsCode = actionPanelItems.map((element) => Object.values(element)[1]);

			// console.log(actions)
			// console.log(ActionsValues);
		}
	}, [actions, items, color]);

	return (
		<div>
			{status === 'success' &&
				(['right'] as const).map((anchor) => (
					<React.Fragment key={anchor}>
						<DrawerButton onClick={toggleDrawer(anchor, true)}>
							<PanelButton modifier='purple' text='Добавить клавишу' />
						</DrawerButton>
						<Drawer
							ModalProps={{ disableScrollLock: true }}
							anchor={anchor}
							open={state[anchor]}
							onClose={toggleDrawer(anchor, false)}
						>
							{list(anchor)}
						</Drawer>
						<PanelButton modifier='purple' text='Очистить панель' />
					</React.Fragment>
				))}
		</div>
	);
}

