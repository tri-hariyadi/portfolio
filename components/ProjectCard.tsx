import { motion } from 'framer-motion';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { BsCheckSquareFill } from 'react-icons/bs';
import { fadeInUp, stagger } from '../animations';
import { IProject } from '../types';
import Carousel from './Carousel';
import { prefix } from '../prefix';

function GraphCMSImageLoader({ src, width }) {
  const relativeSrc = (src) => src.split("/").pop();

  return `https://media.graphcms.com/resize=width:${width}/${relativeSrc(src)}`;
}

const ProjectCard: FunctionComponent<{
	project: IProject;
	showDetail: number | null;
	setShowDetail: (id: null | number) => void;
}> = ({
	project: {
		name,
		image_path,
		category,
		deployed_url,
		description,
		github_url,
		key_techs,
		id,
		feature,
	},
	showDetail,
	setShowDetail,
}) => {
	return (
		<div>
			<Image
				src={`${prefix}${image_path[0]}`}
				alt={name}
				className='cursor-pointer'
				onClick={() => setShowDetail(id)}
				layout='responsive'
				height='170'
				width='300'
				loader={GraphCMSImageLoader}
			/>
			<p className='my-2 text-center'>{name}</p>

			{showDetail === id && (
				<div className='fixed top-0 bottom-0 left-0 right-0 z-10 overflow-y-auto h-full bg-[rgba(0,0,0,.4)] w-full flex items-center justify-center'>
					<div
						className={`relative grid max-h-[95%] overflow-y-scroll w-[97%] md:w-[95%] lg:w-10/12
						text-black bg-gray-100 rounded-xl md:p-10 p-3
						md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100 shadow-custom-light dark:shadow-custom-dark`}
					>
						<motion.div variants={stagger} initial='initial' animate='animate'>
							<motion.div variants={fadeInUp} className='border-4 border-gray-100'>
								{/* <Image
									src={image_path[0]}
									alt={name}
									className='cursor-pointer'
									layout='responsive'
									height='150'
									width='300'
								/> */}
									<div className='w-full flex justify-center'>
										<Carousel images={image_path} />
									</div>
							</motion.div>
							<motion.div variants={fadeInUp} className='flex justify-center my-4 space-x-3'>
								<a
									href={github_url}
									className='flex px-4 py-2 space-x-3 text-lg bg-gray-300 item-center dark:bg-dark-200 rounded-md items-center hover:shadow-xl shadow-gray-500 hover:bg-gray-200'
									target='_blank'
									rel='noopener noreferrer'
								>
									<AiFillGithub /> <span className='hidden sm:block'>Github</span>
								</a>
								<a
									href={deployed_url}
									className='flex px-4 py-2 space-x-3 text-lg bg-gray-300 item-center dark:bg-dark-200 rounded-md items-center hover:shadow-xl shadow-gray-500 hover:bg-gray-200'
									target='_blank'
									rel='noopener noreferrer'
								>
									<AiFillProject /> <span className='hidden sm:block'>Deployed url</span>
								</a>
							</motion.div>
						</motion.div>

						<motion.div variants={stagger} initial='initial' animate='animate'>
							<motion.h2 variants={fadeInUp} className='mb-3 text-xl font-medium md:text-2xl'>
								{name}
							</motion.h2>
							<motion.h3 variants={fadeInUp} className='mb-3 font-medium text-justify'>
								{description}
							</motion.h3>
							{feature && (
								<motion.div variants={fadeInUp}>
									<h2 className='mb-1 font-bold'>Features :</h2>
									<ul className='ml-2'>
										{feature.map(v => (
											<li key={`feature-${v}`} className='flex flex-row items-baseline'>
												<BsCheckSquareFill className='mr-2 text-blue-500 flex-none' /> {v}
											</li>
										))}
									</ul>
								</motion.div>
							)}
							<motion.div
								variants={fadeInUp}
								className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider mb-4'
							>
								{key_techs.map((item) => (
									<span
										className='px-2 py-1 my-1 bg-gray-300 rounded-lg dark:bg-dark-700 inline-flex'
										key={item}
									>
										{item}
									</span>
								))}
							</motion.div>
						</motion.div>

						<button
							className={`absolute p-1 bg-gray-200 rounded-full top-2 sm:top-3 right-1 focus:outline-none
							dark:bg-dark-200 hover:bg-red-500 hover:text-white hover:dark:bg-red-500`}
							onClick={() => setShowDetail(null)}
						>
							<MdClose size={30} />
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProjectCard;
