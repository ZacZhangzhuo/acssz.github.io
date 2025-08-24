import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx", {
		loader: ({ request }) => {
			const url = new URL(request.url);
			const disableCustomTheme = url.searchParams.get("disableCustomTheme") === "true";
			return { disableCustomTheme };
		},
	}),
] satisfies RouteConfig;
