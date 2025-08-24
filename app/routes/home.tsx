import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import AppTheme from "../shared-theme/AppTheme.tsx";
import AppAppBar from "../components/AppAppBar.js";
import Hero from "../components/Hero.js";
import LogoCollection from "../components/LogoCollection.js";
import Highlights from "../components/Highlights.js";
import Manual from "../components/Manual.js";
import Features from "../components/Features.js";
import Testimonials from "../components/Testimonials.js";
import FAQ from "../components/FAQ.js";
import Footer from "../components/Footer.js";

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

export default function Home(props: { disableCustomTheme?: boolean }) {
	return (
		<AppTheme {...props}>
			<CssBaseline enableColorScheme />
			<AppAppBar />
			<Hero />
			<div>
				<Manual />
				<FAQ />
				<LogoCollection />
				<Features />
				<Divider />
				<Testimonials />
				<Divider />
				<Highlights />
				<Divider />
				<Divider />
				<Divider />
				<Footer />
			</div>
		</AppTheme>
	);
}
