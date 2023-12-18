import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
	return (
		<Box >
			<AppBar position='static'>
				<Toolbar
					sx={{
						background: '#0D47A1',
					}}
				>
					<IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						<h6>Тестовое задание</h6>
					</Typography>
					<img width={100} height={45} src='img/logo.svg' alt='' />
				</Toolbar>
			</AppBar>
		</Box>
	);
}
