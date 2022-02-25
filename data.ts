import { RiComputerLine } from 'react-icons/ri';
import { ImMobile } from 'react-icons/im';
import { FaServer } from 'react-icons/fa';
import { BsCircleFill } from 'react-icons/bs';

import { IService, Skill, IProject } from './types';

export const services: IService[] = [
	{
		Icon: RiComputerLine,
		title: 'Frontend Development',
		about: 'Membuat Aplikasi Web menggunakan <b> HTML</b>,<b>CSS</b> dan <b>React.js</b> ',
	},
	{
		Icon: FaServer,
		title: 'Backend  Development',
		about: 'Handle database, server, api menggunakan <b>Express Js </b>',
	},
	{
		Icon: ImMobile,
		title: 'Mobile Development',
		about: 'Membangun aplikasi mobile menggunakan <b>React Native</b> ',
	},
];

export const languages: Skill[] = [
	{
		Icon: BsCircleFill,
		name: 'Javascript',
		level: '45',
	},
	{
		Icon: BsCircleFill,
		name: 'Typescript',
		level: '60',
	},
	{
		Icon: BsCircleFill,
		name: 'React Js',
		level: '80',
	},
	{
		Icon: BsCircleFill,
		name: 'React Native',
		level: '70',
	},
	{
		Icon: BsCircleFill,
		name: 'Next Js',
		level: '80',
	},
	{
		Icon: BsCircleFill,
		name: 'CSS/SCSS',
		level: '80',
	},
	{
		Icon: BsCircleFill,
		name: 'Bootstrap',
		level: '80',
	},
	{
		Icon: BsCircleFill,
		name: 'Tailwind CSS',
		level: '80',
	},
	{
		Icon: BsCircleFill,
		name: 'Express Js',
		level: '80',
	},
	{
		Icon: BsCircleFill,
		name: 'MongoDB',
		level: '80',
	},
];

export const tools: Skill[] = [
	{
		Icon: BsCircleFill,
		name: 'Figma',
		level: '85',
	},
	{
		Icon: BsCircleFill,
		name: 'Photoshop',
		level: '45',
	},
	{
		Icon: BsCircleFill,
		name: 'Illustrator',
		level: '60',
	},
	{
		Icon: BsCircleFill,
		name: 'Framer',
		level: '45',
	},
];

export const projects: IProject[] = [
	{
		id: 1,
		name: 'Web Admin Absensi Mobile',
		description:
			'Aplikasi web admin yang digunakan untuk mengelola rekap data absensi karyawan, pembayaran reimbursement dan mengirim pengumuman penting. (*Login menggunakan => email: admin@gmail.com, password: admin123)',
		image_path: '/images/web_absensi_mobile.png',
		deployed_url: 'https://web-absensi-mobile.vercel.app',
		github_url: 'https://github.com/tri-hariyadi/app_web_absensi_mobile',
		category: ['react'],
		key_techs: [
			'React',
			'React Hooks',
			'Chart.js',
			'Core UI',
			'Redux',
			'Redux Thunk',
			'Axios',
			'JWT',
			'Bootstrap',
			'SCSS',
		],
		feature: [
			'JWT auth',
			'Kelola data absensi',
			'Kelola data user/employee',
			'Kelola data reimbursement',
			'Pembayaran reimbursement',
			'Kirim pengumuman ke semua employee',
			'Menampilkan info mutasi rekening',
			'Kelola data cuti',
			'Kelola data attendance tag',
		],
	},
	{
		id: 2,
		name: 'Absensi Mobile',
		image_path: '/images/absensi_mobile.png',
		deployed_url: '#',
		github_url: 'https://github.com/tri-hariyadi/app-absensi-mobile',
		category: ['react'],
		description:
			'Aplikasi yang digunakan untuk absensi karyawan yang bekerja secara remote baik absen datang, pulang, maupun pengajuan cuti, selain itu aplikasi ini dapat digunakan untuk mengajukan reimbursement ke perusahaan, fitur notifikasi membuat user tidak akan melewatkan hal penting.',
		key_techs: ['React Native', 'React Hooks', 'Redux', 'Redux Thunk', 'Google Maps API', 'JWT'],
	},

	{
		id: 3,
		name: 'API Absensi Mobile',
		image_path: '/images/api_absensi.png',
		deployed_url: 'https://floating-meadow-53357.herokuapp.com/',
		github_url: 'https://github.com/tri-hariyadi/app-api-absensi-mobile',
		category: ['node', 'mongo'],
		description: 'API service untuk aplikasi absensi mobile',
		key_techs: ['Node Js', 'Express Js', 'Mongo', 'JWT Auth'],
	},

	{
		id: 4,
		name: 'luxury_pwa',
		image_path: '/images/luxury_pwa.png',
		deployed_url: 'https://luxury-pwa.vercel.app/',
		github_url: 'https://github.com/tri-hariyadi/luxury_pwa',
		category: ['react'],
		description: 'Progressive web app penjualan properti',
		key_techs: ['React', 'PWA', 'Tailwind CSS', 'Workbox'],
	},

	{
		id: 5,
		name: 'CMS BAF Mobile',
		image_path: '/images/cms_baf_mobile.png',
		deployed_url: '#',
		github_url: '#',
		category: ['react'],
		description:
			'Aplikasi web internal PT Bussan Auto Finance untuk management content aplikasi BAF Mobile',
		key_techs: ['React', 'Core UI', 'Bootstrap', 'SCSS', 'Redux', 'Redux Thunk'],
		feature: [
			'JWT Auth',
			'Report Registration',
			'User Complaint',
			'Category',
			'Product Catalogue',
			'Content Page',
		],
	},

	{
		id: 6,
		name: 'Agent Management System',
		image_path: '/images/ams.png',
		deployed_url: 'https://xtra.baf.id/register',
		github_url: '#',
		category: ['react'],
		description: 'Aplikasi BAF untuk pendaftaran Agen Dana Syariah (Xtra BAF)',
		key_techs: ['React', 'Core UI', 'Bootstrap', 'SCSS', 'Redux', 'Redux Thunk'],
		feature: ['Register New Account Agen Dana Syariah (Xtra BAF)'],
	},

	{
		id: 7,
		name: 'Incentive Management System',
		image_path: '/images/ims.png',
		deployed_url: '#',
		github_url: '#',
		category: ['react'],
		description:
			'Aplikasi web internal PT BAF yang digunakan untuk perhitungan incentive sales/agent di BAF.',
		key_techs: ['React', 'React Hooks', 'Core UI', 'Bootstrap', 'SCSS', 'Redux', 'Redux Thunk'],
		feature: [
			'JWT Auth',
			'Cluster And Branch',
			'Incentive Base',
			'Incentive Multiplier',
			'Additional Incentive',
		],
	},

	{
		id: 8,
		name: 'SANDIA',
		image_path: '/images/sandia.png',
		deployed_url: 'https://sandia.baf.id/',
		github_url: '#',
		category: ['react'],
		description:
			'Aplikasi web internal PT BAF yang digunakan oleh Sales PT Bussan Auto Finance yang bertujuan untuk memudahkan Sales dalam melakukan pekerjaannya sehari-hari untuk melayani konsumen BAF secara maksimal.',
		key_techs: ['React', 'Core UI', 'Bootstrap', 'SCSS', 'Redux', 'Redux Thunk'],
		feature: [
			'JWT Auth',
			'Order LOB Car',
			'Order LOB NMC',
			'Order LOB Car',
			'Order LOB Agri',
			'Order LOB Syana',
		],
	},
];
