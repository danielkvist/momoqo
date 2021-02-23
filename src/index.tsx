import { StrictMode } from 'react';
import { render } from 'react-dom';

import './styles/index.css';
import Index from './Screens/Index';

const root = document.getElementById('root');
render(
	<StrictMode>
		<Index />
	</StrictMode>,
	root
);
