import { IconType } from 'react-icons';

export interface IService {
	title: string;
	about: string;
	Icon: IconType;
}

export interface Skill {
	Icon: IconType;
	name: string;
	level: string;
}

export interface IProject {
	id: number;
	name: string;
	description: string;
	image_path: Array<string>;
	deployed_url: string;
	github_url: string;
	category: Category[];
	key_techs: string[];
	feature?: Array<string>;
}

export type Category = 'react' | 'node' | 'express' | 'django' | 'mongo';
