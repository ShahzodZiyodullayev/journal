import React from "react";
import {
  Divider,
  Grid,
  Typography,
  List,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  ListItemButton,
  Collapse,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AlignVerticalCenterOutlinedIcon from "@mui/icons-material/AlignVerticalCenterOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import ApiOutlinedIcon from "@mui/icons-material/ApiOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import BlurOnOutlinedIcon from "@mui/icons-material/BlurOnOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { Link } from "react-router-dom";

function MainLayout(props) {
  const [activeLink, setActiveLink] = React.useState(1);
  const [activePage, setActivePage] = React.useState("");
  const [open, setOpen] = React.useState();
  const [handle, setHandle] = React.useState(false);

  const isActive = (e) => {
    setActivePage(e);
  };
  const active = (e) => {
    setActiveLink(e);
  };

  const handleClick = (e) => {
    setOpen(e);
    if (e === open) {
      setHandle(!handle);
    } else {
      setHandle(true);
    }
  };

  const links = [
    {
      id: 1,
      name: "shakl 1",
      subname: [
        {
          name: "Fanlar (modul) bo'yicha dars soatlarining taqsimlanishi",
          route: "/",
        },
      ],
      icon: <AlignVerticalCenterOutlinedIcon />,
    },
    {
      id: 2,
      name: "shakl 2",
      subname: [{ name: "Dars jadvali", route: "/shakl2" }],
      icon: <AlternateEmailOutlinedIcon />,
    },
    {
      id: 3,
      name: "shakl 3",
      subname: [{ name: "O'quvchilar haqida ma'lumot", route: "/shakl3" }],
      icon: <ApiOutlinedIcon />,
    },
    {
      id: 4,
      name: "shakl 4",
      subname: [
        { name: "O'quvchilarni baholash, davomat", route: "/shakl4" },
        { name: "O'tilgan mashg'ulotlar mavzusi", route: "/shakl5" },
      ],
      icon: <AutorenewOutlinedIcon />,
    },
    {
      id: 5,
      name: "shakl 5",
      subname: [
        { name: "Xavfsizlik texnikasi", route: "/shakl6" },
        { name: "Qoidalar bo'yicha ko'rsatmalar", route: "/shakl7" },
      ],
      icon: <BlurOnOutlinedIcon />,
    },
  ];
  return (
    <>
      <Grid container>
        <Grid
          item
          sm={4}
          md={3}
          lg={2}
          backgroundColor="#1B1C1E"
          height="100vh"
        >
          <Grid p={2} display="flex" alignItems="center">
            <img
              src={require("../assets/img/graduation.png")}
              width={30}
              alt=""
            />
            <Typography ml={2} fontSize="20px" color="#8B8D93">
              <b
                style={{
                  color: "#F8F8F9",
                  fontSize: "20px",
                  fontWeight: "100",
                }}
              >
                Online
              </b>
              Journal
            </Typography>
          </Grid>
          <Grid>
            <Divider variant="middle" color="#BEB9CF" />
          </Grid>
          <Grid>
            <List
              component="nav"
              subheader={
                <ListSubheader
                  component="div"
                  sx={{ background: "#1B1C1E", color: "#8B8D93" }}
                >
                  Menu
                </ListSubheader>
              }
            >
              {links.map((i) => (
                <div key={i.id}>
                  {i.subname ? (
                    <>
                      <Grid
                        onClick={(e) => active(i.id)}
                        style={{
                          color: activeLink === i.id ? "#F8F8F9" : "#BEB9CF",
                          textDecoration: "none",
                          fontSize: "30px",
                        }}
                      >
                        <ListItemButton
                          onClick={(e) => handleClick(i.id)}
                          sx={{
                            borderLeft:
                              activeLink === i.id
                                ? "2px solid #F8F8F9"
                                : "none",
                            "&:hover": {
                              background: "rgba(100, 100, 100, .5)",
                            },
                          }}
                        >
                          <ListItemIcon sx={{ color: "#BEB9CF" }}>
                            {i.icon}
                          </ListItemIcon>
                          <ListItemText sx={{ ml: -2 }}>
                            <Grid
                              justifyContent="space-between"
                              alignItems="center"
                              display="flex"
                            >
                              <Grid>{i.name}</Grid>
                              <Grid display="flex" alignItems="flex-end">
                                {open === i.id && handle ? (
                                  <ExpandLess />
                                ) : (
                                  <ExpandMore />
                                )}
                              </Grid>
                            </Grid>
                          </ListItemText>
                        </ListItemButton>
                      </Grid>
                      {i.subname.map((x) => (
                        <Link
                          onClick={(e) => isActive(x.name)}
                          key={x.name}
                          style={{
                            color: activePage === x.name ? "#F8F8F9" : "#BEB9CF",
                            textDecoration: "none",
                            fontSize: "30px",
                          }}
                          to={x.route}
                        >
                          <Collapse
                            in={open === i.id && handle}
                            timeout="auto"
                            unmountOnExit
                          >
                            <List component="div" disablePadding>
                              <ListItemButton
                                sx={{
                                  pl: 4,
                                  "&:hover": {
                                    background: "rgba(100, 100, 100, .5)",
                                  },
                                }}
                              >
                                <ListItemIcon sx={{ color: "#BEB9CF" }}>
                                  <CircleOutlinedIcon sx={{ fontSize: 15 }} />
                                </ListItemIcon>
                                <ListItemText sx={{ ml: -2 }}>
                                  <Grid fontSize="12px">{x.name}</Grid>
                                </ListItemText>
                              </ListItemButton>
                            </List>
                          </Collapse>
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      onClick={(e) => active(i.id)}
                      style={{
                        color: activeLink === i.id ? "#F8F8F9" : "#BEB9CF",
                        textDecoration: "none",
                        fontSize: "30px",
                      }}
                      to={i.route}
                    >
                      <ListItemButton>
                        <ListItemIcon sx={{ color: "#BEB9CF" }}>
                          {i.icon}
                        </ListItemIcon>
                        <ListItemText sx={{ ml: -2 }}>
                          <Typography fontSize="15px">{i.name}</Typography>
                        </ListItemText>
                      </ListItemButton>
                    </Link>
                  )}
                </div>
              ))}
            </List>
          </Grid>
        </Grid>
        <Grid item sm={8} md={9} lg={10} height="100vh">
          {props.children}
        </Grid>
      </Grid>
    </>
  );
}

export default MainLayout;
