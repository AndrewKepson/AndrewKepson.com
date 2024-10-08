import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const headlessWPFAQs = [
	{
		question: "What is WordPress?",
		answer: "WordPress is an open-source Content Management System (CMS) software application that is used to manage content for over 44% of websites on the internet. It makes it easy for anyone to update content on a website without needing to know how to code.",
	},
	{
		question: "What is headless WordPress?",
		answer: "Headless WordPress is a way to use WordPress so that the front end and back end of the site are decoupled. This means the front end of the site can be built using any technology stack while marketers and other content managers can make changes in the WordPress environment they are already familiar with using.",
	},
	{
		question: "What is the advantage of using headless WordPress?",
		answer: "Headless WordPress websites can be faster and more secure than traditional WordPress websites because the front end is built in a modern JavaScript framework that is not directly connected to the database where your content is managed by WordPress. This lets headless WordPress developers utilize the latest technologies to give your website greater performance and user experience. Headless websites can also integrate with multiple APIs to give you greater flexibility and control over every aspect of your website.",
	},
	{
		question: "What does a headless WordPress developer do?",
		answer: "Headless WordPress developers build functional websites using WordPress to power the content and high-performance front ends and user interfaces using modern web development technologies.",
	},
	{
		question: "Is headless WordPress right for me?",
		answer: "If you want to operate a small blog as a hobby or have a very small budget, headless WordPress might not be right for you - yet. Consider getting started with a regular WordPress website and upgrading to headless later. I’d be happy to connect you with a WordPress developer who can bring your vision to life.",
	},
	{
		question: "What’s the difference between headless WordPress & Jamstack?",
		answer: "Headless WordPress websites are a type of Jamstack site. Jamstack websites are built with JavaScript, Markup, and APIs - meaning the front end can connect with any or multiple backends. A headless WordPress website uses WordPress to manage the content for the markup, and the WordPress API to access the data, so that you can easily create and update content without having to worry about code.",
	},
	{
		question: "Can I switch from another CMS to headless WordPress?",
		answer: "Yes! If you have a Jamstack website, I can add WordPress to it and set up the integration to make your transition smooth and painless. If you are using a completely different type of website, we can also perform a professional headless WordPress migration to safely transfer all of your old content to a new high-performance headless website with WordPress.",
	},
];

const classNames = (...classes) => classes.filter(Boolean).join(" ");

const FAQs = () => (
	<div className="w-full">
		<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
			<div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
				<h2 className="font-roboto text-center text-3xl  font-extrabold text-gray-900 sm:text-4xl">
					Headless WordPress FAQs
				</h2>
				<dl className="mt-6 space-y-6 divide-y divide-gray-200">
					{headlessWPFAQs.map((faq) => (
						<Disclosure as="div" key={faq.question} className="pt-6">
							{({ open }) => (
								<>
									<dt className="text-lg">
										<DisclosureButton className="flex w-full items-start justify-between text-left text-gray-800">
											<span className="font-roboto font-medium text-gray-900">
												{faq.question}
											</span>
											<span className="ml-6 flex h-7 items-center">
												<ChevronDownIcon
													className={classNames(
														open ? "-rotate-180" : "rotate-0",
														"h-6 w-6 transform"
													)}
													aria-hidden="true"
												/>
											</span>
										</DisclosureButton>
									</dt>
									<DisclosurePanel as="dd" className="mt-2 pr-12">
										<p className="font-work-sans text-base text-gray-700">{faq.answer}</p>
									</DisclosurePanel>
								</>
							)}
						</Disclosure>
					))}
				</dl>
			</div>
		</div>
	</div>
);

export default FAQs;
