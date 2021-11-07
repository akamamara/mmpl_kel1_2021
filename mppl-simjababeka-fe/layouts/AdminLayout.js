import * as React from "react";
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
import Link from 'next/link'
import { DrawerList } from '@/utils/list/NavbarList'

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    })
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
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

const useStyles = makeStyles({
  Drawer: {
    backgroundColor: "#AB3C35"
  },
  AppBar: {
    backgroundColor: "white"
  },
  DrawerButton: {
    backgroundColor: '#EA8983',
    borderRadius: '8px',
    marginBottom: '0.3rem',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    width: 'auto',
    marginRight: '5px',
    marginLeft: '5px'
  }
}, { name: "MuiExample_Component" });

export default function AdminLayout({children}) {
    const theme = useTheme();
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);  
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
    <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} classes={{root: classes.AppBar}} sx={{ boxShadow: 0 }}> 
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
                <Typography variant="h6" noWrap component="div" color="primary" sx={{ flexGrow: 1, visibility: 'hidden' }}>
                    Hidden
                </Typography>
                <Typography variant="string" noWrap component="div" color="primary" sx={{ marginRight: "1%" }}>
                    Nama
                </Typography>
                <IconButton
                    color="secondary"
                    aria-label="open drawer"
                    edge="end"
                >
                    <Avatar alt="profile picture" src="https://via.placeholder.com/150/FFFF00/000000C/O https://placeholder.com/"></Avatar>
                </IconButton>
            </Toolbar>
        </AppBar>
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box"
                }
            }}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{paper: classes.Drawer}}
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
                {
                  DrawerList.map(item => (
                    <Link href={item.endpoint} passHref key={item.id}>
                      <ListItemButton classes={{root: classes.DrawerButton}}>
                          <ListItemText primary={item.text} />
                      </ListItemButton>
                    </Link>
                  ))
                }
        </List>
        <Divider />
        </Drawer>
        <Main open={open} >
        <DrawerHeader />
            {children}
        </Main>
    </Box>
  );
}
