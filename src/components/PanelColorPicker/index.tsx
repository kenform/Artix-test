import { useCallback, useEffect, useState } from 'react';
import ColorPicker from 'react-best-gradient-color-picker';
import { useAppDispatch } from '../../redux/store';
import debounce from 'lodash.debounce';
import { setColor } from '../../redux/drawer/slice';

export default function PanelColorPicker() {
	const dispatch = useAppDispatch();

	const updateSearchValue = useCallback(
		debounce((str: string) => {
			dispatch(setColor(str));
		}, 600),
		[],
	);
	const [stateColor, setStateColor] = useState('');

	useEffect(() => {
		updateSearchValue(stateColor);
	}, [stateColor]);

	return <ColorPicker value={stateColor} hideControls onChange={setStateColor} />;
}
