import React from "react";
import Hero from "../components/Hero";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Paper
} from "@mui/material";

// Icons for the Amenities section
import WifiIcon from "@mui/icons-material/Wifi";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import HotelIcon from "@mui/icons-material/Hotel";

const Home = () => {
  const highlights = [
    {
      title: "The Ultimate Getaway",
      description:
        "Take a break from the busy day-to-day and enjoy a calm, quiet environment. With green surroundings and comfortable spaces, it’s an ideal place to rest and recharge.",
      image: "/three.jpeg",
    },
    {
      title: "Good Food, Every Day",
      description:
        "Enjoy freshly prepared meals made with care, featuring a mix of local favorites and familiar dishes. Simple, tasty food served in a relaxed and welcoming setting.",
      image: "/one.jpeg",
    },
  ];

  const amenities = [
    {
      title: "Accommodation",
      description: "Experience ultimate comfort in our thoughtfully designed rooms.",
      icon: <HotelIcon sx={{ fontSize: 40, color: "#b8924e" }} />
    },
    {
      title: "High Speed Wifi",
      description: "Fast and secure Wi-Fi available throughout the property.",
      icon: <WifiIcon sx={{ fontSize: 40, color: "#b8924e" }} />
    },
    {
      title: "Bar & Restaurant",
      description: "Enjoy fine dining and refreshing drinks every day.",
      icon: <RestaurantIcon sx={{ fontSize: 40, color: "#b8924e" }} />
    }
  ];

  return (
    <>
      <Hero />

      {/* Intro Section */}
      <Container maxWidth="lg" sx={{ py: 10, textAlign: "center" }}>
        <Typography variant="h3" gutterBottom fontWeight="medium">
          Hospitality lived, not just offered
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          paragraph
          sx={{ maxWidth: "800px", mx: "auto" }}
        >
          Experience a comfortable stay in Ibanda, Western Uganda, offering a
          welcoming environment, modern facilities, and everyday convenience.
        </Typography>
      </Container>

      {/* HOTEL AMENITIES - FORCED 3 PER ROW */}
      <Box sx={{ py: 10, bgcolor: "#fff", width: "100%" }}>
        <Container maxWidth={false} sx={{ px: { xs: 2, md: 8, lg: 12 } }}>
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            sx={{ mb: 8 }}
          >
            Hotel Amenities
          </Typography>

          <Box
            sx={{
              display: "grid",
              // Force 3 columns on desktop (md and up)
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)"
              },
              gap: 4,
              width: "100%"
            }}
          >
            {amenities.map((amenity, index) => (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 4,
                  border: "1px solid #eee",
                  transition: "0.3s",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 15px 40px rgba(0,0,0,0.05)"
                  }
                }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    p: 2,
                    borderRadius: "50%",
                    bgcolor: "#fcf9f2",
                    mb: 2
                  }}
                >
                  {amenity.icon}
                </Box>
                <Typography variant="h6" fontWeight="bold">
                  {amenity.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {amenity.description}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>

      {/* HIGHLIGHTS - FORCED 2 PER ROW */}
      <Box sx={{ py: 10, bgcolor: "#f9f9f9", width: "100%" }}>
        <Container maxWidth={false} sx={{ px: { xs: 2, md: 8, lg: 12 } }}>
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            sx={{ mb: 6 }}
          >
            Designed for Every Occasion
          </Typography>

          <Box
            sx={{
              display: "grid",
              // Force 2 columns on desktop (md and up)
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, 1fr)"
              },
              gap: 4,
              width: "100%"
            }}
          >
            {highlights.map((item, index) => (
              <Card
                key={index}
                sx={{
                  width: "100%",
                  borderRadius: 3,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 10
                  }
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{
                    height: 420,
                    width: "100%",
                    objectFit: "cover"
                  }}
                />
                <CardContent sx={{ textAlign: "center", p: 4, flexGrow: 1 }}>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;