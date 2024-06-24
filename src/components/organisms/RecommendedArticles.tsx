import { Star } from "@phosphor-icons/react";
import type { FC } from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";

import { recommended_articles } from "@/constants/articles";

const Component: FC = () => {
	const { data, error, isLoading } = useSWR(
		"/_api/v3/page?pageId=667991551ca0a03d64a1a8f1",
	);

	if (error) return "notfound";
	if (isLoading) return "loading";

	console.log(data.page.revision.body);

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
					{recommended_articles.map((article) => (
						<li key={article.id}>
							<Link
								to={`/contents/${article.id}`}
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
