import { FC, useState } from 'react';

import WaveBackground from '../Components/WaveBackground';

const Index: FC = () => {
	const [active, setActive] = useState<boolean>(false);
	const [session, setSession] = useState<'work' | 'break'>('work');

	return (
		<div className="h-screen flex items-center justify-center gap-3 bg-gray-900">
			<p
				className="text-white z-50"
				onClick={() => {
					setActive(!active);
				}}
			>
				Active
			</p>
			<p
				className="text-white z-50"
				onClick={() => {
					setSession(session === 'work' ? 'break' : 'work');
				}}
			>
				Session
			</p>
			<WaveBackground active={active} session={session} />
		</div>
	);
};

export default Index;
