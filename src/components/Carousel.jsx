import React, { useState, useEffect } from 'react';
import img1 from '../assets/carousel/carousel-img-1.webp';
import img2 from '../assets/carousel/carousel-img-2.webp';
import img3 from '../assets/carousel/carousel-img-3.webp';

export default function Carousel() {
	const styles = [
		{ display: 'inline', left: '50%' },
		{ display: 'none', left: '200%' },
		{ display: 'inline', left: '-100%' },
	];

	const [index, setIndex] = useState(0);

	

	let images = [
		<img
			src={img1}
			style={index === 0 ? { opacity: 1 } : { opacity: 0 }}
			key={0}
		/>,
		<img
			src={img2}
			style={index === 1 ? { opacity: 1 } : { opacity: 0 }}
			key={1}
		/>,
		<img
			src={img3}
			style={index === 2 ? { opacity: 1 } : { opacity: 0 }}
			key={2}
		/>,
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 5000);

		return () => {
			console.log(`clearing interval`);
			clearInterval(interval);
		};
	}, []);

	// TODO add arrow buttons
	return (
		<div className='carousel'>
			{images.map((img) => img)}
		</div>
	);
}
