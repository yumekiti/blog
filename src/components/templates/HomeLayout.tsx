import type { FC, ReactNode } from "react";

type Props = {
	children: ReactNode;
};

const Component: FC<Props> = ({ children }) => {
	return (
		<div className="p-0 md:p-2 max-w-7xl mx-auto">
			<div className="grid grid-cols-12 gap-4 px-2 md:p-0">
				<div className="hidden md:block md:col-span-3 lg:col-span-2">
					{/* <NavigationMenu /> */}
				</div>
				<div className="col-span-12 md:col-span-9 lg:col-span-7 mb-12">
					{children}
				</div>
				<div className="hidden lg:col-span-3 lg:block">
					{/* <Welcome /> */}
					{/* <RelatedLinks /> */}
				</div>
			</div>
		</div>
	);
};

export default Component;
