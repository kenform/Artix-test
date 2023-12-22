import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../../redux/panel/slice';
import { panelDataSelector } from '../../../redux/panel/selectors';

type typePanelTouchButton = {
	text: string;
	code: number;
};

export default function PanelTouchButton({ text, code }: typePanelTouchButton) {
	const dispatch = useDispatch();
	const { test } = useSelector(panelDataSelector);
	const onClicRemove = () => {
		dispatch(removeItem(code));
	};
	return (
		<>
			<div className='touch__button-icon_drag'>
				<img src='img/icons/drag.svg' alt='' />
			</div>

			<div className='touch__button-text'>{text}</div>
			<button onClick={onClicRemove} type='button' className='touch__button-icon_remove'>
				<img src='img/icons/remove.svg' alt='' />
			</button>
			<div className='touch__button-icon_resize'>
				<img src='img/icons/resize.svg' alt='' />
			</div>
		</>
	);
}
