import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { purple,blue } from '@mui/material/colors';

type typeButtonProps = {
	modifier: string;
	text: string;
};

const PurpleButton = styled(Button)<ButtonProps>(({ theme }) => ({
	color: theme.palette.getContrastText(purple[500]),
	backgroundColor: purple[500],
	borderRadius:'4px',
	'&:hover': {
		backgroundColor: purple[700],
	},
}));
const BlueButton = styled(Button)<ButtonProps>(({ theme }) => ({
	color: theme.palette.getContrastText(blue[900]),
	backgroundColor: blue[900],
	borderRadius:'4px',
	'&:hover': {
		backgroundColor: blue[700],
	},
}));
const BlueOutlinedButton = styled(Button)<ButtonProps>(({ theme }) => ({
		color:blue[900],
  backgroundColor: theme.palette.background.paper,
	outline:"#2196F380",
	'&:hover': {
		backgroundColor: blue[50],
	},
}));

// {`button ${modifier}`}
export default function PanelButton({ modifier, text }: typeButtonProps) {
	return (
			modifier === "purple" && <PurpleButton size="large" variant='contained'>{text}</PurpleButton> ||
			modifier === "blue" && <BlueButton size="large" variant='contained'>{text}</BlueButton>||
			modifier === "outline" && <BlueOutlinedButton size="large" variant='outlined'>{text}</BlueOutlinedButton>
	
	)
}
