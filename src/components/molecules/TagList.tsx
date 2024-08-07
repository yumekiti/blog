import { Hash } from "@phosphor-icons/react";
import type { FC } from "react";
import { Link } from "react-router-dom";

import IconTextButton from "@/components/atoms/IconTextButton";

type Props = {
	tags: { name: string }[];
};

const Component: FC<Props> = ({ tags }) => {
	return (
		<nav className="py-2">
			<h2 className="text-[#094067] font-bold p-2">タグ</h2>
			<ul>
				{tags.map((tag: { name: string }) => (
					<li key={tag.name} className="flex items-center">
						<Link to={`/search?q=tag%3A${tag.name}`} className="w-full">
							<IconTextButton Icon={Hash} text={`${tag.name}`} />
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Component;
