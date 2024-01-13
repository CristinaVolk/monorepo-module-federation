import  {memo} from 'react';
import {Link, Outlet} from "react-router-dom";
import {shopRoutes} from "@packages/shared/src/routes/shop";

interface AppProps {
	className?: string;
}

export const App = memo((props: AppProps) => {
	const {className} = props;

	return (
		<div>
			<h1>Shop Module</h1>
			<Link to={shopRoutes.second}> Second shop</Link>
			<Outlet />
		</div>
	);
})

