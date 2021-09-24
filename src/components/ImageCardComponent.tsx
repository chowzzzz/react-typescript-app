import React from "react";
import image from "../assets/image.jpg";
import phone from "../assets/phone.svg";
import category from "../assets/category.png";
import shop from "../assets/icon-24-shop.svg";
import { User } from "../interface";

interface Props {
	user?: User;
}

const ImageCardComponent = ({ user }: Props) => {
	let categoryText = "";

	if (user) {
		let tmp = user.company.bs.replace(/(^\w|\s\w)/g, (m) =>
			m.toUpperCase()
		);
		const catArray = tmp.split(" ");
		categoryText = catArray.join(` • `);
	}

	return (
		<div className="w-4/5 mb-0 md:w-3/5 lg:w-2/5 h-5/6 md:h-96 my-10 md:my-0 xl:w-1/3 bg-white rounded shadow-2xl">
			{/* image */}
			<div>
				<img
					src={image}
					alt="User"
					className="object-cover h-40 w-full"
				/>
			</div>

			{/* content */}

			<div className="p-7">
				{/* name */}
				<div className="text-lg font-bold mb-6">{user?.name}</div>

				{/* phone */}
				<div className="flex mb-6">
					<div className="mr-4">
						<img src={phone} alt="Phone" />
					</div>

					<div className="text-sm">{user?.phone.split(" ")[0]}</div>
				</div>
				{/* category */}
				<div className="flex mb-6">
					<div className="mr-4">
						<img src={category} alt="Category" className="w-6" />
					</div>

					<div className="text-sm">{categoryText}</div>
				</div>
				{/* shop */}
				<div className="flex">
					<div className="mr-4">
						<img src={shop} alt="Shop" />
					</div>

					<div className="text-sm">
						{user?.address.street}, {user?.address.suite},{" "}
						{user?.address.city}{" "}
						{user?.address.zipcode.split("-")[0]}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImageCardComponent;
