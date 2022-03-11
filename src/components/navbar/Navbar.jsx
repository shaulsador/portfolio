import './navbar.scss';
import { ContactPhone, ContactMail } from '@mui/icons-material';

function Navbar({ open, setOpen }) {
	return (
		<div className={`navbar ${open ? 'open' : ''}`}>
			<div className='wrapper'>
				<div className='left'>
					<a href='#intro' className='logo'>
						Xiaotian
					</a>
					<div className='container'>
						<ContactPhone className='icons' />
						<span>(819)-592-8461</span>
					</div>
					<div className='container'>
						<ContactMail className='icons' />
						<span>shausado@outlook.com</span>
					</div>
				</div>
				<div className='right'>
					<div
						className='hamberger'
						onClick={() => {
							setOpen(!open);
							// console.log(open);
						}}
					>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
