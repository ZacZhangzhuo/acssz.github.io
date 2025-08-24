import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useColorScheme } from "@mui/material/styles";

const logos = [
	"public/partners/1.png",
	"public/partners/2.jpg",
	"public/partners/3.jpeg",
	"public/partners/4.jpeg",
	"public/partners/5.png",
	"public/partners/6.jpg",
];

const logoStyle = {
	maxWidth: "100%",
	height: "40px",
	margin: "0 32px",
	opacity: 0.7,
	overflow: "hidden",
};

export default function LogoCollection() {
	const { mode, systemMode } = useColorScheme();

	return (
		<Box id="logoCollection" sx={{ pt: { xs: 4, sm: 12 }, pb: { xs: 0, sm: 0 } }}>
			<Typography
				component="h2"
				variant="h4"
				align="center"
				sx={{ color: "text.secondary", pb: { xs: 1, sm: 4 } }}
			>
				Our cooperation partners
			</Typography>
			<Grid container sx={{ justifyContent: "center", mt: 0.5, opacity: 0.6 }}>
				{logos.map((logo, index) => (
					<Grid key={index}>
						<img src={logo} alt={`partner`} style={logoStyle} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
