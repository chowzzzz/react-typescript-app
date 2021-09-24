import React from "react";
import { Items } from "../interface";

interface Props {
	title: string;
	description?: string;
	items: Array<Items>;
	handleClick: (id: number) => void;
}

const CardComponent = ({ title, description, items, handleClick }: Props) => {
	return (
		<div className="w-4/5 md:w-3/5 lg:w-2/5 h-5/6 md:h-96 my-10 md:my-0 xl:w-1/3 bg-white rounded shadow-2xl p-6 overflow-auto">
			{/* title */}
			<div className="text-lg font-bold mb-6">{title}</div>

			{/* description */}
			<div className="font-semibold text-sm uppercase text-gray-600 mb-4">
				{description}
			</div>

			{/* items */}
			<div>
				{items.map((item) => (
					<div
						className="border border-gray-100 rounded-sm p-3 mb-3"
						key={item.id}
						onClick={() => handleClick(item.id)}
					>
						<div className="font-bold">{item.title}</div>
						<div className="text-sm text-gray-600">{item.body}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CardComponent;
