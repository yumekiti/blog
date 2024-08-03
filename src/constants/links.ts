import {
	BugBeetle,
	ClockCounterClockwise,
	Code,
	HouseLine,
	IdentificationCard,
	InstagramLogo,
	Lectern,
	ShoppingCart,
	Tag,
	TwitterLogo,
} from "@phosphor-icons/react";

const navigation = [
	{
		text: "ホーム",
		icon: HouseLine,
		path: "/",
		bold: true,
	},
	{
		text: "タグ一覧",
		icon: Tag,
		path: "/tags",
		bold: true,
	},
];

const categories = [
	{
		text: "技術",
		icon: Code,
		path: "/tech",
		bold: false,
	},
	{
		text: "日常",
		icon: Lectern,
		path: "/daily",
		bold: false,
	},
	{
		text: "レビュー",
		icon: ShoppingCart,
		path: "/review",
		bold: false,
	},
	{
		text: "活動",
		icon: ClockCounterClockwise,
		path: "/history",
		bold: false,
	},
	{
		text: "その他",
		icon: BugBeetle,
		path: "/other",
		bold: false,
	},
];

export const sns = [
	{
		key: "Portfolio",
		icon: IdentificationCard,
		path: "https://yumekiti.net",
	},
	{
		key: "Twitter",
		icon: TwitterLogo,
		path: "https://twitter.com/yumekiti_social",
	},
	{
		key: "Instagram",
		icon: InstagramLogo,
		path: "https://www.instagram.com/yumekiti_social",
	},
];

export { navigation, categories };
