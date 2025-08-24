import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import WorkIcon from "@mui/icons-material/Work";

const items = [
	{
		icon: <SportsBasketballIcon />,
		title: " Sport and Recreation Department",
		description:
			"As the sports department of the Students' Federation, our goal is to call on everyone to join us: Move! We spare no effort to organize rich and interesting sports competitions for you, but also provide a broad platform for you to find like-minded partners to play sports together.",
	},
	{
		icon: <ConstructionRoundedIcon />,
		title: "Technology Department",
		description:
			"The Technology Department has been recruiting students' Association app, forum, website, small program and other developers for a long time, welcome students who are enthusiastic about technology to join!",
	},
	{
		icon: <WorkIcon />,
		title: "Enterprise Department",
		description:
			"The enterprise department is mainly responsible for visiting enterprises, maintaining good relations with enterprises and recruiting enterprises. At the same time, we will seek sponsorship from different enterprises according to different activities.",
	},
	{
		icon: <SupportAgentRoundedIcon />,
		title: "Public Relations Department",
		description:
			"Maintain internal and external public relations to better meet the work, study and life needs of Zurich students： Contacted outstanding talents in work, travel and hobbies, shared experiences online and offline for students; Compiling new student handbook; Organize Zurich Parade Group, self-defense instruction, volunteers, Dragon Boat Festival reunion and other activities.",
	},
	{
		icon: <AutoFixHighRoundedIcon />,
		title: "Publicity Department",
		description:
			"The window of the Zurich Student Union to the outside world. From copywriting to graphic design, from WeChat promotion to the maintenance of accounts on major social media platforms, responsible for publicity copywriting, drawing, Photoshop, poster design, video editing, etc.: Operation of the Student Union's official account, Xiaohongshu, and Bilibili accountsPromotion of various activities and information sharingTechnical work such as poster design and video editing.",
	},
	{
		icon: <QueryStatsRoundedIcon />,
		title: "Secreariat",
		description:
			"The success of Student Federation activities cannot be achieved without the behind-the-scenes assistance of our secretary Department. We’ve never been known, but we’re decathlon, we’re everywhere, we know all the action.",
	},
];

export default function Departments() {
	return (
		<Box
			id="highlights"
			sx={{
				pt: { xs: 4, sm: 12 },
				pb: { xs: 0, sm: 0 },
				color: "white",
				bgcolor: "grey.900",
			}}
		>
			<Container
				sx={{
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
					<Typography component="h2" variant="h4" gutterBottom>
						Departments
					</Typography>
					<Typography variant="body1" sx={{ color: "grey.400" }}>
						Explore why our product stands out: adaptability, durability, user-friendly design, and
						innovation. Enjoy reliable customer support and precision in every detail.
					</Typography>
				</Box>
				<Grid container spacing={2}>
					{items.map((item, index) => (
						<Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
							<Stack
								direction="column"
								component={Card}
								spacing={1}
								useFlexGap
								sx={{
									color: "inherit",
									p: 3,
									height: "100%",
									borderColor: "hsla(220, 25%, 25%, 0.3)",
									backgroundColor: "grey.800",
								}}
							>
								<Box sx={{ opacity: "50%" }}>{item.icon}</Box>
								<div>
									<Typography gutterBottom sx={{ fontWeight: "medium" }}>
										{item.title}
									</Typography>
									<Typography variant="body2" sx={{ color: "grey.400" }}>
										{item.description}
									</Typography>
								</div>
							</Stack>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
}
