import React, { useRef } from "react";
import emailjs from "emailjs-com";
import {
    TextField,
    Button,
    Typography,
    Container,
    Box,
} from "@mui/material";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                form.current,
                "YOUR_PUBLIC_KEY"
            )
            .then(
                () => {
                    alert("Message sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    alert("Failed to send message.");
                    console.error(error);
                }
            );
    };

    return (
        // Changed py: 12 to py: { xs: 6, md: 12 } so it's not too long on phones
        <Container maxWidth="xl" sx={{ py: { xs: 6, md: 12 } }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: { xs: 6, md: 10 },
                    alignItems: "center",
                    // FIX: Added horizontal padding for mobile view so words aren't on the edge
                    px: { xs: 2, sm: 4, md: 0 },
                }}
            >
                {/* LEFT: Video */}
                <Box
                    sx={{
                        flex: 1.2,
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        component="video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        sx={{
                            width: "100%",
                            maxWidth: { xs: "100%", md: "800px" },
                            height: { xs: "auto", md: "750px" },
                            borderRadius: 8,
                            boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                            objectFit: "cover",
                            display: "block",
                        }}
                    >
                        <source src="/secondvideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </Box>
                </Box>

                {/* RIGHT: Contact Info + Form */}
                <Box
                    sx={{
                        flex: 1,
                        width: "100%",
                        // Ensure the text aligns nicely on mobile
                        textAlign: { xs: "left", md: "left" }
                    }}
                >
                    <Typography
                        variant="h2"
                        fontWeight="700"
                        sx={{
                            fontSize: { xs: "2.4rem", md: "4rem" }, // Slightly smaller on mobile
                            lineHeight: 1.1,
                            letterSpacing: "-0.03em",
                            mb: 2,
                            color: "text.primary"
                        }}
                    >
                        Get In Touch
                    </Typography>

                    <Typography
                        sx={{
                            mb: 3,
                            fontWeight: 500,
                            fontSize: { xs: "1.1rem", md: "1.2rem" },
                            color: "text.primary",
                            lineHeight: 1.6
                        }}
                    >
                        Visit us in Ibanda along the Ibanda–Mbarara Highway. We’re always
                        ready to assist you.
                    </Typography>

                    <Typography sx={{ mb: 1, fontWeight: 500, fontSize: "1.1rem" }}>
                        📍 Ibanda, Western Uganda
                    </Typography>

                    <Typography sx={{ mb: 4, fontWeight: 500, fontSize: "1.1rem" }}>
                        📞 +256 393104016 / +256 200929510
                    </Typography>

                    <Box
                        component="form"
                        ref={form}
                        onSubmit={sendEmail}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                        }}
                    >
                        <TextField
                            fullWidth
                            label="Full Name"
                            name="user_name"
                            required
                        />

                        <TextField
                            fullWidth
                            label="Email Address"
                            name="user_email"
                            type="email"
                            required
                        />

                        <TextField
                            fullWidth
                            label="Message"
                            name="message"
                            multiline
                            rows={4}
                            required
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{
                                bgcolor: "secondary.main",
                                py: 2,
                                fontWeight: "bold",
                                fontSize: "1.1rem",
                                borderRadius: 2,
                                "&:hover": { bgcolor: "secondary.dark" }
                            }}
                        >
                            Send Inquiry
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default Contact;