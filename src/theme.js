// import { createTheme } from "@mui/material/styles";

// const theme = createTheme({
//     palette: {
//         primary: { main: "#1a1a1a" }, // Deep Black/Grey
//         secondary: { main: "#c5a059" }, // Luxury Gold
//     },
//     typography: {
//         fontFamily: "'Roboto', sans-serif",
//         h2: { fontWeight: 700 },
//     },
// });

// export default theme;

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: { main: "#1a1a1a" },
        secondary: { main: "#c5a059" },
    },

    typography: {
        fontFamily: "'Roboto', sans-serif",
        h2: { fontWeight: 700 },
    },

    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: false, // 🔥 THIS REMOVES THE BOXED LAYOUT
            },
            styleOverrides: {
                root: {
                    width: "100%",
                    paddingLeft: 0,
                    paddingRight: 0,
                }
            }
        }
    }
});

export default theme;