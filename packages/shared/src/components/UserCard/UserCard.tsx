import React from 'react';

interface UserCardProps {
	className?: string;
	username: string;
}

export const UserCard = (props: UserCardProps) => {
	const {className, username} = props;

	return (
		<div style={{padding: '20px', border: '1px solid #1d2321'}}>
			<h5>Username: {username}</h5>
			<h5>Password: 123</h5>
		</div>
	);
}

