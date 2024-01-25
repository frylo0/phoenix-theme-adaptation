import cn from 'clsx';
import Image from 'next/image';
import { ReactNode } from 'react';

import { s } from './Counter.css';

interface CounterProps extends React.PropsWithChildren {
	className?: string;
	icon: string;
	value: number;
	label: ReactNode;
}

export const Counter: React.FC<CounterProps> = ({ className, icon, value, label }) => {
	return (
		<div className={cn(s.root, className)}>
			<Image src={icon} className={cn(s.icon)} alt="Icon" />
			<h6 className={cn(s.value)}>{value}</h6>
			{label}
		</div>
	);
};
