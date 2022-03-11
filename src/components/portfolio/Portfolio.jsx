import './portfolio.scss';
import { useState } from 'react';
import {
	AddShoppingCart,
	AutoAwesome,
	Restaurant,
	Login,
	Today,
	ContactSupport,
	ArrowBackIos,
	ArrowForwardIos,
} from '@mui/icons-material';

function Portfolio() {
	const [slide, setSlide] = useState(1);
	const data = [
		{
			icon: AddShoppingCart,
			title: 'eCommerce Website',
			descr:
				'Fully operational ecommerce website built with Commerce.js. Featuring MaterialUI interface and stripe for card transaction. Scalable for bigger platforms, user friendly.',
			url: 'https://chezxiaotian.netlify.app/',
			img: 'assets/ecommerce.png',
			kw: 'Keywords: React Libraries, Commerce.js, eCommerce Functionality',
			id: 1,
		},
		{
			icon: AutoAwesome,
			title: 'Brochure Website',
			descr:
				'Appealing, engaging and converting landing page to showcase your business, spectacular front-end for better exposure.',
			url: 'https://xiaotianagency.netlify.app/',
			img: 'assets/brochure.png',
			kw: 'Keywords: React Router, Front End, Landing Page Design',
			id: 2,
		},
		{
			icon: Restaurant,
			title: 'Recipe Website',
			descr:
				'Recipe generated from third-party API Edamam, able to search the database of 2.3 million recipes based on their appropriateness to over 200+ chronic conditions.',
			url: 'https://xiaotianrecipes.netlify.app',
			img: 'assets/recipe.png',
			kw: 'Keywords: API Consuming, Front End, React Libraries',
			id: 3,
		},
		{
			icon: Login,
			title: 'User Login Simulation',
			descr:
				'Configuring the UI to simulate the user log in process. The form authentication is a one-time procedure. User information can be generated from API in real implementation.',
			url: 'https://xiaotianloginform.netlify.app',
			img: 'assets/loginform.png',
			kw: 'Keywords: User Authentication, Login Form, Front End',
			id: 4,
		},
		{
			icon: Today,
			title: 'To-do List',
			descr: 'Easy to use CRUD (Create-Read-Update-Delete) web application.',
			url: 'https://xiaotiantodo.netlify.app',
			img: 'assets/todo.png',
			kw: 'CRUD Web Application, Manipulating Data Structures, Application Functionality',
			id: 5,
		},
		{
			icon: ContactSupport,
			title: 'Quiz Website',
			descr:
				'Random trivia questions generated from a database containing hundreds of thousands questions and answers about science, literature and other fascinating topics. Aesthetically pleasing.',
			url: 'https://xiaotianquiz.netlify.app',
			img: 'assets/quiz.png',
			kw: 'API Consuming, Front End, React Libraries',
			id: 6,
		},
	];

	return (
		<div className='portfolio' id='portfolio'>
			<a href={`#${slide}`} className='arrow left-arr'>
				<ArrowBackIos
					className='arr-icon'
					onClick={() => {
						setSlide(slide > 1 ? slide - 1 : 6);
					}}
				></ArrowBackIos>
			</a>
			<a href={`#${slide}`} className='arrow right-arr'>
				<ArrowForwardIos
					className='arr-icon'
					onClick={() => {
						setSlide(slide < 6 ? slide + 1 : 1);
					}}
				></ArrowForwardIos>
			</a>
			<div className='container'>
				{data.map((d) => {
					return (
						<div className='item' id={d.id} key={d.id}>
							<a
								className='link'
								href={d.url}
								target='_blank'
								rel='noopener noreferrer'
							>
								<div className='item-wrapper'>
									<div className='left'>
										<div className='icon-wrapper'>
											<d.icon className='icon'></d.icon>
										</div>
										<h1>{d.title}</h1>
										<p>{d.descr}</p>
									</div>
									<div className='right'>
										<h2 className='keywords'>{d.kw}</h2>
										<img src={d.img} alt={d.title} />
									</div>
								</div>
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Portfolio;
