import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { typeActionPanelItems } from '../../../../redux/panel/types';
// import CloseIcon from '@mui/icons-material/Close';
// import { ListItemIcon } from '@mui/material';

// type typeTextFieldProps = {
// 	text: string;
// 	width: string;
// 	defaultValue: number;
// }& typeActionPanelItems;

type typeTextFieldProps = {
	text: string;
	width: string;
	defaultValue: number;
	actionPanelItems:{
		value:string;
		label:string;
	}[];
}


export default function PanelTextField({ text, width, defaultValue, actionPanelItems }: typeTextFieldProps) {
	return (

		<TextField
			select
			id='outlined-basic'
			label={text}
			variant='outlined'
			defaultValue={defaultValue}
			margin='normal'
			size="small"
			sx={{
				'& > :not(style)': { width: `${width}` },
			}}
		>
			{actionPanelItems.map((element) => (
				
				<MenuItem key={element.code} value={element.value}>
					{element.label}	
				</MenuItem>
			))}
		
		</TextField>

	);
}
