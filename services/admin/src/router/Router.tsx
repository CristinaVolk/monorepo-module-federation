import {createBrowserRouter} from "react-router-dom";
import {App} from "@/components/App";
import {Suspense} from "react";
import {AboutPageLazy} from "@/pages/AboutPage/";

const routes = [
	{
		path: "/admin",
		element: <App />,
		children: [
			{
				path: '/admin/about',
				element: <Suspense fallback={'Loading...'}><AboutPageLazy /></Suspense>
			},
		]
	},
]

export const router = createBrowserRouter(routes);

export default routes;

