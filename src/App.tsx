import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';

import { useEffect } from 'react';
import { useAppDispatch } from './redux/store';
import { fetchInitialStateData } from './redux/panel/asyncActions';
import { fetchActionsData } from './redux/drawer/asyncActions';
import { fetchContextsData } from './redux/context/asyncActions';

import Header from './components/Header';
import MainSettings from './components/MainSettings';
import PanelSetting from './components/PanelSetting';
import Buttons from './components/PanelSetting/Buttons';
import PanelDrawer from './components/Drawer';
import Panel from './components/Panel';

import './styles/App.scss';


function App() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchInitialStateData());
		dispatch(fetchActionsData());
		dispatch(fetchContextsData());
	}, []);

	return (
		<div className='wrapper'>
			<Header />

			<main className='__container'>
				<section className='main-block'>
					<div className='main-block__container'>
						<div className='main-block__content'>
							<div className='main-block__title'>
								<h4>Редактирование панели</h4>
							</div>
							<div className='main-block__suptitle'>
								<h5>Основные настройки</h5>
							</div>
							<MainSettings />
							<div className='main-block__suptitle'>
								<h5>Настройка панели</h5>
							</div>
							<PanelSetting />
							<PanelDrawer />

							<Panel />
							<Buttons modifier='blue' modifier2='outline' text='Сохранить' text2='Отменить' />
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
