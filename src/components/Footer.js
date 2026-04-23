import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <Box
            sx={{
                mt: 8,
                px: 3,
                py: 5,
                backgroundColor: "#111",
                color: "white",
                textAlign: "center",
            }}
        >
            {/* Hotel Name */}
            <Typography variant="h6" fontWeight="bold" gutterBottom>
                Little Nest Hotel and Restaurant
            </Typography>

            {/* Location */}
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Located along Ibanda–Mbarara Highway, Ibanda Town, Western Uganda
            </Typography>

            {/* Contact */}
            <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
                Phone: +256 393104016 Or +256 200929510
            </Typography>



            {/* Tagline */}
            <Typography variant="body2" sx={{ mt: 2, fontStyle: "italic", opacity: 0.7 }}>
                Hospitality lived, not just offered
            </Typography>

            {/* Copyright */}
            <Typography sx={{ mt: 3, fontSize: "0.9rem", opacity: 0.6 }}>
                © {year}  Little Nest Hotel and Restaurant. All Rights Reserved
            </Typography>
        </Box>
    );
};

export default Footer;