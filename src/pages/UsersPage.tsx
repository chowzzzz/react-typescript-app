import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { Items, UserRes } from "../interface";
import CardComponent from "../components/CardComponent";

interface Props {}

const UsersPage = (props: Props) => {
	const [users, setUsers] = useState<Array<Items>>([]);
	const history = useHistory();

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((res) => {
				let newData: Array<Items> = [];
				res.data.forEach((user: UserRes) => {
					let tmpObj: Items = {
						id: user.id,
						title: user.name
					};
					newData.push(tmpObj);
				});
				setUsers(newData);
			})
			.catch((err) => {
				console.error(`getUsers: ${err}`);
			});
	}, []);

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-200">
			<CardComponent
				title="Users"
				items={users}
				handleClick={(id) => history.push(`/user/${id}`)}
			/>
		</div>
	);
};

export default UsersPage;
