import React from "react";
import { Grid, Card, CardContent, Typography, CardMedia, Button, Container } from "@mui/material";

const roomsData = [
    { name: "Deluxe Room", price: "$120", img: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210a3" },
    { name: "Executive Suite", price: "$250", img: "https://images.unsplash.com/photo-1590490360182-c33d57733427" },
    { name: "Presidential Villa", price: "$500", img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32" },
];

const Rooms = () => {
    return (
        <Container sx={{ py: 8 }}>
            <Typography variant="h3" align="center" gutterBottom>Our Accommodations</Typography>
            <Grid container spacing={4} sx={{ mt: 2 }}>
                {roomsData.map((room, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{
                            height: '100%',
                            transition: '0.3s',
                            '&:hover': { transform: 'scale(1.02)', boxShadow: 6 }
                        }}>
                            <CardMedia component="img" height="240" image={room.img} alt={room.name} />
                            <CardContent>
                                <Typography variant="h5">{room.name}</Typography>
                                <Typography variant="h6" color="secondary" sx={{ my: 1 }}>{room.price} / night</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Includes complimentary breakfast, high-speed Wi-Fi, and access to the infinity pool.
                                </Typography>
                                <Button variant="contained" fullWidth sx={{ mt: 3, bgcolor: 'primary.main' }}>
                                    Book Now
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Rooms;