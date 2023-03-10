import React from 'react';

export default function Nav()
{
    // TODO make navlinks change color when page is over each section
	return (
		<>
			<a href='#hero'>
				<img src='https://picsum.photos/200' alt='Logo' />
			</a>
			<nav>
				<ul>
					<li></li>
					<li>
						<a href='#about'>About</a>
					</li>
					<li>
						<a href='#services'>Services</a>
					</li>
					<li>
						<a href='#contact'>Contact</a>
					</li>
				</ul>
			</nav>
		</>
	);
}
