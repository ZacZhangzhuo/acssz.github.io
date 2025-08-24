import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const tiers = [
	{
		title: "Free",
		price: "0",
		description: ["10 users included", "2 GB of storage", "Help center access", "Email support"],
		buttonText: "Sign up for free",
		buttonVariant: "outlined",
		buttonColor: "primary",
	},
	{
		title: "Professional",
		subheader: "Recommended",
		price: "15",
		description: [
			"20 users included",
			"10 GB of storage",
			"Help center access",
			"Priority email support",
			"Dedicated team",
			"Best deals",
		],
		buttonText: "Start now",
		buttonVariant: "contained",
		buttonColor: "secondary",
	},
	{
		title: "Enterprise",
		price: "30",
		description: ["50 users included", "30 GB of storage", "Help center access", "Phone & email support"],
		buttonText: "Contact us",
		buttonVariant: "outlined",
		buttonColor: "primary",
	},
];

export default function Manual() {
	return (
		<Container
			id="Manual"
			sx={{
				pt: { xs: 4, sm: 12 },
				pb: { xs: 0, sm: 0 },
				position: "relative",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: { xs: 3, sm: 6 },
			}}
		>
			<Box
				sx={{
					width: { sm: "100%", md: "60%" },
					textAlign: { sm: "left", md: "center" },
				}}
			>
				<Typography component="h2" variant="h4" gutterBottom sx={{ color: "text.primary" }}>
					Useful Information
				</Typography>
				<Typography variant="body1" sx={{ color: "text.secondary" }}>
					Handbook for Freshmen (2025 edition)
				</Typography>
			</Box>

			<Card
				sx={[
					{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						width: { sm: "100%", md: "100%" },
						pd: { xs: 0, sm: 0 },
					},

					(theme) => ({
						border: "none",
						background: "radial-gradient(circle at 50% 0%, hsl(220, 20%, 20%), hsl(220, 30%, 16%))",
						boxShadow: `0 8px 12px hsla(0, 0%, 0%, 0.8)`,
						...theme.applyStyles("dark", {
							background: "radial-gradient(circle at 50% 0%, hsl(220, 20%, 35%), hsl(220, 30%, 6%))",
							boxShadow: `0 8px 12px hsla(220, 20%, 42%, 0.2)`,
						}),
					}),
				]}
			>
				<iframe src="https://guide.acssz.org/share/glk90p035i/p/-V0cAxSyr6p" width={"100%"} height={"600px"} />
			</Card>
		</Container>
	);
}
