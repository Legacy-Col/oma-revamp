import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { motion, AnimatePresence, color } from "framer-motion";
import scaleImg from "../assets/Laws Scale.png";
import {Link, Links} from 'react-router-dom'
import { path } from "framer-motion/client";


const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleDrawer = () => {
    setMobileMenu(!mobileMenu);
  };

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Reviews",
      path: "/reviews",
    },
    {
      name: "Contact Us",
      path: "/contact"
    },
  ];

  return (
    <AppBar color="inherit" position="fixed" sx={{ height: 80 }}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexGrow: 1,
            mx: 4,
          }}
        >
          <IconButton>
            <motion.img
              src={scaleImg}
              alt="logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              color="black"
            />
          <Typography variant="h5" >Oma's Legal</Typography>
          </IconButton>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              justifyContent: "end",
            }}
            component={motion.div}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {navLinks.map(({ name, path }) => (
              <Link to={path}>
              <Button
                key={name}
                color="black"
                sx={{
                  mx: 2,
                  ":hover": {
                    // borderBottom: 2,
                    color: "black",
                    transition: "ease-out",
                    backgroundColor: "skyblue",
                    // boxShadow: 8,
                    width: "10%",
                  },
                }}
              >
                {name}
              </Button>
              </Link>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton sx={{ display: { md: "none" } }} onClick={toggleDrawer}>
            ☰
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Drawer with Animation */}
      <AnimatePresence>
        {mobileMenu && (
          <Drawer anchor="right" open={mobileMenu} onClose={toggleDrawer}>
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <List>
                {navLinks.map(({name, path}) => (
                  <ListItem
                    key={name}
                    component={motion.div}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#f0f0f0",
                      borderRadius: "8px",
                    }}
                    sx={{overflow: "hidden"}}
                  >
                    <ListItemButton onClick={toggleDrawer} component={Link} to={path}>
                      <ListItemText primary={name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </motion.div>
          </Drawer>
        )}
      </AnimatePresence>
    </AppBar>
  );
};

export default Navbar;
