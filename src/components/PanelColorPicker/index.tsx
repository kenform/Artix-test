import {useState } from 'react';
import ColorPicker from 'react-best-gradient-color-picker';


export default function PanelColorPicker() {
	const [color, setColor] = useState('rgba(255,255,255,1)');

	return <ColorPicker value={color} hideControls onChange={setColor} />;
}
