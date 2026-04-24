import React from "react";
import { Box, Typography } from "@mui/material";

const Hero = () => {
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                // We remove fixed heights and aspect ratios. 
                // The height is now determined by the video inside it.
                bgcolor: "black",
            }}
        >
            {/* VIDEO CONTAINER */}
            <Box
                sx={{
                    p: { xs: 2, md: 3 }, // Your outer padding
                }}
            >
                <Box
                    sx={{
                        position: "relative",
                        width: "100%",
                        borderRadius: "20px",
                        overflow: "hidden",
                        lineHeight: 0, // 👈 Critical: Removes tiny gap at bottom of inline elements
                    }}
                >
                    {/* VIDEO: No longer absolute, so it pushes the container open */}
                    <Box
                        component="video"
                        autoPlay
                        loop
                        muted
                        playsInline
                        sx={{
                            width: "100%",
                            height: "auto", // 👈 Naturally scale height based on width
                            display: "block",
                        }}
                    >
                        <source src="/firstvideo.mp4" type="video/mp4" />
                    </Box>

                    {/* OVERLAY: Stretches to match the video size */}
                    <Box
                        sx={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5))",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            textAlign: "center",
                            px: 2,
                        }}
                    >

                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Hero;