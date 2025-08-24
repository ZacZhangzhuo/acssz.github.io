import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Link as ReactRouterLink } from "react-router";
import ProTip from "~/components/ProTip";
import Copyright from "~/components/Copyright";

import MarketingPage from "./MarketingPage.tsx";

export function meta() {
	return [
		{ title: "Material UI - React Router example in TypeScript" },
		{
			name: "description",
			content: "Welcome to Material UI - React Router example in TypeScript!",
		},
	];
}

export default function Home() {
	return <MarketingPage></MarketingPage>;
}
