import React from "react";

const X = () => (
	<a
		href="https://x.com/intent/follow?screen_name=AndrewKepson"
		className="hover:text-purple-500"
		target="_blank"
		rel="noreferrer"
		title="Andrew Kepson's X"
	>
		{" "}
		{/* X Logo SVG */}
		<svg
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			className="h-5 w-5"
		>
			<path
				stroke="#000"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.406"
				d="M10.86 13.29 5 19.5m14-15-5.875 6.188M9 4.5H5l10 15h4L9 4.5Z"
			/>
		</svg>
	</a>
);

const LinkedIn = () => (
	<a
		href="https://www.linkedin.com/in/andrewkepson/"
		className="hover:text-purple-500"
		target="_blank"
		rel="noreferrer"
		title="Andrew Kepson's LinkedIn"
	>
		{" "}
		{/* LinkedIn Logo SVG */}
		<svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
			<path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
		</svg>
	</a>
);

const GitHub = () => (
	<a
		href="https://github.com/AndrewKepson"
		className="hover:text-purple-500"
		target="_blank"
		rel="noreferrer"
		title="Andrew Kepson's GitHub"
	>
		{" "}
		{/* Github Logo SVG */}
		<svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
			<path d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z" />
		</svg>
	</a>
);

export const IconLinks = () => (
	<div className="inline-flex flex-wrap space-x-4 self-center">
		<X />
		<LinkedIn />
		<GitHub />
	</div>
);