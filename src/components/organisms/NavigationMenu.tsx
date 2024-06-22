import type { FC } from "react";
// import useSWR from 'swr';

import NavigationList from "@/components/molecules/NavigationList";
import TagList from "@/components/molecules/TagList";
import { categories, navigation } from "@/constants/links";

const Component: FC = () => {
	// const { data: tags } = useSWR(`/_api/tags.list`);

	return (
		<>
			<NavigationList navigation={navigation} />
			<NavigationList title="カテゴリー" navigation={categories} />
			<TagList tags={[]} />
		</>
	);
};

export default Component;
