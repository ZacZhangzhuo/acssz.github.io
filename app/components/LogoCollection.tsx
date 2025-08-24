import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useColorScheme } from "@mui/material/styles";

const logos = [
	"partners/1.png",
	"partners/2.jpg",
	"partners/3.jpeg",
	"partners/4.jpeg",
	"partners/5.png",
	"partners/6.jpg",
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
		<Box id="logoCollection" sx={{ pt: { xs: 2, sm: 6 }, pb: { xs: 0, sm: 0 }, background: "white" }}>
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
