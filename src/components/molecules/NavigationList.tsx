import type { Icon } from "@phosphor-icons/react";
import type { FC } from "react";
import { Link } from "react-router-dom";

import IconTextButton from "@/components/atoms/IconTextButton";

type Props = {
	title?: string;
	navigation: {
		path: string;
		icon: Icon;
		text: string;
		bold: boolean;
	}[];
};

const Component: FC<Props> = ({ title, navigation }) => (
	<nav className="py-2">
		{title && <h2 className="text-[#094067] font-bold p-2">{title}</h2>}
		<ul>
			{navigation.map((item) => (
				<li key={item.text} className="flex items-center">
					<Link to={item.path} className="w-full">
						<IconTextButton
							Icon={item.icon}
							text={item.text}
							bold={item.bold}
						/>
					</Link>
				</li>
			))}
		</ul>
	</nav>
);

export default Component;
