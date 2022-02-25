import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { fadeInUp, routeAnimation } from '../animations';
// import Bar from '../components/Bar';
import { languages, tools } from '../data';
import Metadata from '../components/Metadata';

const Resume = () => {
	useEffect(() => {
		const scrollContainer = document.querySelector('#skill-container');
		scrollContainer.addEventListener('wheel', (evt: WheelEvent) => {
			evt.preventDefault();
			scrollContainer.scrollLeft += evt.deltaY;
		});

		return () => {};
	}, []);

	return (
		<>
			<Metadata
				title='Tri Hariyadi | Resume'
				desc={`Resume dokumen yang menjelaskan secara ringkas mengenai siapa Tri Hariyadi,
					apa saja pencapaian yang telah Tri Hariyadi lakukan di masa lalu,
					bagaimana relevansi pengalaman Tri Hariyadi terhadap posisi pekerjaan yang dilamar,
					serta apakah Tri Hariyadi orang yang tepat atau tidak untuk dipilih diantara kandidat lainnya`}
				canonical='/resume'
			/>
			<motion.div
				variants={routeAnimation}
				initial='initial'
				animate='animate'
				exit='exit'
				className='md:px-11 py-2 px-7'
			>
				{/* Education */}
				<div className='grid gap-6 md:grid-cols-2'>
					<motion.div variants={fadeInUp} initial='initial' animate='animate'>
						<h5 className='my-3 text-2xl font-bold'>Pendidikan</h5>
						<ul>
							<li className='step'>
								<div className='relative'>
									<h5 className='my-2 text-xl font-bold'>Universitas Pelita Bangsa</h5>
									<p className='font-semibold'>Teknik Informatika(2018 - 2022) Tahun Ke-4</p>
									<p>IPK 3,53</p>
									<p>Mengikuti Program Kreativitas Mahasiswa 2019</p>
								</div>
							</li>
							<li className='step before:h-full'>
								<div>
									<h5 className='my-2 mt-5 text-xl font-bold'>SMA Negeri 1 Slogohimo</h5>
									<p className='font-semibold'>IPA(2012 - 2015)</p>
									<p>Juara 2 Olimpiade Fisika Tingkat Kabupaten 2014</p>
								</div>
							</li>
						</ul>
					</motion.div>
					<motion.div variants={fadeInUp} initial='initial' animate='animate'>
						<h5 className='my-3 text-2xl font-bold'>Pengalaman</h5>
						<ul>
							<li className='step before:h-full'>
								<div>
									<h5 className='my-2 text-xl font-bold'>Front End Developer</h5>
									<p className='font-semibold'>PT Enigma Cipta Humanika(2020 - Present)</p>
									<p className='text-justify'>
										Front End Developer untuk PT Bussan Auto Finance, membangun aplikasi web secara
										responsif dan juga interaktif menggunakan teknologi React JS.
									</p>
								</div>
							</li>
						</ul>
					</motion.div>
				</div>

				<div>
					<h5 className='mt-8 text-2xl font-bold'>Kemampuan & Kompetensi</h5>
					<div id='skill-container' className='my-2'>
						{languages.map(item => (
							<motion.div
								variants={fadeInUp}
								initial='initial'
								animate='animate'
								key={item.name}
								className={`rounded-full text-white inline-flex items-center px-3 py-2
								bg-gradient-to-r from-green to-blue-600 my-2 mr-2 min-w-max`}
							>
								<item.Icon className='mr-2' />
								{item.name}
							</motion.div>
						))}
					</div>
				</div>

				{/* Languages */}
				{/* <div className='grid gap-6 md:grid-cols-2'>
				<div>
					<h5 className='my-3 text-2xl font-bold'>Languages & Frameworks</h5>
					<div className='my-2'>
						{languages.map(item => (
							<Bar data={item} key={item.name} />
						))}
					</div>
				</div>
				<div>
					<h5 className='my-3 text-2xl font-bold'>Tools & Software</h5>
					<div className='my-2'>
						{tools.map(item => (
							<Bar data={item} key={item.name} />
						))}
					</div>
				</div>
			</div> */}
			</motion.div>
		</>
	);
};

export default Resume;
