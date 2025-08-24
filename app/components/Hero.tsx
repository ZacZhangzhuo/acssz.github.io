import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Carousel from "react-material-ui-carousel";
import Paper from "@mui/material/Paper";

const StyledBox = styled("div")<{ src: string }>(({ theme, src }) => ({
	alignSelf: "center",
	width: "100%",
	height: 400,
	marginTop: theme.spacing(4),
	paddingBottom: "0",
	borderRadius: (theme.vars || theme).shape.borderRadius,
	outline: "6px solid",
	outlineColor: "hsla(220, 25%, 80%, 0.2)",
	border: "1px solid",
	borderColor: (theme.vars || theme).palette.grey[200],
	boxShadow: "0 0 12px 8px hsla(220, 25%, 80%, 0.2)",
	backgroundImage: `url(${src})`,
	backgroundSize: "cover",
	[theme.breakpoints.up("sm")]: {
		marginTop: theme.spacing(12),
		height: 700,
	},
	...theme.applyStyles("dark", {
		boxShadow: "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
		backgroundImage: `url(${src})`,
		outlineColor: "hsla(220, 20%, 42%, 0.1)",
		borderColor: (theme.vars || theme).palette.grey[700],
	}),
}));

function HeroImages() {
	const items = [
		{
			imgSrc: "media/slider_food.jpeg",
			title: "Slide 1",
		},
		{
			imgSrc: "media/slider_erhu.jpeg",
			title: "Slide 2",
		},
		{
			imgSrc: "media/slider_hanfu.jpg",
			title: "Slide 3",
		},
		{
			imgSrc: "media/slider-china.jpg",
			title: "Slide 4",
		},
		{
			imgSrc: "media/slider_music.jpg",
			title: "Slide 5",
		},
	];
	return (
		<Carousel>
			{items.map((item, i) => (
				<Paper>
					<StyledBox src={item.imgSrc} id="image" />
				</Paper>
			))}
		</Carousel>
	);
}

export default function Hero() {
	return (
		<Box
			id="hero"
			sx={(theme) => ({
				width: "100%",
				backgroundRepeat: "no-repeat",

				backgroundImage: "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
				...theme.applyStyles("dark", {
					backgroundImage: "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
				}),
			})}
		>
			<Container>
				<HeroImages />
			</Container>
		</Box>
	);
}
