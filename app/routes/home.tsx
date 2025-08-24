import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import AppTheme from "../shared-theme/AppTheme.tsx";
import AppAppBar from "../components/AppAppBar.js";
import Hero from "../components/Hero.js";
import LogoCollection from "../components/LogoCollection.js";
import Highlights from "../components/Highlights.js";
import Pricing from "../components/Pricing.js";
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

export default function Home() {
	return (
		<AppTheme disableCustomTheme={false}>
			<CssBaseline enableColorScheme />
			<AppAppBar />
			<Hero />
			<div>
				<LogoCollection />
				<Features />
				<Divider />
				<Testimonials />
				<Divider />
				<Highlights />
				<Divider />
				<Pricing />
				<Divider />
				<FAQ />
				<Divider />
				<Footer />
			</div>
		</AppTheme>
	);
}
