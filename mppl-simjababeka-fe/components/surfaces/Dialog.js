import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useSelector } from "react-redux";
import EnumRole from "@/utils/helper/EnumRole";

export default function FormDialog({
	dialogHandler,
	open,
	title,
	onSubmitData,
	children,
}) {
	//   const [open, setOpen] = React.useState(false);

	//   const handleClickOpen = () => {
	//     setOpen(true);
	//   };

	//   const handleClose = () => {
	//     setOpen(false);
	//   };

	return (
		<div>
			{/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
			<Dialog
				open={open}
				onClose={dialogHandler.handleClose}
				fullWidth
				maxWidth="md"
			>
				<DialogTitle>{title}</DialogTitle>
				<DialogContent>
					{/* <DialogContentText>{title}</DialogContentText> */}
					{children}
				</DialogContent>
				<DialogActions>
					<Button onClick={dialogHandler.handleClose}>Cancel</Button>
					<Button
						onClick={
							onSubmitData
								? () => {
										dialogHandler.handleSubmit(onSubmitData);
										// dialogHandler.handleClose();
								  }
								: () => {
										dialogHandler.handleSimpan();
								  }
						}
					>
						Simpan
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
