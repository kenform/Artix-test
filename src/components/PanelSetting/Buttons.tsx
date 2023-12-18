import Stack from '@mui/material/Stack';
import PanelButton from '../ui/Button';

type typeButtonProps = {
	modifier: string;
	modifier2: string | '';
	text: string;
	text2: string;
};

export default function Buttons({ modifier, modifier2, text, text2 }: typeButtonProps) {
	return (
		<Stack  spacing={2} mt={3} mb={3} direction='row'>
			<PanelButton modifier={modifier} text={text} />
			<PanelButton modifier={modifier2} text={text2} />
		</Stack>
	);
}
