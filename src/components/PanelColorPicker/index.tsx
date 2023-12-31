import { useCallback, useEffect, useState } from 'react';
import ColorPicker, { useColorPicker } from 'react-best-gradient-color-picker';
import { useAppDispatch } from '../../redux/store';
import debounce from 'lodash.debounce';
import { setColor } from '../../redux/drawer/slice';

export default function PanelColorPicker() {
	const dispatch = useAppDispatch();

	const [stateColor, setStateColor] = useState('rgba(178.9692, 73.9908, 73.9908, 1)');
	const { valueToHex } = useColorPicker(stateColor, setStateColor);

	const hexString = valueToHex();
console.log(hexString)
	const updateSearchValue = useCallback(
		debounce((str: string) => {
			dispatch(setColor(str));
		}, 600),
		[],
	);


	useEffect(() => {
		updateSearchValue(hexString);
	}, [stateColor]);

	return <ColorPicker value={stateColor} hideControls onChange={setStateColor} />;
}
