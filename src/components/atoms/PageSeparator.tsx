import type { FC } from "react";

type Props = {
	title: string;
};

const Component: FC<Props> = ({ title }) => (
	<div className="py-2">
		<div className="w-full flex justify-center items-center border-x-4 border-[#3DA9FC] py-4">
			<h2 className="text-xl text-[#094067]">{title}</h2>
		</div>
	</div>
);

export default Component;
