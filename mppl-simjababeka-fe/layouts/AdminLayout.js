import * as React from "react";
import { useRouter } from "next/router";

import { styled, useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Avatar, ListItemButton } from "@mui/material";
import Link from "next/link";
import { DrawerList } from "@/utils/list/NavbarList";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Logout from "@mui/icons-material/Logout";

import { Subtitle2, Subtitle1 } from "@/components/typography/Heading";
import LoadingSection from "@/sections/LoadingSection";
import defaultTheme from "@/styles/global_mui";

import { useSelector } from "react-redux";
import { refreshTokenLogin } from "@/utils/api/user";
import { dispatch } from "@/utils/redux/store";
import { setLogout } from "@/utils/redux/slice/user";
import EnumRole from "@/utils/helper/EnumRole";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
	({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create("margin", {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	})
);

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: "flex-end",
}));

// const useStyles = makeStyles((theme) => ({
//   Drawer: {
//     backgroundColor: "#AB3C35"
//   },
//   AppBar: {
//     backgroundColor: "white"
//   }
// }));

const useStyles = makeStyles(
	{
		Drawer: {
			backgroundColor: "#AB3C35",
		},
		AppBar: {
			backgroundColor: "white",
		},
		DrawerButton: {
			backgroundColor: "#EA8983",
			borderRadius: "8px",
			marginBottom: "0.3rem",
			boxShadow:
				"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
			width: "auto",
			marginRight: "5px",
			marginLeft: "5px",
		},
	},
	{ name: "MuiExample_Component" }
);

export default function AdminLayout({ children }) {
	const router = useRouter();
	const theme = useTheme();
	const classes = useStyles();

	const [open, setOpen] = React.useState(true);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const openMenu = Boolean(anchorEl);

	const authState = useSelector((state) => state.user.authenticated);
	const role = EnumRole(useSelector((state) => state.user.role.user_type));
	const loadingState = useSelector((state) => state.loading);

	const currentUser = {
		name: useSelector((state) =>
			role === "guru"
				? state.user.currentUserGuru.nama_guru
				: state.user.currentUserSiswa.nama_siswa
		),
		picture: useSelector((state) =>
			role === "guru"
				? state.user.currentUserGuru.foto_guru
				: state.user.currentUserSiswa.foto_siswa
		),
	};

	console.log(currentUser);

	React.useEffect(() => {
		if (!authState) router.replace("/");
	}, [authState]);
	React.useEffect(() => refreshTokenLogin(), []);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			{loadingState ? <LoadingSection /> : null}
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<AppBar
					position="fixed"
					open={open}
					classes={{ root: classes.AppBar }}
					sx={{ boxShadow: 0, zIndex: 900 }}
				>
					<Toolbar>
						<IconButton
							color="secondary"
							aria-label="open drawer"
							onClick={handleDrawerOpen}
							edge="start"
							sx={{ mr: 2, ...(open && { display: "none" }), flexGrow: 0 }}
						>
							<MenuIcon />
						</IconButton>
						<Typography
							variant="h6"
							noWrap
							component="div"
							color="primary"
							sx={{ flexGrow: 1, visibility: "hidden" }}
						>
							Hidden
						</Typography>
						<Subtitle2>
							{!!currentUser.name
								? currentUser.name
								: !!role
								? role.toUpperCase()
								: "USER"}
						</Subtitle2>
						<IconButton
							color="secondary"
							aria-label="open drawer"
							edge="end"
							onClick={handleClick}
						>
							<Avatar
								alt={`Foto profil ${currentUser.name}`}
								src={
									!!currentUser.picture
										? currentUser.picture
										: "https://via.placeholder.com/150/FFFF00/000000C/O https://placeholder.com/"
								}
							></Avatar>
						</IconButton>
					</Toolbar>
				</AppBar>
				<Menu
					anchorEl={anchorEl}
					open={openMenu}
					onClose={handleClose}
					// onClick={handleClose}
					PaperProps={{
						elevation: 0,
						sx: {
							overflow: "visible",
							filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
							mt: 1.5,
							"& .MuiAvatar-root": {
								width: 32,
								height: 32,
								ml: -0.5,
								mr: 1,
							},
							"&:before": {
								content: '""',
								display: "block",
								position: "absolute",
								top: 0,
								right: 14,
								width: 10,
								height: 10,
								bgcolor: "background.paper",
								transform: "translateY(-50%) rotate(45deg)",
								zIndex: 0,
							},
						},
					}}
					transformOrigin={{ horizontal: "right", vertical: "top" }}
					anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
				>
					<MenuItem>
						<ListItemIcon>
							<AddAPhotoIcon fontSize="small" />
						</ListItemIcon>
						<Subtitle2>Ubah Foto</Subtitle2>
					</MenuItem>
					<MenuItem onClick={() => dispatch(setLogout())}>
						<ListItemIcon>
							<Logout fontSize="small" />
						</ListItemIcon>
						<Subtitle2>Logout</Subtitle2>
					</MenuItem>
				</Menu>
				<Drawer
					sx={{
						width: drawerWidth,
						flexShrink: 0,
						zIndex: 910,
						"& .MuiDrawer-paper": {
							width: drawerWidth,
							boxSizing: "border-box",
						},
					}}
					variant="persistent"
					anchor="left"
					open={open}
					classes={{ paper: classes.Drawer }}
				>
					<DrawerHeader>
						<IconButton onClick={handleDrawerClose}>
							{theme.direction === "ltr" ? (
								<ChevronLeftIcon />
							) : (
								<ChevronRightIcon />
							)}
						</IconButton>
					</DrawerHeader>
					<Divider />
					<List>
						{DrawerList.map((item) => {
							if (
								role === "siswa" &&
								(item.text === "Pengumuman" ||
									item.text === "Berita" ||
									item.text === "Galeri" ||
									item.text === "Mata Pelajaran")
							)
								return null;
							else
								return (
									<Link href={item.endpoint} passHref key={item.id}>
										<ListItemButton classes={{ root: classes.DrawerButton }}>
											<ListItemText>
												<Subtitle1
													sx={{
														"&:hover": {
															color: defaultTheme.palette.common.white,
														},
													}}
												>
													{item.text}
												</Subtitle1>
											</ListItemText>
										</ListItemButton>
									</Link>
								);
						})}
					</List>
					<Divider />
				</Drawer>
				<Main open={open}>
					<DrawerHeader />
					{children}
				</Main>
			</Box>
		</>
	);
}
