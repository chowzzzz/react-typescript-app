import React from "react";
import { useHistory } from "react-router";
import { User, Post } from "../interface";

interface Props {
	title: string;
	description?: string;
	users?: User[];
	posts?: Post[];
}

const CardComponent = ({ title, description, users, posts }: Props) => {
	const history = useHistory();

	const capFirstLetter = (string: string): string =>
		string.charAt(0).toUpperCase() + string.slice(1);

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
				{users &&
					users?.map((user) => (
						<div
							className="border border-gray-100 rounded-sm p-3 mb-3"
							key={user.id}
							onClick={() => history.push(`/user/${user.id}`)}
						>
							<div className="font-bold">{user.name}</div>
						</div>
					))}
				{posts &&
					posts?.map((post) => (
						<div
							className="border border-gray-100 rounded-sm p-3 mb-3"
							key={post.id}
						>
							<div className="font-bold">
								{capFirstLetter(post.title)}
							</div>
							<div className="text-sm text-gray-600">
								{`${post.body.substring(0, 50)}...`}
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default CardComponent;
