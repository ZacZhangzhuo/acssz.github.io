import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import { EmblaOptionsType } from "embla-carousel";
import Carousel from "./carousel/Carousel";

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

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDES = new Map<string, string>([
	["Slide 1", "media/slider_food.jpeg"],
	["Slide 2", "media/slider_erhu.jpeg"],
	["Slide 3", "media/slider_hanfu.jpg"],
	["Slide 4", "media/slider-china.jpg"],
	["Slide 5", "media/slider_music.jpg"],
]);

function HeroImages() {
	return <Carousel slides={SLIDES} options={OPTIONS} />;
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
				pt: { xs: 12, sm: 0 },
				ml: { xs: 0, sm: 0 },
				mr: { xs: 0, sm: 0 },
			})}
		>
			<HeroImages />
		</Box>
	);
}
