import  {memo} from 'react';
import {Link, Outlet} from "react-router-dom";
import {UserCard} from "@packages/shared/src/components/UserCard/UserCard";

interface AppProps {
	className?: string;
}

export const App = memo((props: AppProps) => {
	const {className} = props;

	return (
		<div>
			<h1>Admin Module</h1>
			<UserCard username={'Cris from Admin'} />
			<Outlet />
		</div>
	);
})

