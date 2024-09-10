import React from "react";
import { Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

import { Brand } from "./Brand";

const navigation = [
	{ name: "About", to: "/about/" },
	{ name: "Headless WordPress", to: "/headless-wordpress-developer/" },
	{ name: "Portfolio", to: "/portfolio/" },
	{ name: "Blog", to: "/blog/" },
	{ name: "Contact", to: "/contact/" },
];

export const Nav = () => (
	<nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
		<div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
			<div className="flex w-full items-center justify-between md:w-auto">
				<Brand />
				<div className="-mr-2 flex items-center md:hidden">
					<Popover.Button className=" inline-flex items-center justify-center rounded-md p-2 text-purple-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</Popover.Button>
				</div>
			</div>
		</div>
		<div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
			{navigation.map((item) => (
				<a key={item.name} href={item.to} className="font-medium text-gray-700 hover:text-purple-600">
					{item.name}
				</a>
			))}
		</div>
	</nav>
);
