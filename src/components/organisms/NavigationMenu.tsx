import type { FC } from "react";
// import useSWR from 'swr';

import NavigationList from "../molecules/NavigationList";
import TagList from "../molecules/TagList";

import { categories, navigation } from "../../constants/navigation";

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
