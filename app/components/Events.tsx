import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useColorScheme } from "@mui/material/styles";
import { SpaceBar } from "@mui/icons-material";

const items = [
	{
		name: "Career Insights 2025 - Job hunting and work permit in Switzerland",
		event: "Are you currently job hunting in Switzerland and facing challenges? What are the key steps to securing a work permit and staying in Switzerland? How can you optimize your resume and prepare effectively for interviews to increase your chances of success?",
		image: "public/media/Career_Insights.webp",
	},
	{
		name: "Global Village - Embrace Diversity",
		event: "🌏✨ Today, we joined AIESEC Zurich at “Global Village - Embrace Diversity” at the University of Zurich, Lichthof! Our team loved sharing a bit of Chinese culture—guests got to try on Hanfu, practice calligraphy, and make bubble tea 🍵✍️💫",
		image: "public/media/Global_Village.webp",
	},
	{
		name: "China and Switzerland Culture Talk",
		event: "At the beginning of 2020, the Switzerland-China Bridge Association and the Zurich Federation of Students jointly held a Sino-Swiss cultural exchange activity. The event featured Swiss musicians Jason Huster, Anton Zemp and his friends.",
		image: "public/media/Culture_Talk.jpg",
	},
	{
		name: "You are My Destiny | 520 Making Friends",
		event: "520, wait for you to make friends, say goodbye to single!",
		image: "public/media/Making_Friends.webp",
	},
	{
		name: "More coming soon...",
		event: "More events are comings soon!",
		image: "public/favicon.ico",
	},
	{
		name: "More coming soon...",
		event: "More events are comings soon!",
		image: "public/favicon.ico",
	},
];

const logoStyle = {
	width: "64px",
	opacity: 0.3,
};

export default function Events() {
	const { mode, systemMode } = useColorScheme();

	return (
		<Container
			id="events"
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
					Events
				</Typography>
				<Typography variant="body1" sx={{ color: "text.secondary" }}>
					ACSSZ organizes various events throughout the year to foster community engagement, cultural exchange, and professional development. From career insights to cultural talks, we aim to create a platform for students and scholars to connect and grow.
				</Typography>
			</Box>
			<Grid container spacing={2}>
				{items.map((event, index) => (
					<Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} sx={{ display: "flex" }}>
						<Card
							variant="outlined"
							sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								flexGrow: 1,
							}}
						>
							<CardContent>
								<Box
									sx={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "space-between",
									}}
								>
									<img
										src={event.image}
										alt={`Event image ${index + 1}`}
										style={{
											objectFit: "cover",
											width: "80px",
											height: "80px",
											borderRadius: "50%",
											margin: "0 20px 20px 0",
										}}
									/>
									<Typography variant="h6" gutterBottom sx={{ color: "text.secondary" }}>
										{event.name}
									</Typography>
								</Box>
								<Typography variant="body1" gutterBottom sx={{ color: "text.secondary" }}>
									{event.event}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
