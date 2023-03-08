import React from 'react';

export default function Contact() {
	return (
		<section id='contact'>
			<h2>Contact Us</h2>
			<form>
				<label for='name'>Name</label>
				<input type='text' name='name' />
				<label for='email'>Email</label>
				<input type='email' name='email' />
				<label for='message'>Message</label>
				<textarea name='message' />
			</form>
		</section>
	);
}
