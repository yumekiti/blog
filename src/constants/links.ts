import {
	Article,
	BookBookmark,
	BugBeetle,
	ClockCounterClockwise,
	Code,
	GithubLogo,
	HouseLine,
	IdentificationCard,
	InstagramLogo,
	Lectern,
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
		text: "活動履歴",
		icon: ClockCounterClockwise,
		path: "/history",
		bold: true,
	},
	{
		text: "ポートフォリオ",
		icon: IdentificationCard,
		path: "https://portfolio.yumekiti.net",
		bold: true,
	},
	{
		text: "ブックマーク",
		icon: BookBookmark,
		path: "https://bookmark.yumekiti.net",
		bold: true,
	},
];

const categories = [
	{
		text: "技術",
		icon: Code,
		path: "/contents/tech",
		bold: false,
	},
	{
		text: "日常",
		icon: Lectern,
		path: "/contents/daily",
		bold: false,
	},
	{
		text: "その他",
		icon: BugBeetle,
		path: "/contents/other",
		bold: false,
	},
];

export const sns = [
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
	{
		key: "Github",
		icon: GithubLogo,
		path: "https://github.com/yumekiti",
	},
];

export { navigation, categories };
