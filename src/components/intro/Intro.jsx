import './intro.scss';
import { KeyboardArrowDown } from '@mui/icons-material';
import { init } from 'ityped';
import { useRef, useEffect } from 'react';

function Intro() {
	const spanRef = useRef();
	useEffect(() => {
		init(spanRef.current, {
			showCursor: true,
			strings: [
				`I'm here to help!`,
				`Je suis là pour aider!`,
				`¡Estoy aqui para ayudar!`,
			],
			backSpeed: 40,
			backDelay: 1500,
		});
	}, []);

	return (
		<div className='intro' id='intro'>
			<div className='left'>
				<div className='wrapper'>
					<div className='icon-links'></div>
					<h2>Hello, I am</h2>
					<h1>Xiaotian He</h1>
					<h3>
						<span ref={spanRef}></span>
					</h3>
				</div>
				<a href='#portfolio'>
					<KeyboardArrowDown className='arrow' />
				</a>
			</div>
			<div className='right'>
				<div className='background'>
					<h1>DEFINE</h1>
					<h1>DESIGN</h1>
					<h1>DELIVER</h1>
				</div>
				<img src='assets\person.png' alt='person' />
			</div>
		</div>
	);
}

export default Intro;
