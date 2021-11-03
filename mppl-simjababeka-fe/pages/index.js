import NonLoginLayout from "@/layouts/NonLoginLayout";
import { Card, CardImages, CardContent } from "@/components/surfaces/Card";

function HomepageLayouts() {
	return (
		<div>
			<Card>
				<CardImages src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg" />
				<CardContent>Hello world!</CardContent>
			</Card>
		</div>
	);
}

HomepageLayouts.getLayout = (page) => {
	return <NonLoginLayout>{page}</NonLoginLayout>;
};

export default HomepageLayouts;
