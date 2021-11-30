import { useRouter } from "next/router";
import { useEffect } from "react";

import AdminLayout from "@/layouts/AdminLayout";

function HomePageAdmin() {
	const router = useRouter();
	useEffect(() => {
		router.replace({ pathname: "/admin/profil/", query: router.query });
	}, []);
	return <></>;
}

HomePageAdmin.getLayout = (page) => {
	return <AdminLayout>{page}</AdminLayout>;
};

export default HomePageAdmin;
