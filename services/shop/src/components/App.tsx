import {shopRoutes} from "@packages/shared/src/routes/shop";
import {Link, Outlet} from "react-router-dom";

interface AppProps {
	className?: string;
}

export const App = (props: AppProps) => {
	const {className} = props;

	return (
		<div>
			<h1>Shop Module</h1>
			<Link to={shopRoutes.second}> Second shop</Link>
			<Outlet />
		</div>
	);
}

