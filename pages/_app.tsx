import { AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
	return (
		<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
			<div className='grid grid-cols-12 gap-6 px-3 xl:px-28 2xl:px-44 lg:px-5 my-14 sm:px-20 md:mb-16 md:px-20'>
				<div
					className={`col-span-12 p-4 text-center bg-white dark:bg-dark-500 lg:col-span-4 2xl:col-span-3
					rounded-2xl shadow-custom-light dark:shadow-custom-dark`}
				>
					<Sidebar />
				</div>
				<div
					className={`flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-8 2xl:col-span-9
					rounded-2xl dark:bg-dark-500 shadow-md shadow-custom-light dark:shadow-xl dark:shadow-custom-dark`}
				>
					<Navbar />
					<AnimatePresence exitBeforeEnter>
						<Component {...pageProps} key={router.route} />
					</AnimatePresence>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default MyApp;
