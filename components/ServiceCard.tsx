import { FunctionComponent } from 'react';
import { IService } from '../types';

const ServiceCard: FunctionComponent<{ services: IService }> = ({
	services: { Icon, about, title },
}) => {
	const createMarkUp = () => {
		return {
			__html: about,
		};
	};

	return (
		<div className='flex items-center p-2 space-x-4'>
			<Icon className='w-12 h-12 text-blue-500' />
			<div>
				<h4 className='font-bold'>{title}</h4>
				<p dangerouslySetInnerHTML={createMarkUp()}></p>
			</div>
		</div>
	);
};

export default ServiceCard;
