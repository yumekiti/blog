import { Tag } from "@phosphor-icons/react";
import type React from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";

type Props = {
	id: string;
};

const Component: React.FC<Props> = ({ id }) => {
	const { data, error } = useSWR(`/_api/pages.getPageTag?pageId=${id}`);

	if (error) return <div>Error</div>;
	if (!data) return <div>Loading...</div>;

	return (
		<div className="flex items-center">
			<div className="w-4">
				<Tag />
			</div>
			<ul className="flex items-center flex-wrap ml-2">
				{data.tags.map((tag: string) => (
					<li className="py-1" key={tag}>
						<Link
							to={`/search?q=tag%3A${tag}`}
							className="mr-1 hover:bg-[#5f6c7b] hover:bg-opacity-10 rounded p-1 text-xs md:text-sm hover:outline outline-1 outline-[#5f6c7b]"
							onClick={(e) => e.stopPropagation()}
						>
							#{tag}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Component;
