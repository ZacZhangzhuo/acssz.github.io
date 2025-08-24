import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Carousel from "react-material-ui-carousel";
import { useState } from "react";
import Paper from "@mui/material/Paper";

const StyledBox = styled("div")(({ theme }) => ({
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
	backgroundImage: `url("/media/slider-china.jpg")`,
	backgroundSize: "cover",
	[theme.breakpoints.up("sm")]: {
		marginTop: theme.spacing(12),
		height: 700,
	},
	...theme.applyStyles("dark", {
		boxShadow: "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
		backgroundImage: `url("/media/slider-china.jpg")`,
		outlineColor: "hsla(220, 20%, 42%, 0.1)",
		borderColor: (theme.vars || theme).palette.grey[700],
	}),
}));

// function Example() {
// 	const items = [
// 		{
// 			imgSrc: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
// 			title: "Slide 1",
// 		},
// 		{
// 			imgSrc: "https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80",
// 			title: "Slide 2",
// 		},
// 		{
// 			imgSrc: "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
// 			title: "Slide 3",
// 		},
// 		{
// 			imgSrc: "https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80",
// 			title: "Slide 4",
// 		},
// 	];
// 	return (
// 		<Carousel>
// 			{items.map((item, i) => (
// 				<Item key={i} item={item} />
// 			))}
// 		</Carousel>
// 	);
// }
// function Item(props) {
// 	return (
// 		<Paper>
// 			<h2>{props.item.title}</h2>
// 			<img src={props.item.imgSrc} alt={props.item.title} style={{ width: "100%", height: "auto" }} />
// 		</Paper>
// 	);
// }

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
			<Container
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					pb: { xs: 0, sm: 0 },
				}}
			>
				<StyledBox id="image" />
			</Container>
		</Box>
	);
}
