import {createBrowserRouter} from "react-router-dom";
import {App} from "@/components/App";
import {Suspense} from "react";
import {AboutPageLazy} from "@/pages/AboutPage/";
import {adminRoutes} from "@packages/shared/src/routes/admin";

const routes = [
	{
		path: "/admin",
		element: <App />,
		children: [
			{
				path: adminRoutes.about,
				element: <Suspense fallback={'Loading...'}><AboutPageLazy /></Suspense>
			},
		]
	},
]

export const router = createBrowserRouter(routes);

export default routes;

