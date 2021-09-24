import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { User } from "../interface";
import CardComponent from "../components/CardComponent";
import LoadingCardComponent from "../components/LoadingCardComponent";

const UsersPage = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [userLoading, setUserLoading] = useState<boolean>(false);

	useEffect(() => {
		setUserLoading(true);
		axios
			.get<User[]>("https://jsonplaceholder.typicode.com/users")
			.then((res: AxiosResponse) => {
				setUserLoading(false);
				setUsers(res.data);
			})
			.catch((err) => {
				console.error(`getUsers: ${err}`);
			});
	}, []);

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-200">
			{userLoading ? (
				<LoadingCardComponent />
			) : (
				<CardComponent title="Users" users={users} />
			)}
		</div>
	);
};

export default UsersPage;
