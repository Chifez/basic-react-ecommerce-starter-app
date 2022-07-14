import { ReactComponent as WomensIcon } from "../Assets/womens.svg";
import { ReactComponent as MenIcon } from "../Assets/mens.svg";
import { ReactComponent as GalleryIcon } from "../Assets/gallery.svg";
import { ReactComponent as PagesIcon } from "../Assets/pages.svg";
import { ReactComponent as ShopIcon } from "../Assets/shop.svg";
import { ReactComponent as VideosIcon } from "../Assets/videos.svg";
import { ReactComponent as BlogIcon } from "../Assets/blog.svg";

type Categorymenu = {
	title: string;
	icon: any;
	path: string;
	className: string;
	menus: any[];
	images: [];
};
export const CategoryMenu: Categorymenu[] = [
	{
		title: "womens",
		icon: WomensIcon,
		path: "/",
		className: "",
		menus: [
			{
				menu1: {
					title: "",
					path: "/",
					image: "",
				},
			},
			{
				menu2: {
					title: "",
					path: "/",
					image: "",
				},
			},
			{
				menu3: {
					title: "",
					path: "/",
					image: "",
				},
			},
			{
				menu4: {
					title: "",
					path: "/",
					image: "",
				},
			},
		],
		images: [],
	},

	{
		title: "mens",
		icon: MenIcon,
		path: "/",
		className: "",
		menus: [
			{
				menu1: {
					title: "",
					path: "/",
					image: "",
				},
			},
			{
				menu2: {
					title: "",
					path: "/",
					image: "",
				},
			},
			{
				menu3: {
					title: "",
					path: "/",
					image: "",
				},
			},
			{
				menu4: {
					title: "",
					path: "/",
					image: "",
				},
			},
		],
		images: [],
	},
	{
		title: "blog",
		icon: BlogIcon,
		path: "/",
		className: "",
		menus: [
			{
				menu1: {
					title: "",
					path: "/",
					image: "",
				},
			},
			{
				menu2: {
					title: "",
					path: "/",
					image: "",
				},
			},
			{
				menu3: {
					title: "",
					path: "/",
					image: "",
				},
			},
			{
				menu4: {
					title: "",
					path: "/",
					image: "",
				},
			},
		],
		images: [],
	},
	{
		title: "gallery",
		icon: GalleryIcon,
		path: "/",
		className: "",
		menus: [
			{
				menu1: {
					title: "",
					path: "/",
					image: "",
				},
			},
			{
				menu2: {
					title: "",
					path: "/",
					image: "",
				},
			},
			{
				menu3: {
					title: "",
					path: "/",
					image: "",
				},
			},
			{
				menu4: {
					title: "",
					path: "/",
					image: "",
				},
			},
		],
		images: [],
	},
	{
		title: "videos",
		icon: VideosIcon,
		path: "/",
		className: "",
		menus: [
			{
				menu1: {
					title: "",
					path: "/",
					image: "",
				},
			},
			{
				menu2: {
					title: "",
					path: "/",
					image: "",
				},
			},
			{
				menu3: {
					title: "",
					path: "/",
					image: "",
				},
			},
			{
				menu4: {
					title: "",
					path: "/",
					image: "",
				},
			},
		],
		images: [],
	},
	{
		title: "pages",
		icon: PagesIcon,
		path: "/",
		className: "",
		menus: [
			{
				menu1: {
					title: "",
					path: "/",
					image: "",
				},
			},
			{
				menu2: {
					title: "",
					path: "/",
					image: "",
				},
			},
			{
				menu3: {
					title: "",
					path: "/",
					image: "",
				},
			},
			{
				menu4: {
					title: "",
					path: "/",
					image: "",
				},
			},
		],
		images: [],
	},
	{
		title: "shop",
		icon: ShopIcon,
		path: "/",
		className: "",
		menus: [
			{
				menu1: {
					title: "",
					path: "/",
					image: "",
				},
			},
			{
				menu2: {
					title: "",
					path: "/",
					image: "",
				},
			},
			{
				menu3: {
					title: "",
					path: "/",
					image: "",
				},
			},
			{
				menu4: {
					title: "",
					path: "/",
					image: "",
				},
			},
		],
		images: [],
	},
];
