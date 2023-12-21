
type typePanelTouchButton = {
	text: string;
};



export default function PanelTouchButton({text}:typePanelTouchButton) {
	return (
		<>

			<div className='touch__button-icon_drag'>
					<img src='img/icons/drag.svg' alt='' />
				</div>

				<div className='touch__button-text'>{text}</div>
				<div className='touch__button-icon_remove'>
					<img src='img/icons/remove.svg' alt='' />
				</div>
				<div className='touch__button-icon_resize'>
					<img src='img/icons/resize.svg' alt='' />
				</div>
		</>
	);
}
