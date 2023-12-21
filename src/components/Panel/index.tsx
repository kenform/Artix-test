import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';

import { useDispatch, useSelector } from 'react-redux';
import { drawerDataSelector } from '../../redux/drawer/selectors';
import { setLayouts, setItems } from '../../redux/panel/slice';
import { setActions, setColor } from '../../redux/drawer/slice';

import { panelDataSelector } from '../../redux/panel/selectors';
import PanelTouchButton from '../ui/TouchButton';
import { useEffect, useMemo } from 'react';
import { typeActionPanelItems, typeLayouts } from '../../redux/panel/types';

export default function Panel() {
	const ResponsiveReactGridLayout = useMemo(() => WidthProvider(Responsive), []);
	const dispatch = useDispatch();
	const { actions, color } = useSelector(drawerDataSelector);
	const { items, status, layouts, test } = useSelector(panelDataSelector);

	const actionPanelItems = items.actionPanelItems;

	// console.log(ArrayActions);
	// console.log(ArrayActions[0].actionName);

	useEffect(() => {
		if (status === 'success') {
			const layouts = actionPanelItems.map((element: typeLayouts) => ({
				i: String(element.code),
				x: element.row,
				y: element.column,
				w: element.columnSpan,
				h: element.rowSpan,
			}));
			dispatch(setItems(items));
			dispatch(setActions(actions));
			dispatch(setLayouts(layouts));
			dispatch(setColor(color));
			// const ActionsValues = Object.values(actions);

			// const itemsActionsCode = actionPanelItems.map((element) => Object.values(element)[1]);

			// console.log(actions)
			// console.log(ActionsValues);
		}
	}, [actionPanelItems, actions, items, color]);

	return (
		<div className='panel'>
			<div className='panel__content'>
				<div className='panel__body'>
					{status === 'success' && (
						<ResponsiveReactGridLayout
							compactType='horizontal'
							autoSize
							className='layout'
							layouts={{ lg: layouts }}
							onResize={() => {}}
							cols={{ lg: 6, md: 3, sm: 3, xs: 4, xxs: 3 }}
						>
							{actionPanelItems.map((element: typeActionPanelItems) => (
								// value every element actionCode (15 example)
								// console.log(element.actionCode),
								// console.log(Object.values(element)[1]),
								// console.log(actions[Object.values(element)[0]]),

								// console.log(element.actionCode),

								<div
									key={element.code}
									className='touch__button'
									style={{ backgroundColor: element.color }}
								>
									<PanelTouchButton key={element.code} text={element.name} />
								</div>
							))}
						</ResponsiveReactGridLayout>
					)}
				</div>
			</div>
		</div>
	);
}
