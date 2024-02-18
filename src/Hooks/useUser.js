import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetUser = () => {
	const [loading, setLoading] = useState(false);
	const [User, setUser] = useState([]);

	useEffect(() => {
		const getUser = async () => {
			setLoading(true);
			try {
				const res = await fetch("https://auto-server-production-a245.up.railway.app/api/users");
				const data = await res.json();
				if (data.error) {
					throw new Error(data.error);
				}
				setUser(data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		getUser();
	}, []);

	return { loading, User };
};
export default useGetUser;