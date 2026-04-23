import React from "react";
import { Typography, Container, Box, Grid } from "@mui/material";

const About = () => {
    const images = ["/one.jpeg", "/two.jpeg", "/three.jpeg"];
    const videos = ["/firstvideo.mp4", "/secondvideo.mp4", "/thirdvideo.mp4", "/forthvideo.mp4"];

    // Standardized style for both Images and Videos
    const mediaStyle = {
        width: "100%",
        height: { xs: "250px", md: "350px" }, // Identical height for all cards
        objectFit: "cover",
        borderRadius: 4,
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        backgroundColor: "#000",
        display: "block"
    };

    return (
        <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
            {/* --- ABOUT SECTION --- */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: { xs: 6, md: 10 },
                    alignItems: "center",
                    px: { xs: 3, sm: 5, md: 0 },
                    mb: 12
                }}
            >
                <Box sx={{ flex: 1.2, width: "100%", display: "flex", justifyContent: "center" }}>
                    <Box
                        component="img"
                        src="/two.jpeg"
                        alt="Hotel view"
                        sx={{
                            width: "100%",
                            maxWidth: { xs: "100%", md: "800px" },
                            height: "auto",
                            maxHeight: "700px",
                            objectFit: "cover",
                            borderRadius: 8,
                            boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                        }}
                    />
                </Box>

                <Box sx={{ flex: 1, textAlign: "left" }}>
                    <Typography variant="h2" fontWeight="700" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, mb: 4 }}>
                        Welcome to Ibanda
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: { xs: '1.1rem', md: '1.4rem' }, lineHeight: 1.8, mb: 3 }}>
                        Located in Ibanda along the Ibanda–Mbarara Highway, our hotel offers a perfect blend of comfort, style, and convenience.
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: { xs: '1.1rem', md: '1.4rem' }, lineHeight: 1.8 }}>
                        Experience a calm and welcoming atmosphere where style meets warmth, and every guest is treated like family.
                    </Typography>
                </Box>
            </Box>

            {/* --- GALLERY SECTION --- */}
            <Box sx={{ px: { xs: 3, sm: 5, md: 0 } }}>
                <Typography
                    variant="h3"
                    fontWeight="700"
                    textAlign="center"
                    sx={{ mb: 6, fontSize: { xs: '2.5rem', md: '3.5rem' } }}
                >
                    Gallery
                </Typography>

                <Grid container spacing={3}>
                    {/* Render Images - md={4} means 3 items per row */}
                    {images.map((img, index) => (
                        <Grid item xs={12} sm={6} md={4} key={`img-${index}`}>
                            <Box
                                component="img"
                                src={img}
                                alt={`Gallery image ${index}`}
                                sx={mediaStyle}
                            />
                        </Grid>
                    ))}

                    {/* Render Videos - md={4} ensures they match the images perfectly */}
                    {videos.map((vid, index) => (
                        <Grid item xs={12} sm={6} md={4} key={`vid-${index}`}>
                            <Box
                                component="video"
                                src={vid}
                                controls
                                sx={mediaStyle}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default About;