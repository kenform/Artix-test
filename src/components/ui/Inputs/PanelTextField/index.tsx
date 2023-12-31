import TextField from '@mui/material/TextField';

type typeTextFieldProps = {
	text: string,
	width: string,
	defaultValue: string,
	value?:string,
}

export default function PanelTextField({text,width,defaultValue,value}:typeTextFieldProps) {
	return (
			<TextField
				id='outlined-basic'
				size="small"
				label={text}
				variant='outlined'
				defaultValue={defaultValue}
				margin='normal'
				sx={{
					'& > :not(style)': { width: `${width}` },
				}}
				value={value}
			/>


	);
}
