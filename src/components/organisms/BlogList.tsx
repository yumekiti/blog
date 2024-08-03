import BlogItem from "@/components/molecules/BlogItem";

import { getTitle } from "@/utils/format";
import type { FC } from "react";
import useSWRInfinite from "swr/infinite";

type Props = {
	path: string;
};

const Component: FC<Props> = ({ path }) => {
	const { data, error, size, setSize } = useSWRInfinite(
		(index) => `/_api/v3/pages/list?path=${path}&limit=8&page=${index + 1}`,
	);

	if (error) return <div>Error</div>;
	if (!data) return <div>loading</div>;

	const limit = data[0].limit;
	const totalCount = data[0].totalCount;
	const isLimitExceeded = limit && totalCount && totalCount <= limit * size;
	const isSingleItem = size === 1;

	const isLast = limit === undefined || (!isSingleItem && isLimitExceeded);

	const handleMore = () => {
		setSize(size + 1);
	};

	const pages = data
		.flatMap((page) => page.pages)
		.filter((page) => {
			const title = getTitle(page.path);
			if (title === "__template") return false;
			if (title === "_template") return false;
			if (title === "template") return false;

			return title;
		});

	return (
		<>
			{pages.map((page) => (
				<div className="py-2" key={page._id}>
					<BlogItem
						id={page._id}
						user_id={
							typeof page.creator === "object"
								? page.creator?._id
								: page.creator
						}
						created_at={new Date(page.createdAt)}
						updated_at={new Date(page.updatedAt)}
						title={getTitle(page.path)}
						likes={page.liker.length}
						commentCount={page.commentCount}
						seenUsersCount={page.seenUsers.length}
					/>
				</div>
			))}
			{totalCount && (
				<div className={`py-2 ${isLast && "hidden"}`}>
					<div className="flex items-center justify-center">
						<button
							type="button"
							className="bg-[#fffffe] py-2 px-16 rounded text-[#094067] hover:bg-[#5f6c7b] hover:bg-opacity-20 outline outline-1 outline-[#5f6c7b]"
							onClick={handleMore}
						>
							もっと読む
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default Component;
