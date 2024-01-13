import {createBrowserRouter} from "react-router-dom";
import {App} from "@/components/App";
import React, {Suspense} from "react";
import {ShopPageLazy} from "@/pages/ShopPage";
import {UserCard} from "@packages/shared/src/components/UserCard/UserCard";

const routes = [
	{
		path: '/shop',
		element: <App />,
		children: [
			{
				path: '/shop/main',
				element: <Suspense fallback={'Loading...'}>ShopPageLazy</Suspense>
			},
			{
				path: '/shop/second',
				element: <Suspense fallback={'Loading...'}>
					<div style={{color: 'thistle'}}>
						<h1>Second page</h1>
						<UserCard username={'Cris from shop'} />
					</div>
				</Suspense>
			},
		]
	}
]

export const router = createBrowserRouter(routes);

export default routes;
