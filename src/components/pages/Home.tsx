import notFonud from "@/assets/NotFound.svg";

const Component = () => {
	return (
		<div className="p-0 md:p-2 max-w-7xl mx-auto">
			<div className="grid grid-cols-12 gap-4 px-2 md:p-0">
				<div className="hidden md:block md:col-span-3 lg:col-span-2">
					{/* <NavigationMenu /> */}
				</div>
				<div className="col-span-12 md:col-span-9 lg:col-span-7 mb-12">
					<div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
						<img src={notFonud} alt="Not Found" className="w-64 h-64" />
						<p className="text-SubHeadline font-bold text-center py-4">
							Page Not Found
							<span className="pl-2 text-4xl font-bold">404</span>
						</p>
					</div>
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
