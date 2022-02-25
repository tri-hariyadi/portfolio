import { motion } from 'framer-motion';
import { useState } from 'react';
import { fadeInUp, routeAnimation, stagger } from '../animations';
import ProjectCard from '../components/ProjectCard';
import ProjectNavbar from '../components/ProjectNavbar';
import { projects as projectsData } from '../data';
import { Category } from '../types';
import Metadata from '../components/Metadata';

const Projects = () => {
	const [projects, setProjects] = useState(projectsData);
	const [active, setActive] = useState('all');
	const [showDetail, setShowDetail] = useState<number | null>(null);

	const handlerFilterCategory = (category: Category | 'all') => {
		if (category === 'all') {
			setProjects(projectsData);
			setActive(category);
			return;
		}

		const newArray = projectsData.filter(item => item.category.includes(category));
		setProjects(newArray);
		setActive(category);
	};

	return (
		<>
			<Metadata
				title='Tri Hariyadi | Projects'
				desc='Project yang telah dikerjakan oleh Tri Hariyadi'
				canonical='/projects'
			/>
			<motion.div
				variants={routeAnimation}
				initial='initial'
				animate='animate'
				exit='exit'
				className='px-5 py-2 overflow-y-scroll'
				style={{ height: '65vh' }}
			>
				<ProjectNavbar handlerFilterCategory={handlerFilterCategory} active={active} />

				<motion.div
					variants={stagger}
					initial='initial'
					animate='animate'
					className='grid grid-cols-12 gap-4 my-3'
				>
					{projects.map(item => (
						<motion.div
							key={`item-${item.id}`}
							variants={fadeInUp}
							className='col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-700'
						>
							<ProjectCard
								project={item}
								key={item.name}
								showDetail={showDetail}
								setShowDetail={setShowDetail}
							/>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</>
	);
};

export default Projects;
