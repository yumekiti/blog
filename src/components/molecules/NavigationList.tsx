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
			{navigation.map((link) => (
				<li key={link.text} className="flex items-center">
					<Link
						to={link.path}
						className="w-full"
						target={link.path.includes("http") ? "_blank" : "_self"}
						rel={link.path.includes("http") ? "noopener noreferrer" : ""}
					>
						<IconTextButton
							Icon={link.icon}
							text={link.text}
							bold={link.bold}
						/>
					</Link>
				</li>
			))}
		</ul>
	</nav>
);

export default Component;
