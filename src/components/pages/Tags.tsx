import TagList from "@/components/molecules/TagList";
import NavigationMenu from "@/components/organisms/NavigationMenu";
import RecommendedArticles from "@/components/organisms/RecommendedArticles";
import UserProfile from "@/components/organisms/UserProfile";
import useSWR from "swr";

const Component = () => {
	const { data: tags } = useSWR("/_api/tags.list");

	return (
		<div className="p-0 md:p-2 max-w-7xl mx-auto">
			<div className="grid grid-cols-12 gap-4 px-2 md:p-0">
				<div className="hidden md:block md:col-span-3 lg:col-span-2">
					<NavigationMenu />
				</div>
				<div className="col-span-12 md:col-span-9 lg:col-span-7 mb-12">
					<TagList tags={tags?.data || []} />
				</div>
				<div className="hidden lg:col-span-3 lg:block">
					<UserProfile />
					<RecommendedArticles />
				</div>
			</div>
		</div>
	);
};

export default Component;
