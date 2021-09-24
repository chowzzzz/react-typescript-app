import React from "react";

const LoadingCardComponent = () => {
	return (
		<div className="w-4/5 md:w-3/5 lg:w-2/5 h-5/6 md:h-96 my-10 md:my-0 xl:w-1/3 bg-white rounded shadow-2xl p-6 overflow-auto">
			{/* title */}
			<div className="h-7 bg-gray-200 rounded animate-pulse mb-6"></div>

			{/* description */}
			<div className="h-5 bg-gray-200 rounded animate-pulse mb-4"></div>

			{/* items */}
			<div>
				<div className="border border-gray-100 rounded-sm p-3 mb-3">
					<div className="h-7 w-1/3 bg-gray-200 rounded animate-pulse"></div>
				</div>
				<div className="border border-gray-100 rounded-sm p-3 mb-3">
					<div className="h-7 w-1/3 bg-gray-200 rounded animate-pulse"></div>
				</div>
				<div className="border border-gray-100 rounded-sm p-3 mb-3">
					<div className="h-7 w-1/3 bg-gray-200 rounded animate-pulse"></div>
				</div>
				<div className="border border-gray-100 rounded-sm p-3 mb-3">
					<div className="h-7 w-1/3 bg-gray-200 rounded animate-pulse"></div>
				</div>
				<div className="border border-gray-100 rounded-sm p-3 mb-3">
					<div className="h-7 w-1/3 bg-gray-200 rounded animate-pulse"></div>
				</div>
			</div>
		</div>
	);
};

export default LoadingCardComponent;
