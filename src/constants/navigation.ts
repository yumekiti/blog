import {
	Article,
	BookBookmark,
	BugBeetle,
	ClockCounterClockwise,
	Code,
	HouseLine,
	IdentificationCard,
	Lectern,
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
		path: "https://portfolio.yumekiti.net/",
		bold: true,
	},
	{
		text: "ブックマーク",
		icon: BookBookmark,
		path: "https://bookmark.yumekiti.net/",
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

const links = [
	{
		text: "公式サイト",
		emoji: "🏫",
		path: "https://comp.ecc.ac.jp/",
		bold: false,
	},
	{
		text: "お知らせ",
		emoji: "📢",
		path: "https://comp-app.ecc-sv.com/app/",
		bold: false,
	},
	{
		text: "E-Connnect",
		emoji: "📚",
		path: "https://ecc.learning-ware.jp/",
		bold: false,
	},
	{
		text: "ECC-ポータル",
		emoji: "📝",
		path: "https://stork.ecc.ac.jp/",
		bold: false,
	},
	{
		text: "Diff_Sync_Code",
		emoji: "🔀",
		path: "https://diff.yumekiti.net/",
		bold: false,
	},
	{
		text: "Slide_Sync",
		emoji: "📱",
		path: "https://chrome.google.com/webstore/detail/slide-sync/naimcoenmacdfkjnhphjgikaigaedgae?hl=ja&authuser=0",
		bold: false,
	},
	{
		text: "Marplify",
		emoji: "📊",
		path: "https://marplify.yumekiti.net/",
		bold: false,
	},
	{
		text: "Mdcal",
		emoji: "📅",
		path: "https://mdcal.yumekiti.net/",
		bold: false,
	},
];

export { navigation, categories, links };
