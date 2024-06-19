import type { Icon } from "@phosphor-icons/react";
import type { FC } from "react";

type Props = {
	Icon: Icon;
	aria_label: string;
	onClick: () => void;
	className?: string;
};

const Component: FC<Props> = ({
	Icon,
	aria_label,
	onClick,
	className = "",
}) => (
	<button
		type="button"
		className={`hover:bg-[#3da9fc] hover:bg-opacity-30 rounded p-2 ${className}`}
		aria-label={aria_label}
		onClick={onClick}
	>
		<Icon size={24} />
	</button>
);

export default Component;
