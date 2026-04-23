import React from "react";
import { Box, Typography } from "@mui/material";

const Hero = () => {
    return (
        <Box
            sx={{
                position: "relative",
                height: "90vh",
                width: "100%",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                textAlign: "center",
            }}
        >
            {/* VIDEO */}
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: -1,
                }}
            >
                <source src="/firstvideo.mp4" type="video/mp4" />
            </video>

            {/* OVERLAY */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.4)",
                    zIndex: 0,
                }}
            />

            {/* CONTENT */}
            <Box sx={{ zIndex: 1, p: 3 }}>
                <Typography variant="h2" fontWeight="bold">
                    Little Nest Hotel and Restaurant
                </Typography>

                <Typography variant="h6" sx={{ mt: 2, maxWidth: 600, mx: "auto" }}>
                    Experience a comfortable stay in Ibanda, Western Uganda.
                </Typography>

                {/* <Typography variant="h6" sx={{ mt: 2 }}>
                    Hospitality lived, not just offered
                </Typography> */}
            </Box>
        </Box>
    );
};

export default Hero;