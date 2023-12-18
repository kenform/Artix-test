import { styled } from '@mui/material/styles';
import Button from '../ui/Button';

export default function Panel() {
	return (
		<div className='panel'>
			<div className='panel__content'>
				<div className='panel__body'>
          <Button text="Выход" modifier='blue' />
        </div>
			</div>
		</div>
	)
}
