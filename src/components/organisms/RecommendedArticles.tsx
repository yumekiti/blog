import { Star } from "@phosphor-icons/react";
import type { FC } from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";

interface Article {
	id: number;
	title: string;
	link: string;
}

const Component: FC = () => {
	const { data, error, isLoading } = useSWR(
		`/_api/v3/page?pageId=${import.meta.env.VITE_RECOMMENDS_PAGE}`,
	);

	if (error) return "notfound";
	if (isLoading) return "loading";

	const recommended_articles: Article[] = data.page.revision.body
		.split(/\n/)
		.map((line: string, index: number) => {
			const regex = /\[(.+?)\]\((.+?)\)/;
			const match = line.match(regex);
			if (match) {
				const id = index;
				const title = match[1];
				const link = match[2].match(/[^/]+$/)?.[0];
				return { id, title, link };
			}
			return { id: 0, title: "", link: "" };
		})
		.filter((article: Article) => article.title !== "" && article.link !== "");

	return (
		<div className="py-2">
			<div className="py-6 bg-[#fffffe] space-y-6 rounded">
				<div className="py-2 flex items-center justify-center space-x-2">
					<Star size={24} />
					<h3 className="text-xl font-bold text-center text-Headline">
						おすすめ記事
					</h3>
				</div>
				<ol className="w-3/4 mx-auto list-decimal space-y-4">
					{recommended_articles.map((article: Article) => (
						<li key={article.id}>
							<Link
								to={`/${encodeURIComponent(article.link)}`}
								className="break-all line-clamp-5 hover:text-[#3da9fc] hover:underline"
							>
								{article.title}
							</Link>
						</li>
					))}
				</ol>
			</div>
		</div>
	);
};

export default Component;
