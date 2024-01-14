import {createBrowserRouter} from "react-router-dom";
import {App} from "@/components/App";
import React, {Suspense} from "react";
import {UserCard} from "@packages/shared/src/components/UserCard/UserCard";
import {ShopPageLazy} from "@/pages/ShopPage";
import {shopRoutes} from "@packages/shared/src/routes/shop";

const routes = [
	{
		path: "/shop",
		element: <App />,
		children: [
			{
				path: shopRoutes.main,
				element: <Suspense fallback={'Loading...'}><ShopPageLazy /></Suspense>
			},
			{
				path: '/shop/second',
				element: <Suspense fallback={'Loading...'}>
					<div style={{color: 'darkcyan'}}>
						<h1>second page</h1>
						<UserCard username={'FROM SHOP'} />
					</div>
				</Suspense>
			},
		]
	},
]

export const router = createBrowserRouter(routes);

export default routes;
