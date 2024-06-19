import notFonud from "@/assets/NotFound.svg";
import HomeLayout from "../templates/HomeLayout";

const Component = () => {
	return (
		<HomeLayout>
			<div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
				<img src={notFonud} alt="Not Found" className="w-64 h-64" />
				<p className="text-[#5f6c7b] font-bold text-center py-4">
					Page Not Found
					<span className="pl-2 text-4xl font-bold">404</span>
				</p>
			</div>
		</HomeLayout>
	);
};

export default Component;
