import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import visuallyHidden from "@mui/utils/visuallyHidden";
import { styled } from "@mui/material/styles";

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
	backgroundImage: `url("/public/media/slider-china.jpg")`,
	backgroundSize: "cover",
	[theme.breakpoints.up("sm")]: {
		marginTop: theme.spacing(12),
		height: 700,
	},
	...theme.applyStyles("dark", {
		boxShadow: "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
		backgroundImage: `url("/public/media/slider-china.jpg")`,
		outlineColor: "hsla(220, 20%, 42%, 0.1)",
		borderColor: (theme.vars || theme).palette.grey[700],
	}),
}));

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
