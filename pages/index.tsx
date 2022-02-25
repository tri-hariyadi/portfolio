import { motion } from 'framer-motion';
import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import { fadeInUp, routeAnimation, stagger } from '../animations';
// import ServiceCard from '../components/ServiceCard';
import { services } from '../data';
import dynamic from 'next/dynamic';
import Metadata from '../components/Metadata';

const ServiceCard = dynamic(() => import('../components/ServiceCard'));

const index = () => {
	return (
		<>
			<Metadata desc='Tentang Tri Hariyadi, Portfolio Tri Hariyadi' />
			<motion.div
				variants={routeAnimation}
				initial='initial'
				animate='animate'
				className='flex flex-col flex-grow pt-1'
			>
				<h6 className='my-3 font-medium text-justify px-7 sm:px-11'>
					Saya Tri Hariyadi, mahasiswa Universitas Pelita Bangsa tahun ke-empat. Memiliki pengalaman
					sebagai Front-End Web Developer di PT Bussan Auto Finance, bertanggung jawab untuk
					merancang dan membangun aplikasi web secara responsif dan juga interaktif menggunakan
					teknologi React JS. Saya memiliki minat berkarir sebagai Front-End Web dan Mobile
					developer dan mahir dalam menggunakan bahasa javascript.
				</h6>
				<div
					className='flex-grow py-4 mt-5 bg-gray-100 dark:bg-dark-100 px-7 sm:px-11'
					// style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
				>
					<div className=''>
						<h6 className='mt-3 mb-4 text-xl font-bold tracking-wide'>
							Minat & Preferensi Pekerjaan
						</h6>
						<motion.div
							variants={stagger}
							initial='initial'
							animate='animate'
							className='grid gap-6 lg:grid-cols-2'
						>
							{services.map(item => (
								<motion.div
									key={item.title}
									variants={fadeInUp}
									className='bg-zinc-300 rounded-lg dark:bg-dark-200 lg:col-span-1'
								>
									<ServiceCard services={item} />
								</motion.div>
							))}
						</motion.div>
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default index;

// export const getServerSideProps = async (context: GetServerSidePropsContext) => {

//   const res = await fetch('http://localhost:3000/api/services');
//   const data = await res.json();

//   return {
//     props: {
//       services: data.services
//     }
//   }
// }

// export const getStaticProps = async (context: GetStaticPropsContext) => {

//   const res = await fetch('http://localhost:3000/api/services');
//   const data = await res.json();

//   return {
//     props: {
//       services: data.services
//     }
//   }
// }
