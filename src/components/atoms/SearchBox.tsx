import type React from "react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { MagnifyingGlass } from "@phosphor-icons/react";
import IconButton from "./IconButton";

const Component: React.FC = () => {
	const [searchParams] = useSearchParams();
	const q = searchParams.get("q") || "";
	const userNavigate = useNavigate();
	const [searchText, setSearchText] = useState<string>(q);

	const handleSearch = () => {
		if (searchText === "") return;
		userNavigate(`/search?q=${searchText}`);
	};

	return (
		<div className="flex items-center rounded border border-[#094067] group w-full md:w-96">
			<input
				type="text"
				placeholder="Search"
				className="px-2 placeholder-[#5f6c7b] outline-none leading-3 w-full"
				value={searchText}
				onChange={(e) => setSearchText(e.currentTarget.value)}
				onKeyDown={(e) => {
					if (e.key === "Enter") handleSearch();
				}}
			/>
			<IconButton
				Icon={MagnifyingGlass}
				aria_label="SearchButton"
				onClick={handleSearch}
				className="bg-[#fffffe] group-hover:bg-[#094067] group-hover:bg-opacity-100 group-hover:text-[#fffffe]"
			/>
		</div>
	);
};

export default Component;
