import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import AppTheme from "../shared-theme/AppTheme.tsx";
import AppAppBar from "../components/AppAppBar";
import Hero from "../components/Hero";
import LogoCollection from "../components/LogoCollection";
import Departments from "../components/Departments";
import Manual from "../components/Manual";
import Features from "../components/Features";
import Events from "../components/Events";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export function meta() {
	return [
		{ title: "ACSSZ" },
		{
			name: "ACSSZ",
			content:
				"Association of Chinese Students and Scholars in Zurich (ACSSZ) Founded in the 1980s, it is a caring family of local students and scholars.",
		},
	];
}

export default function Home(props: { disableCustomTheme?: boolean } = { disableCustomTheme: true }) {
	return (
		<AppTheme {...props}>
			<CssBaseline enableColorScheme />
			<AppAppBar />
			<Hero />
			<div>
				<Events />
				<Departments />
				<Manual />
				<FAQ />
				<LogoCollection />
				<Divider />
				<Footer />
			</div>
		</AppTheme>
	);
}
