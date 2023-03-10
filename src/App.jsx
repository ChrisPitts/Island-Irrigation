import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import './css/App.scss';

function App()
{
	
	return (
		<>
			<header><Nav /></header>
			<main>
				<Hero />
				<About />
				<Services />
				<Contact />
			</main>
		</>
	);
}

export default App;
