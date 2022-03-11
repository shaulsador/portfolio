import './experience.scss';
import { School, CoPresent, Apartment } from '@mui/icons-material';

function Experience() {
	return (
		<div className='experience' id='experience'>
			<h1>Experience</h1>

			<div className='container'>
				<div className='card'>
					<a
						className='link'
						href='https://catalogue.uottawa.ca/en/graduate/master-systems-science-engineering/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<div className='card-item'>
							<div className='top'>
								<img src='assets/uOttawa.jpg' alt='uottawa campus' />
							</div>
							<div className='center'>
								<School />
								<h2>Education</h2>
							</div>
							<div className='bottom'>
								<h3>
									2015-2019
									<span>BEng, BIT</span>
								</h3>
								<h3>
									2019-2021
									<span>MSysScEng, uOttawa</span>
								</h3>
							</div>
						</div>
					</a>
				</div>
				<div className='card'>
					<a
						className='link'
						href='https://1in5initiative.ca/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<div className='card-item'>
							<div className='top'>
								<img src='assets/mental.png' alt='website snapshot' />
							</div>
							<div className='center'>
								<CoPresent />
								<h2>School Project</h2>
							</div>
							<div className='bottom'>
								<h3>
									Contributed to the front-end settings of a website for a
									wellness consulting service.
								</h3>
							</div>
						</div>
					</a>
				</div>
				<div className='card'>
					<a
						className='link'
						href='http://m.beijing.longre.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<div className='card-item'>
							<div className='top'>
								<img src='assets/bj.png' alt='uottawa campus' />
							</div>
							<div className='center'>
								<Apartment />
								<h2>Internship</h2>
							</div>
							<div className='bottom'>
								<h3>
									Internship at Beijing Longre for website development and
									maintenance.
								</h3>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Experience;
