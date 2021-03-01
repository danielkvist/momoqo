import { useState, useEffect, FC } from 'react';
import Wave from 'react-wavify';
import AnimateHeight from 'react-animate-height';

type Props = {
	active: boolean;
	session: 'work' | 'break';
};

const fillColors = {
	work: 'rgb(127, 29, 29)',
	break: 'rgb(29, 78, 216)',
};

const minsToMs = (mins: number) => mins * 60 * 1000;

const WaveBackground: FC<Props> = ({ active, session }) => {
	const [fill, setFill] = useState<string>(fillColors[session]);
	const [duration, setDuration] = useState<number>(
		session ? minsToMs(25) : minsToMs(5)
	);

	useEffect(() => {
		setFill(() => fillColors[session]);
		setDuration(() => (session === 'work' ? minsToMs(25) : minsToMs(5)));
	}, [session]);

	return (
		<div className="h-full w-full flex flex-shrink flex-col justify-end absolute">
			<Wave
				fill={fill}
				paused={false}
				options={{
					height: 70,
					amplitude: 40,
					speed: 0.15,
					points: 2,
				}}
			/>
			<AnimateHeight
				className="flex-shrink-0"
				duration={duration}
				height={active ? 'auto' : 0}
				easing="ease-out"
			>
				<div
					className="w-full h-screen"
					style={{ backgroundColor: fill }}
				></div>
			</AnimateHeight>
		</div>
	);
};

export default WaveBackground;
