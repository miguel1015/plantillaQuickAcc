import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Collapse from "@mui/material/Collapse";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  Avatar,
  Badge,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import myTheme from "../../theme";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  marginLeft: open ? drawerWidth : 0,
  width: open ? `calc(100% - ${drawerWidth}px)` : "100%",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  backgroundColor: theme.palette.primary.main,
  "& .MuiDrawer-paper": {
    backgroundColor: myTheme.palette.primary.main,
    color: myTheme.palette.secondary.main,
  },
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      backgroundColor: myTheme.palette.primary.main,
      color: myTheme.palette.secondary.main,
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      backgroundColor: myTheme.palette.primary.main,
      color: myTheme.palette.secondary.main,
    },
  }),
}));

export default function MiniDrawer({ children }: any) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [inboxOpen, setInboxOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setInboxOpen(false);
  };

  const toggleInbox = () => {
    setInboxOpen((prev) => !prev);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Array de módulos y submodules
  const menuItems = [
    {
      label: "Productos",
      icon: <InboxIcon />,
      subItems: [{ label: "Carnes" }, { label: "Subitem 2" }],
    },
    {
      label: "Starred",
      icon: <InboxIcon />,
      subItems: [],
    },
    {
      label: "Send email",
      icon: <MailIcon />,
      subItems: [],
    },
    {
      label: "Drafts",
      icon: <MailIcon />,
      subItems: [],
    },
    {
      label: "Other",
      icon: <MailIcon />,
      subItems: [],
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              { marginRight: 5, color: "white" },
              open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <MenuItem>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Brightness4Icon />
            </IconButton>
          </MenuItem>
          <MenuItem>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
          </MenuItem>
          <MenuItem>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="secondary"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </MenuItem>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://wallpapers.com/images/high/4k-ultra-hd-naruto-close-up-portrait-elmqkatj1ig95l07.webp"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon sx={{ color: "white" }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map(({ label, icon, subItems }) => (
            <React.Fragment key={label}>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  onClick={subItems.length > 0 ? toggleInbox : undefined}
                  sx={{
                    minHeight: 48,
                    px: 2.5,
                    justifyContent: open ? "initial" : "center",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      justifyContent: "center",
                      mr: open ? 3 : "auto",
                      color: "white",
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={label}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                  {subItems.length > 0 &&
                    (open ? (
                      inboxOpen ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      )
                    ) : null)}
                </ListItemButton>
              </ListItem>
              {subItems.length > 0 && (
                <Collapse in={inboxOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {subItems.map((subtext) => (
                      <ListItem
                        key={subtext?.label}
                        disablePadding
                        sx={{
                          pl: 4,
                          backgroundColor: "#dd685e",
                          "&:hover": {
                            backgroundColor: "#efb7b2",
                          },
                        }}
                      >
                        <ListItemButton
                          sx={{
                            minHeight: 48,
                            px: 2.5,
                            justifyContent: open ? "initial" : "center",
                          }}
                        >
                          <ListItemText
                            primary={subtext?.label}
                            sx={{ opacity: open ? 1 : 0 }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
