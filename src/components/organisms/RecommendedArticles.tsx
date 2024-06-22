import { Star } from "@phosphor-icons/react";
import type { FC } from "react";
import { Link } from "react-router-dom";

import { recommends } from "@/constants/recommend";

const Component: FC = () => (
	<div className="py-2">
		<div className="py-6 bg-[#fffffe] space-y-6 rounded">
			<div className="py-2 flex items-center justify-center space-x-2">
				<Star size={24} />
				<h3 className="text-xl font-bold text-center text-Headline">
					おすすめ記事
				</h3>
			</div>
			<ol className="w-3/4 mx-auto list-decimal space-y-4">
				{recommends.map((recommend) => (
					<li key={recommend.id}>
						<Link
							to={`/contents/${recommend.id}`}
							className="break-all line-clamp-5 hover:text-[#3da9fc] hover:underline"
						>
							{recommend.title}
						</Link>
					</li>
				))}
			</ol>
		</div>
	</div>
);

export default Component;
