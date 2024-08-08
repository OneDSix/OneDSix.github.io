import React from "react";
import { Link, HeadFC } from "gatsby";

export default function About() {
	return (
		<main className="page">
			<h1>1D6 Contribution Guidelines</h1>
			<div className="flex-column">
				<Link to="/">Back to Home</Link>
				<Link to="/legal">Legal</Link>
			</div>
			<div>
				<p>
					<h2>Contributing Guidelines</h2>
					<h2>Security Guidelines</h2>
				</p>
			</div>
		</main>
	);
}

export const Head: HeadFC = () => <title>1D6 | Contributing</title>;
