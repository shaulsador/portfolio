import './contact.scss';
import emailjs from 'emailjs-com';
import { LinkedIn, GitHub } from '@mui/icons-material';

function Contact() {
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_yfwbk4s',
				'template_n333wv2',
				e.target,
				'DR9XX_QohQc36BStR'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		// .send(
		// 	'service_yfwbk4s',
		// 	'template_6kdl52r',
		// 	e.target,
		// 	'DR9XX_QohQc36BStR'
		// )
		// .then(
		// 	function (response) {
		// 		console.log('SUCCESS!', response.status, response.text);
		// 	},
		// 	function (error) {
		// 		console.log('FAILED...', error);
		// 	}
		// );
	};
	return (
		<div className='contact' id='contact'>
			<div className='left'>
				<img
					src='https://i.etsystatic.com/8086522/r/il/ce5684/1437966029/il_fullxfull.1437966029_hzuo.jpg'
					alt='beautiful scenery'
				/>
			</div>
			<div className='right'>
				<h2>
					Contact.
					<span>
						<a
							href='https://www.linkedin.com/in/xiaotian-he-10182919a/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<LinkedIn />
						</a>
						<a
							href='https://github.com/shaulsador'
							target='_blank'
							rel='noopener noreferrer'
						>
							<GitHub />
						</a>
					</span>
				</h2>
				<form id='contact-form' onSubmit={sendEmail}>
					{/* <input type='hidden' name='contact_number' /> */}
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						name='user_name'
						id='name'
						placeholder='your name'
					/>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						name='user_email'
						id='email'
						placeholder='your@email.com'
					/>
					<label htmlFor='msg'>Message</label>
					<textarea name='message' id='msg'></textarea>
					<input className='button' type='submit' value='Send' />
				</form>
			</div>
			<h3>powered by EmailJS.com</h3>
		</div>
	);
}

export default Contact;
