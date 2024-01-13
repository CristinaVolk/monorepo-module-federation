import {createRoot} from "react-dom/client";
import React from "react";
import {RouterProvider} from "react-router-dom";
import {router} from "@/router/Router";

const root = document.getElementById('root');

if (!root) {
	throw new Error('Root has not been found');
}

const container = createRoot(root);

container.render(
	<RouterProvider router={router} />
);
