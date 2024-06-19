import type { Icon } from "@phosphor-icons/react";
import type { FC } from "react";

type Props = {
	Icon: Icon;
	text: string;
	bold?: boolean;
};

const Component: FC<Props> = ({ Icon, text, bold = false }) => (
	<button
		type="button"
		className="flex items-center py-2 pr-4 w-full text-[#094067] rounded group hover:bg-[#3da9fc] hover:bg-opacity-30"
	>
		<div className="px-2 w-10 flex justify-center items-center">
			<Icon size={24} />
		</div>
		<p
			className={`whitespace-nowrap text-[#094067] group-hover:text-[#3da9fc] group-hover:underline ${
				bold && "font-bold"
			}`}
		>
			{text}
		</p>
	</button>
);

export default Component;
