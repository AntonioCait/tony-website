import { v4 as uuidv4 } from 'uuid';

type Project = {
	id: string;
	name: string;
	link: string;
};

export const projects: Project[] = [
	{
		id: uuidv4(),
		name: 'Netflix TV Shows Page (Personal Project)',
		link: 'https://netflixpage-app.vercel.app/',
	},
	{
		id: uuidv4(),
		name: 'Movies Page (API)',
		link: 'https://moviedb-app-gamma.vercel.app/',
	},
	{
		id: uuidv4(),
		name: 'Password Generator (Personal Project)',
		link: 'https://password-g-app-seven.vercel.app/',
	},
	{
		id: uuidv4(),
		name: 'Restaurant Page (Course Project)',
		link: 'https://capstone-project-mu-five.vercel.app/',
	},
	{
		id: uuidv4(),
		name: 'Cotizador Microsip (Company Site)',
		link: 'https://cotizador.microsip.com/',
	},
	{
		id: uuidv4(),
		name: 'Music Blog (School Project)',
		link: 'https://blog-metal-proj.vercel.app/',
	},
	{
		id: uuidv4(),
		name: 'Persianas Garco (Client Project)',
		link: 'https://client-garco-page.vercel.app/',
	},
	{
		id: uuidv4(),
		name: 'Weather App (API)',
		link: 'https://weather-app-api-navy.vercel.app/',
	},
];
