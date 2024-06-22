import type { FC } from "react";
import { Link } from "react-router-dom";
// import useSWR from 'swr';

import icon from "@/assets/icon.svg";
import { sns } from "@/constants/links";

const Component: FC = () => {
	// const { data: tags } = useSWR(`/_api/tags.list`);

	return (
		<>
			<div className="py-8 bg-[#fffffe] space-y-6 rounded">
				<div className="flex flex-col justify-center items-center">
					<img src={icon} alt="icon" className="w-40 h-40" />
					<p className="text-2xl text-center">ゆめきち</p>
				</div>
				<div className="w-2/3 mx-auto">
					<p>インターネットを通じて便利を届け、生活に豊かさをお届けします。</p>
				</div>
				<ul className="flex justify-center gap-4">
					{sns.map((link) => (
						<li key={link.key}>
							<Link to={link.path} target="_blank" rel="noopener noreferrer">
								<link.icon size={32} />
							</Link>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default Component;
