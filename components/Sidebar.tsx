import Image from 'next/image';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Sidebar = () => {
	const { theme, setTheme } = useTheme();
	const [dark, setDark] = useState(false);
	const changeTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	useEffect(() => {
		setDark(theme === 'light' ? false : true);
	}, [theme]);

	return (
		<div>
			<Image
				className='w-32 h-32 mx-auto rounded-full'
				width={200}
				height={200}
				src={require('../public/foto_profile.png')}
				alt='user avatar'
			/>
			<h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
				<span className='text-green'>Tri </span>
				Hariyadi
			</h3>
			<p className='px-2 py-2 my-3 bg-gray-200 rounded-full dark:bg-dark-200'>
				Full Stack Javascript Developer
			</p>
			<a
				className='flex items-center justify-center px-2 py-2 my-3 bg-gray-200 rounded-full
      dark:bg-dark-200 hover:shadow-md hover:shadow-gray-500/50 hover:bg-gray-100'
				href='/assets/Tri_Hariyadi_Resume.pdf'
				download='Tri_Hariyadi_Resume.pdf'
			>
				<GiTie className='w-6 h-6' /> Download Resume
			</a>

			<div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full'>
				<a
					href='https://www.youtube.com'
					target='_blank'
					rel='noopener noreferrer'
				>
					<AiFillYoutube className='w-8 h-8 cursor-pointer text-red-500' />
				</a>
				<a href='https://github.com/tri-hariyadi' target='_blank' rel='noopener noreferrer'>
					<AiFillGithub className='w-8 h-8 cursor-pointer text-black dark:text-white' />
				</a>
				<a
					href='https://www.linkedin.com/in/tri-hariyadi-855b92179/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<AiFillLinkedin className='w-8 h-8 cursor-pointer text-blue-600' />
				</a>
			</div>

			<div
				className='py-4 my-5 bg-gray-200 dark:bg-dark-200'
				style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
			>
				<div className='flex items-center justify-center space-x-2'>
					<GoLocation />
					<span className=''>Jakarta Selatan</span>
				</div>
				<p className='my-2'>trihariyadi24@gmail.com</p>
				<p className='my-2'>+6289660278221</p>
			</div>
			<button
				className={`w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400
        focus:outline-none shadow-lg hover:shadow-cyan-500/50`}
				onClick={() => window.open('mailto:trihariyadi24@gmail.com')}
			>
				Email Me
			</button>
			<button
				className={`w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400
          shadow-lg hover:shadow-cyan-500/50 focus:outline-none`}
				onClick={changeTheme}
			>
				<div className='flex flex-row items-center justify-center'>
					<span className='mr-2'>Toggle {dark ? 'Light' : 'Dark'}</span>
					<div className='text-yellow-300 font-medium'>
						{dark ? <BsFillSunFill className='text-xl' /> : <BsFillMoonStarsFill />}
					</div>
				</div>
			</button>
		</div>
	);
};

export default Sidebar;
