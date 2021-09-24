import React from "react";

const LoadingImageCardComponent = () => {
	return (
		<div className="w-4/5 mb-0 md:w-3/5 lg:w-2/5 h-5/6 md:h-96 my-10 md:my-0 xl:w-1/3 bg-white rounded shadow-2xl">
			{/* image */}
			<div className="h-40 bg-gray-200 animate-pulse"></div>

			{/* content */}

			<div className="p-7">
				{/* name */}
				<div className="h-7 bg-gray-200 rounded mb-6 animate-pulse"></div>

				{/* phone */}
				<div className="flex mb-5">
					<div className="h-6 bg-gray-200 rounded-full w-6 mr-4 animate-pulse"></div>

					<div className="h-6 flex-grow bg-gray-200 rounded animate-pulse"></div>
				</div>
				{/* category */}
				<div className="flex mb-6">
					<div className="h-6 bg-gray-200 rounded-full w-6 mr-4 animate-pulse"></div>

					<div className="h-6 flex-grow bg-gray-200 rounded animate-pulse"></div>
				</div>
				{/* shop */}
				<div className="flex mb-6">
					<div className="h-6 bg-gray-200 rounded-full w-6 mr-4 animate-pulse"></div>

					<div className="h-6 flex-grow bg-gray-200 rounded animate-pulse"></div>
				</div>
			</div>
		</div>
	);
};

export default LoadingImageCardComponent;
