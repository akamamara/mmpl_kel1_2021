import NonLoginLayout from "@/layouts/NonLoginLayout";
import { Heading2 } from "@/components/typography/Heading";
import { Body1 } from "@/components/typography/Body";
import defaultTheme from "@/styles/global_mui";

import { Box } from "@mui/material";

function DetailPengumumanaPage() {
	const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique, eros vitae feugiat ullamcorper, eros risus volutpat risus, non fringilla ipsum dui et ligula. Quisque non nibh metus. Nam ut consequat lorem. Donec tincidunt eget purus in ornare. Nam non ex pellentesque, egestas urna at, volutpat nibh. Duis id lacus consectetur, faucibus justo in, elementum mi. Praesent in auctor mi. Aliquam molestie ante a libero imperdiet porttitor. Cras condimentum iaculis facilisis. Aenean lacinia imperdiet nulla eget pellentesque. Vivamus congue ut ipsum quis sagittis. Nunc quis arcu facilisis libero iaculis ultricies. Ut pharetra enim ex, non interdum mi luctus quis. Mauris vestibulum congue dolor a laoreet.\nProin ut sagittis diam. Pellentesque magna urna, vulputate quis elit condimentum, lacinia lobortis dolor. Sed eu ex convallis, sagittis elit quis, lacinia mauris. Pellentesque ultrices neque urna, eu pretium odio ultrices quis. Cras in erat in risus posuere mollis eget id risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi fermentum metus vitae vehicula posuere.\nAenean lobortis consectetur dignissim. In non turpis neque. Ut vitae condimentum lacus. Duis sit amet erat lacinia, euismod augue et, feugiat dolor. Nullam imperdiet tellus iaculis risus ultrices bibendum. Proin mattis libero sed nulla pellentesque ullamcorper. Mauris eros justo, pellentesque sed mattis ac, aliquam a nisl. Nulla sit amet commodo dolor. Mauris eget ultricies dui. Pellentesque vel metus nisi. Cras vestibulum, nulla vel scelerisque convallis, odio augue tempus nulla, at pharetra mauris urna et sem. Suspendisse feugiat, quam quis lobortis commodo, magna est luctus enim, vitae vestibulum eros enim sed nibh. Nulla facilisi. Maecenas blandit feugiat imperdiet. Phasellus augue massa, aliquam at placerat scelerisque, vestibulum vitae tortor. Nunc vulputate egestas commodo.`;

	return (
		<>
			<Heading2 sx={{ marginTop: defaultTheme.spacing(10) }}>Judul</Heading2>
			<Box sx={{ width: "70%" }}>
				{content.split("\n").map((item, index) => (
					<Body1 key={index} paragraph>
						{item}
					</Body1>
				))}
			</Box>
		</>
	);
}

DetailPengumumanaPage.getLayout = (page) => {
	return <NonLoginLayout>{page}</NonLoginLayout>;
};

export default DetailPengumumanaPage;
