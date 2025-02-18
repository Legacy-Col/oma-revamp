import React from "react";
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
import { motion, AnimatePresence } from "framer-motion";
import scaleImg from "../assets/Laws Scale.png";

const Navbar = ({ scrollToSection, sections }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleDrawer = () => setMobileMenu(!mobileMenu);

  const navLinks = [
    { name: "Home", ref: sections.heroRef },
    { name: "About", ref: sections.aboutRef },
    { name: "Services", ref: sections.servicesRef },
    { name: "Reviews", ref: sections.reviewsRef },
    { name: "Contact Us", ref: sections.contactRef, isSpecial: true},
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
            />
          <Typography variant="h5">Oma's Legal</Typography>
          </IconButton>
        </Box>

        {/* Desktop Navigation */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexGrow: 1,
            justifyContent: "end",
          }}
          component={motion.div}
        >
          {navLinks.map(({ name, ref, isSpecial}) => (
            <Button
              key={name}
              color="black"
              sx={{
                mx: 2, 
                color: isSpecial ? "white" : "black",
                backgroundColor: isSpecial ? "black" : "transparent",
                borderRadius: isSpecial ? "20px" : "0px",
                fontWeight: isSpecial ? "thin" : "normal",
                padding: isSpecial ? "5px 15px" : "initial",
                "&:hover": {
                  backgroundColor: isSpecial ? "black" : "skyblue",
                  scale: isSpecial ? 1.1 : 1.2,
                  boxShadow: 4,
                } 
              }}
              onClick={() => scrollToSection(ref)}
            >
              {name}
            </Button>
          ))}
        </Box>

        {/* Mobile Menu Button */}
        <IconButton sx={{ display: { md: "none" } }} onClick={toggleDrawer}>
          ☰
        </IconButton>
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
                {navLinks.map(({ name, ref }) => (
                  <ListItem key={name} component={motion.div}>
                    <ListItemButton
                      onClick={() => {
                        toggleDrawer();
                        scrollToSection(ref);
                      }}
                    >
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
