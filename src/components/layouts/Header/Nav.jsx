import React from "react";
import { PopoverButton } from "@headlessui/react";
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
	<nav className="relative flex items-center justify-between sm:h-10" aria-label="Global">
		<div className="flex shrink-0 grow items-center lg:grow-0">
			<div className="flex w-full items-center justify-between md:w-auto">
				<Brand />
				<div className="-mr-2 flex items-center md:hidden">
					<PopoverButton className=" inline-flex items-center justify-center rounded-md p-2 text-deep-purple-500 hover:bg-dark-gray-50 hover:text-deep-purple-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</PopoverButton>
				</div>
			</div>
		</div>
		<div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
			{navigation.map((item) => (
				<a
					key={item.name}
					href={item.to}
					className="font-work-sans font-medium text-dark-gray-700 kepson-transition hover:text-deep-purple-500"
				>
					{item.name}
				</a>
			))}
		</div>
	</nav>
);
