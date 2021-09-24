import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useParams, useHistory } from "react-router";
import { User, Post } from "../interface";
import ImageCardComponent from "../components/ImageCardComponent";
import CardComponent from "../components/CardComponent";
import LoadingCardComponent from "../components/LoadingCardComponent";
import LoadingImageCardComponent from "../components/LoadingImageCardComponent";

interface ParamTypes {
	id: string;
}

const UserDetailsPage = () => {
	const { id } = useParams<ParamTypes>();
	const [user, setUser] = useState<User>();
	const [userLoading, setUserLoading] = useState<boolean>(false);
	const [posts, setPosts] = useState<Post[]>();
	const [postLoading, setPostLoading] = useState<boolean>(false);
	const [noOfPosts, setNoOfPosts] = useState<number>();

	const history = useHistory();

	useEffect(() => {
		setUserLoading(true);
		setPostLoading(true);
		axios
			.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res: AxiosResponse) => {
				setUserLoading(false);
				setUser(res.data);
			});

		axios
			.get<Post[]>(
				`https://jsonplaceholder.typicode.com/posts?userId=${id}`
			)
			.then((res: AxiosResponse) => {
				setPostLoading(false);
				setNoOfPosts(res.data.length);
				setPosts(res.data);
			});
	}, []);

	return (
		<div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-200 md:px-20 lg:px-0 md:gap-3 lg:gap-6">
			<button
				className="mt-10 mr-5 md:mt-0 p-2 bg-gray-600 text-white rounded text-xs uppercase font-semibold align-top"
				onClick={() => history.goBack()}
			>
				Back
			</button>
			{userLoading ? (
				<LoadingImageCardComponent />
			) : (
				<ImageCardComponent user={user} />
			)}

			{postLoading ? (
				<LoadingCardComponent />
			) : (
				<CardComponent
					title={`${user?.name.split(" ")[0]}'s' Posts`}
					description={`${noOfPosts} posts`}
					posts={posts}
				/>
			)}
		</div>
	);
};

export default UserDetailsPage;
