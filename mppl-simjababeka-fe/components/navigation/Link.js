import { Link } from "@mui/material";

function Links({ children, ...rest }) {
	return (
		<p>
			<Link color="common.black" {...rest} sx={{ cursor: "pointer" }}>
				{children}
			</Link>
		</p>
	);
}

export default Links;
