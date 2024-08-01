import {
	Article,
	BugBeetle,
	ClockCounterClockwise,
	Code,
	HouseLine,
	IdentificationCard,
	InstagramLogo,
	Lectern,
	Onigiri,
	ShoppingCart,
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
		text: "記事一覧",
		icon: Article,
		path: "/articles",
		bold: true,
	},
	{
		text: "買った物",
		icon: ShoppingCart,
		path: "/bought",
		bold: true,
	},
	{
		text: "食べ物",
		icon: Onigiri,
		path: "/foods",
		bold: true,
	},
	{
		text: "活動履歴",
		icon: ClockCounterClockwise,
		path: "/history",
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
