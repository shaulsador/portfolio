import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';
import './app.scss';
import { useState } from 'react';

function App() {
	const [open, setOpen] = useState(false);
	return (
		<div className='app'>
			<Navbar open={open} setOpen={setOpen} />
			<Menu open={open} setOpen={setOpen} />
			<div className='sections'>
				<Intro />
				<Portfolio />
				<Experience />
				<Contact />
			</div>
		</div>
	);
}

export default App;
