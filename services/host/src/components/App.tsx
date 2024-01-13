import  {memo} from 'react';
import {Link, Outlet} from "react-router-dom";
import {adminRoutes} from "@packages/shared/src/routes/admin";
import {shopRoutes} from "@packages/shared/src/routes/shop";

interface AppProps {
	className?: string;
}

export const App = memo((props: AppProps) => {
	const {className} = props;

	return (
		<div>
			<h1>App Page</h1>
			<Link to={adminRoutes.about}>About</Link>
			<br/>
			<Link to={shopRoutes.main}>Shop</Link>
			<Outlet />
		</div>
	);
})

