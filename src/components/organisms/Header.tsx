import { List, MagnifyingGlass, X } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "@/assets/logo.svg";
import IconButton from "@/components/atoms/IconButton";
import SearchBox from "@/components/atoms/SearchBox";
import NavigationMenu from "@/components/organisms/NavigationMenu";

const Component = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);

	return (
		<header className="bg-[#fffffe] py-1 md:py-2 border-b border-[#5f6c7b]">
			<div className="max-w-7xl mx-auto">
				{!isSearchOpen && (
					<div className="px-2 flex items-center justify-between">
						<div className="flex items-center">
							<div className="block md:hidden mr-2 md:mr-0">
								<IconButton
									Icon={List}
									aria_label="HamburgerMenuButton"
									onClick={() => setIsMenuOpen(!isMenuOpen)}
								/>
							</div>
							<Link
								to="/"
								className="cursor-pointer mr-0 md:mr-2"
								aria-label="Logo"
							>
								<img
									src={logo}
									alt="Logo"
									className="w-10 h-10 hover:opacity-60"
								/>
							</Link>
							<div className="hidden md:flex">
								<SearchBox />
							</div>
						</div>
						<div className="flex items-center">
							<div className="block md:hidden">
								<IconButton
									Icon={MagnifyingGlass}
									aria_label="SearchButton"
									onClick={() => setIsSearchOpen(!isSearchOpen)}
								/>
							</div>
							<button
								type="button"
								className="ml-2 border border-[#005694] text-[#005694] px-4 py-2 rounded hover:bg-[#005694] hover:text-[#fffffe] hover:underline"
								onClick={() => {}}
							>
								Wiki
							</button>
						</div>
					</div>
				)}
				{isSearchOpen && (
					<div className="px-2 flex items-center justify-between">
						<div className="flex items-center">
							<IconButton
								Icon={X}
								aria_label="CloseButton"
								onClick={() => setIsSearchOpen(false)}
							/>
						</div>
						<SearchBox />
					</div>
				)}
				{isMenuOpen && (
					<div
						className="fixed w-full top-0 left-0 h-screen z-10 bg-[#5f6c7b] bg-opacity-90"
						onClick={() => setIsMenuOpen(false)}
						onKeyUp={(e) => {
							if (e.key === "Escape") setIsMenuOpen(false);
						}}
					>
						<div className="animate-slide-in-left w-3/5 bg-[#fffffe] h-full px-2 overflow-y-auto">
							<NavigationMenu />
						</div>
						<div className="fixed top-0 right-0 w-2/5 h-full" />
					</div>
				)}
			</div>
		</header>
	);
};

export default Component;
