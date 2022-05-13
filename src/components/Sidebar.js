import React, { useEffect } from "react";
import {
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
import ApiOutlinedIcon from "@mui/icons-material/ApiOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Sidebar() {
  const [activeLink, setActiveLink] = React.useState(1);
  const [activePage, setActivePage] = React.useState("");
  const [open, setOpen] = React.useState();
  const [handle, setHandle] = React.useState(false);
  const [hide, setHide] = React.useState(true);

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

  const hideSide = () => {
    setHide(!hide);
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
      icon: <ApiOutlinedIcon />,
    },
    {
      id: 2,
      name: "shakl 2",
      subname: [{ name: "Dars jadvali", route: "/shakl2" }],
      icon: <ApiOutlinedIcon />,
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
        {
          name: "O'quvchilarni baholash, davomat/O'tilgan mashg'ulotlar mavzusi",
          route: "/shakl4",
        },
        {
          name: "O'quvchilarni baholash, davomat/O'tilgan mashg'ulotlar mavzus",
          route: "/shakl22",
        },
        {
          name: "O'quvchilarni baholash, davomat/O'tilgan mashg'ulotlar mavzu",
          route: "/shakl23",
        },
        {
          name: "O'quvchilarni baholash, davomat/O'tilgan mashg'ulotlar mavz",
          route: "/shakl24",
        },
        {
          name: "O'quvchilarni baholash, davomat/O'tilgan mashg'ulotlar mav",
          route: "/shakl25",
        },
        {
          name: "O'quvchilarni baholash, davomat/O'tilgan mashg'ulotlar ma",
          route: "/shakl26",
        },
      ],
      icon: <ApiOutlinedIcon />,
    },
    {
      id: 5,
      name: "shakl 5",
      subname: [
        { name: "Mexnat muhofazasi, Xavfsizlik texnikasi", route: "/shakl5" },
        { name: "Qoidalar bo'yicha ko'rsatmalar qaydnomasi", route: "/shakl6" },
      ],
      icon: <ApiOutlinedIcon />,
    },
    {
      id: 6,
      name: "shakl 6",
      subname: [
        {
          name: "Chilangarlik ishi",
          route: "/shakl6",
        },
        {
          name: "O'quv amaliyotda o'quvchilarni baholash, davoma",
          route: "/shakl8",
        },
        {
          name: "O'quv amaliyotda o'quvchilarni baholash, davom",
          route: "/shakl9",
        },
        {
          name: "O'quv amaliyotda o'quvchilarni baholash, davo",
          route: "/shakl10",
        },
        {
          name: "O'quv amaliyotda o'quvchilarni baholash, dav",
          route: "/shakl11",
        },
        {
          name: "O'quv amaliyotda o'quvchilarni baholash, da",
          route: "/shakl12",
        },
        {
          name: "O'quv amaliyotda o'quvchilarni baholash, d",
          route: "/shakl13",
        },
      ],
      icon: <ApiOutlinedIcon />,
    },
    {
      id: 7,
      name: "shakl 7",
      subname: [
        {
          name: "Kurs ishlar qaydnomasi",
          route: "/shakl7",
        },
      ],
      icon: <ApiOutlinedIcon />,
    },
    {
      id: 8,
      name: "shakl 8",
      subname: [
        {
          name: "Ishlab chiqarish va diplom oldi amaliyotlar mavzusi",
          route: "/shakl8",
        },
      ],
      icon: <ApiOutlinedIcon />,
    },
    {
      id: 9,
      name: "shakl 9",
      subname: [
        {
          name: "Ishlab chiqarish va diplom oldi amaliyotlar qaydnomasi",
          route: "/shakl9",
        },
      ],
      icon: <ApiOutlinedIcon />,
    },
    {
      id: 10,
      name: "shakl 10",
      subname: [
        {
          name: "Fan (modul)idan yakuniy attestatsiya natijalari",
          route: "/shakl10",
        },
      ],
      icon: <ApiOutlinedIcon />,
    },
    {
      id: 11,
      name: "shakl 11",
      subname: [
        {
          name: "Kvalifikatsiya bo'yicha amaliy imtihon (taqdimot) natijalari",
          route: "/shakl11",
        },
      ],
      icon: <ApiOutlinedIcon />,
    },
    {
      id: 12,
      name: "shakl 12",
      subname: [
        {
          name: "O'quvchilar o'zlashtirish ko'rsatkichlarining fanlar bo'yicha yakuniy yig'ma qaydnomasi",
          route: "/shakl12",
        },
      ],
      icon: <ApiOutlinedIcon />,
    },
    {
      id: 13,
      name: "shakl 13",
      subname: [
        {
          name: "Bitiruv malakaviy (diplom) ishining himoyasi natijasi",
          route: "/shakl13",
        },
      ],
      icon: <ApiOutlinedIcon />,
    },
    {
      id: 14,
      name: "shakl 14",
      subname: [
        {
          name: "O'quvchilar tomonidan qoldirilgan dars soatlari hisobi",
          route: "/shakl14",
        },
      ],
      icon: <ApiOutlinedIcon />,
    },
    {
      id: 15,
      name: "shakl 15",
      subname: [
        {
          name: "Jurnalning yuritilishi yuzasidan nazoratchilar tomonidan bildirilgan kamchiliklar va takliflar",
          route: "/shakl15",
        },
      ],
      icon: <ApiOutlinedIcon />,
    },
  ];

  useEffect(() => {
    setActivePage(links[0].subname[0].name);
  }, []);

  return (
    <>
      <Grid
        backgroundColor="transparent"
        borderRadius="50%"
        position="absolute"
        width={30}
        height={30}
        m={1.5}
        justifyContent="center"
        alignItems="center"
        display="flex"
        overflow="hidden"
        onClick={hideSide}
      >
        <MenuIcon
          cursor="pointer"
          sx={{ marginLeft: !hide && "23px", color: "black" }}
        />
        <CloseIcon
          cursor="pointer"
          sx={{ marginRight: hide && "24px", color: "#F8F8F9" }}
        />
      </Grid>
      <Grid
        item
        sm={4}
        md={3}
        lg={2}
        backgroundColor="#5E6679"
        height="100vh"
        overflow="scroll"
        sx={{
          overflowX: "hidden",
          display: !hide && "none",
          "::-webkit-scrollbar": {
            width: "7px",
          },
          "::-webkit-scrollbar-thumb": {
            background: "#0288D1",
            borderRadius: "5px",
          },
        }}
      >
        <Grid p={1.5} display="flex" alignItems="center">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              ml={5}
              fontSize="20px"
              color="black"
              sx={{ cursor: "pointer" }}
            >
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
          </Link>
        </Grid>
        <Grid>
          <List
            component="nav"
            subheader={
              <ListSubheader
                component="div"
                sx={{ background: "#5E6679", color: "#fff" }}
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
                        color: activeLink === i.id ? "#F8F8F9" : "#fff",
                        textDecoration: "none",
                        fontSize: "30px",
                      }}
                    >
                      <ListItemButton
                        onClick={(e) => handleClick(i.id)}
                        sx={{
                          borderLeft:
                            activeLink === i.id ? "2px solid #F8F8F9" : "none",
                          "&:hover": {
                            background: "#0288D1",
                          },
                        }}
                      >
                        <ListItemIcon sx={{ color: "#fff" }}>
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
                          color: activePage === x.name ? "#333" : "#fff",
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
                                  background: "#7B8396",
                                },
                              }}
                            >
                              <ListItemIcon
                                sx={{
                                  color:
                                    activePage === x.name ? "#333" : "#fff",
                                }}
                              >
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
                      color: activeLink === i.id ? "#fff" : "#BEB9CF",
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
    </>
  );
}

export default Sidebar;
