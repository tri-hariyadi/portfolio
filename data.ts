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
	{
		Icon: BsCircleFill,
		name: 'Docker',
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
		name: 'Smart Laundry Mobile Android & iOS',
		description:
			'Aplikasi untuk pemesanan laundry secara online',
		image_path: ['/images/smart-laundry-mobile-covers.jpg', '/images/sl_mobile/welcome_1.jpg', '/images/sl_mobile/welcome_2.jpg',
			'/images/sl_mobile/login_register.jpg', '/images/sl_mobile/home_track.jpg', '/images/sl_mobile/history.jpg',
			'/images/sl_mobile/profile.jpg', '/images/sl_mobile/detail_service.jpg', '/images/sl_mobile/detail_2.jpg', '/images/sl_mobile/address_payment.jpg',
			'/images/sl_mobile/review_order.jpg', '/images/sl_mobile/google_maps.jpg', '/images/sl_mobile/home_track.jpg'],
		deployed_url: '',
		github_url: 'https://github.com/tri-hariyadi/smartlaundry-mobile',
		category: ['react'],
		key_techs: [
			'React Native',
			'React Hooks',
			'Typescript',
			'Google Maps API',
			'Redux',
			'Redux Thunk',
			'Axios',
			'JWT',
			'React Native Server-Sent Events',
		],
		feature: [
			'JWT auth',
			'Memesan servis laundry dalam radius 11 km',
			'Fitur promo',
			'Stepper untuk cek progress pengerjaan laundry',
			'Riwayat pemesanan laundry',
			'Penilaian dan Ratings layanan jasa laundry',
			'Get location dan geocoding posisi pelanggan',
			'Melihat posisi pelanggan dan lokasi laundry dengan google map',
			'Navigasi dengan google maps untuk kurir',
		],
	},
	{
		id: 2,
		name: 'Web Smart Laundry',
		description:
			'Aplikasi web untuk management laundry oleh pihak penyedia jasa laundry',
		image_path: ['/images/sl_web/login.jpg', '/images/sl_web/register_1.jpg', '/images/sl_web/register_2.jpg', '/images/sl_web/dashboard.jpg',
			'/images/sl_web/servis.jpg', '/images/sl_web/servis_2.jpg', '/images/sl_web/promo.jpg', '/images/sl_web/order.jpg', '/images/sl_web/stock_1.jpg'
			, '/images/sl_web/stock_2.jpg'],
		deployed_url: '',
		github_url: 'https://github.com/tri-hariyadi/smartlaundry-web',
		category: ['react'],
		key_techs: [
			'Next.js',
			'React',
			'React Hooks',
			'Typescript',
			'Redux',
			'Redux Thunk',
			'Bootstrap',
			'SCSS',
			'JWT',
			'Firebase Push Notification',
		],
		feature: [
			'JWT auth',
			'Menampilkan data pendapatan dan pengeluaran dalam bentuk grafik',
			'Fitur menambahkan servis laundry',
			'Fitur menambahkan promo',
			'Menerima order',
			'Mengupdate progress pengerjaan order',
			'Manajemen stok barang',
			'Melihat Penilaian dan Ratings layanan jasa laundry dari pelanggan',
		],
	},
	{
		id: 3,
		name: 'API Smart Laundry',
		description: 'API service untuk aplikasi Smart Laundry',
		image_path: ['/images/smart_laundry_api_cover.jpg'],
		deployed_url: '',
		github_url: 'https://github.com/tri-hariyadi/api-smart-laundry',
		category: ['node', 'mongo'],
		key_techs: [
			'Express',
			'Mongo',
			'JWT Auth',
			'Firebase Push Notification',
			'Server-Sent Events',
		],
		feature: [],
	},
	{
		id: 4,
		name: 'Web Admin Absensi Mobile',
		description:
			'Aplikasi web admin yang digunakan untuk mengelola rekap data absensi karyawan, pembayaran reimbursement dan mengirim pengumuman penting. (*Login menggunakan => email: admin@gmail.com, password: admin123)',
		image_path: ['/images/web_absensi_mobile.png'],
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
		id: 5,
		name: 'Absensi Mobile',
		image_path: ['/images/absensi_mobile.png'],
		deployed_url: '#',
		github_url: 'https://github.com/tri-hariyadi/app-absensi-mobile',
		category: ['react'],
		description:
			'Aplikasi yang digunakan untuk absensi karyawan yang bekerja secara remote baik absen datang, pulang, maupun pengajuan cuti, selain itu aplikasi ini dapat digunakan untuk mengajukan reimbursement ke perusahaan, fitur notifikasi membuat user tidak akan melewatkan hal penting.',
		key_techs: ['React Native', 'React Hooks', 'Redux', 'Redux Thunk', 'Google Maps API', 'JWT'],
	},

	{
		id: 6,
		name: 'API Absensi Mobile',
		image_path: ['/images/api_absensi.png'],
		deployed_url: 'https://floating-meadow-53357.herokuapp.com/',
		github_url: 'https://github.com/tri-hariyadi/app-api-absensi-mobile',
		category: ['node', 'mongo'],
		description: 'API service untuk aplikasi absensi mobile',
		key_techs: ['Node Js', 'Express Js', 'Mongo', 'JWT Auth'],
	},

	{
		id: 7,
		name: 'luxury_pwa',
		image_path: ['/images/luxury_pwa.png'],
		deployed_url: 'https://luxury-pwa.vercel.app/',
		github_url: 'https://github.com/tri-hariyadi/luxury_pwa',
		category: ['react'],
		description: 'Progressive web app penjualan properti',
		key_techs: ['React', 'PWA', 'Tailwind CSS', 'Workbox'],
	},

	{
		id: 8,
		name: 'CMS BAF Mobile',
		image_path: ['/images/cms_baf_mobile.png'],
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
		id: 9,
		name: 'Agent Management System',
		image_path: ['/images/ams.png'],
		deployed_url: 'https://xtra.baf.id/register',
		github_url: '#',
		category: ['react'],
		description: 'Aplikasi BAF untuk pendaftaran Agen Dana Syariah (Xtra BAF)',
		key_techs: ['React', 'Core UI', 'Bootstrap', 'SCSS', 'Redux', 'Redux Thunk'],
		feature: ['Register New Account Agen Dana Syariah (Xtra BAF)'],
	},

	{
		id: 10,
		name: 'Incentive Management System',
		image_path: ['/images/ims.png'],
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
		id: 11,
		name: 'SANDIA',
		image_path: ['/images/sandia.png'],
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
