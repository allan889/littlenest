import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container, Box } from "@mui/material";

const Navbar = () => {
    return (
        <AppBar
            position="sticky"
            color="primary"
            elevation={0}
            sx={{
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                py: 1
            }}
        >
            <Container maxWidth={false} sx={{ px: { xs: 2, md: 6 } }}>
                <Toolbar disableGutters sx={{ minHeight: { xs: 70, md: 80 } }}>

                    {/* Logo and Title Container */}
                    <Box
                        component={Link}
                        to="/"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            textDecoration: "none",
                            flexGrow: 1,
                            gap: 1.5 // Space between logo and text
                        }}
                    >
                        {/* Logo Image */}
                        <Box
                            component="img"
                            src="/logo.png" // Replace with your actual logo path (e.g., .png, .svg, .jpg)
                            alt="Little Nest Logo"
                            sx={{
                                height: { xs: 40, md: 50 }, // Responsive height
                                width: "auto",
                                borderRadius: "4px" // Optional: if your logo is square/has a background
                            }}
                        />

                        <Typography
                            variant="h5"
                            sx={{
                                color: "secondary.main",
                                fontWeight: "bold",
                                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                                letterSpacing: "-0.5px",
                                display: { xs: "none", sm: "block" } // Optional: hide text on very small screens to save space
                            }}
                        >
                            Little Nest Hotel
                        </Typography>
                    </Box>

                    {/* Navigation Links */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        {["Home", "About", "Contact"].map((item) => (
                            <Button
                                key={item}
                                color="inherit"
                                component={Link}
                                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                sx={{
                                    ml: { xs: 1, md: 3 },
                                    fontWeight: 500,
                                    textTransform: "capitalize",
                                    fontSize: "1rem",
                                    "&:hover": { color: "secondary.main" }
                                }}
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;