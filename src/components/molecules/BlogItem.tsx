import BlogTagList from "@/components/molecules/BlogTagList";
import { ChatDots, Heart, PawPrint, Tag } from "@phosphor-icons/react";
import { format } from "date-fns";
import type React from "react";
import { Link, useNavigate } from "react-router-dom";
import useSWR from "swr";

type Props = {
	id: string;
	user_id: string;
	created_at: Date;
	updated_at: Date;
	title: string;
	likes: number;
	commentCount: number;
	seenUsersCount: number;
};

const Component: React.FC<Props> = ({
	id,
	user_id,
	created_at,
	updated_at,
	title,
	likes,
	commentCount,
	seenUsersCount,
}) => {
	const userNavigate = useNavigate();
	const handleClick = () => userNavigate(`/${id}`);

	const { data, error } = useSWR(
		`/_api/v3/users/list?userIds=${user_id || ""}`,
	);

	if (error) return <div>Error</div>;
	if (!data) return <div>Loading...</div>;

	const username = data.users[0]?.username || "unknown";
	const name = data.users[0]?.name || "unknown";
	const imageUrlCached =
		data.users[0]?.imageUrlCached || "/images/icons/user.svg";

	return (
		<button type="button" onClick={handleClick} className="w-full">
			<div className="bg-[#fffffe] p-4 rounded hover:cursor-pointer group">
				<div className="flex items-center space-x-1">
					<img
						src={import.meta.env.VITE_API_URL + imageUrlCached}
						alt="user"
						className="w-8 h-8 rounded-full"
					/>
					<div className="flex flex-col text-xs md:text-sm justify-center items-start">
						<Link
							to={`${import.meta.env.VITE_API_URL}/user/${username}`}
							className="hover:underline"
							onClick={(e) => e.stopPropagation()}
						>
							<p className="px-1 font-bold tracking-wide">
								@{username}&nbsp;({name})
							</p>
						</Link>
						<p className="px-1">
							UpdateAt&nbsp;{format(updated_at, "yyyy/MM/dd")}
							&nbsp;CreateAt&nbsp;
							{format(created_at, "yyyy/MM/dd")}
						</p>
					</div>
				</div>
				<div className="md:px-10">
					<h2 className="py-2 text-base md:text-lg lg:text-xl text-[#094067] break-all text-justify font-bold line-clamp-3 group-hover:text-Highlight">
						{title}
					</h2>
					<div>
						<BlogTagList id={id} />
						<div className="flex justify-start items-center space-x-2">
							<div className="w-4">
								<Heart />
							</div>
							<span className="text-sm">{likes}</span>
							<div className="w-4">
								<ChatDots />
							</div>
							<span className="text-sm">{commentCount}</span>
							<div className="w-4">
								<PawPrint />
							</div>
							<span className="text-sm">{seenUsersCount}</span>
						</div>
					</div>
				</div>
			</div>
		</button>
	);
};

export default Component;
