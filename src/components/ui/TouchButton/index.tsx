import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import { Resizable } from 're-resizable';
import { drawerDataSelector } from '../../../redux/drawer/selectors';
import { useSelector } from 'react-redux';
type typeButtonProps = {
	modifier: string;
	text: string;
};
	// const { color, status, actions } = useSelector(drawerDataSelector);
	
const PurpleButton = styled(Button)<ButtonProps>(({ theme }) => ({
	color: theme.palette.getContrastText(purple[500]),
	backgroundColor: purple[500],
	borderRadius: '4px',
	'&:hover': {
		backgroundColor: purple[700],
	},
}));

// {`button ${modifier}`}
export default function PanelTouchButton() {
	return (
		<>
			<Resizable
			
  defaultSize={{
    width: 120,
    height: 120,
		
  }}
	className={'box'}
>
  Выход
</Resizable>
		</>
	);
}
