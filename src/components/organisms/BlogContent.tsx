import { format } from "date-fns";
import type { FC } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import "zenn-content-css";

import {
	formatTableDate,
	formatTableTime,
	formatVariable,
} from "@/utils/format";
import { Link } from "react-router-dom";
import useSWR from "swr";
import BlogTagList from "../molecules/BlogTagList";

type Props = {
	id: string;
};

const Component: FC<Props> = ({ id }) => {
	const { data, error } = useSWR(`_api/v3/page?pageId=${id}`);

	if (error) return <div>Error</div>;
	if (!data) return <div>loading</div>;

	const splitedPath = data.page.path.split("/").slice(-1);
	const splitedUnderline = splitedPath[0].split("_");
	const title = splitedUnderline.slice(1).join("_");

	return (
		<div className="py-2">
			<div className="bg-[#fffffe] p-6 md:px-16 rounded">
				<div className="flex items-center space-x-1">
					<img
						src={
							import.meta.env.VITE_API_URL + data.page.creator.imageUrlCached
						}
						alt="user"
						className="w-8 h-8 rounded-full"
					/>
					<div className="flex flex-col text-xs md:text-sm justify-center items-start">
						<Link
							to={`${import.meta.env.VITE_API_URL}/user/${data.page.creator.username}`}
							className="hover:underline"
						>
							<p className="px-1 font-bold tracking-wide">
								@{data.page.creator.username}&nbsp;({data.page.creator.name})
							</p>
						</Link>
						<p className="px-1">
							UpdateAt&nbsp;
							{format(new Date(data.page.updatedAt), "yyyy/MM/dd")}
							&nbsp;CreateAt&nbsp;
							{format(new Date(data.page.createdAt), "yyyy/MM/dd")}
						</p>
					</div>
				</div>
				<div className="mt-2">
					<h2 className="text-2xl font-bold text-[#094067] py-2 md:text-3xl">
						{title}
					</h2>
					<div className="flex flex-col">
						<BlogTagList id={id} />
					</div>
				</div>
				<div className="markdown-body znc py-12 bg">
					<ReactMarkdown
						remarkPlugins={[remarkGfm]}
						rehypePlugins={[rehypeRaw]}
					>
						{formatVariable(
							formatTableTime(formatTableDate(data.page.revision.body)),
						)}
					</ReactMarkdown>
				</div>
			</div>
		</div>
	);
};

export default Component;
