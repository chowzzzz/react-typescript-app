import axios from "axios";
import { Items } from "../interface";

export const getUsers = () => {
	axios
		.get("https://jsonplaceholder.typicode.com/users")
		.then((res) => {
			let newData: Items = {
				id: res.data.id,
				title: res.data.name
			};
			return newData;
		})
		.catch((err) => {
			console.error(`getUsers: ${err}`);
		});
};
