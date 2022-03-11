import Menuitem from './Menuitem';
import './menu.scss';

function Menu({ open, setOpen }) {
	return (
		<div className={`menu ${open ? 'open' : ''}`}>
			<ul>
				<Menuitem item='intro' open={open} setOpen={setOpen} />
				<Menuitem item='portfolio' open={open} setOpen={setOpen} />
				<Menuitem item='experience' open={open} setOpen={setOpen} />
				<Menuitem item='contact' open={open} setOpen={setOpen} />
			</ul>
		</div>
	);
}

export default Menu;
