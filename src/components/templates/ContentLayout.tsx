import type { FC, ReactNode } from "react";

import type { Page } from "@/types/page";

type Props = {
	content: Page;
	children: ReactNode;
};

const Component: FC<Props> = ({ content, children }) => {
	console.log(content);

	return (
		<div className="p-0 md:p-2 max-w-7xl mx-auto">
			<div className="grid grid-cols-12 gap-4 px-2 md:p-0">
				<div className="hidden md:block md:col-span-3 lg:col-span-1">
					<div className="py-2">
						{/* <CounterButtonGroup
							id={data.page._id}
							like={data.page.liker.length}
							comment={data.page.commentCount}
						/> */}
					</div>
				</div>
				<div className="col-span-12 md:col-span-9 lg:col-span-8 mb-12">
					{children}
				</div>
				<div className="hidden lg:col-span-3 lg:block">
					{/* <ContentList /> */}
				</div>
			</div>
			<div className="w-full fixed bottom-0 bg-Main md:hidden border-t-2 border-SubHeadline">
				{/* <CounterButtonGroup
					id={data.page._id}
					like={data.page.liker.length}
					comment={data.page.commentCount}
				/> */}
			</div>
		</div>
	);
};

export default Component;
