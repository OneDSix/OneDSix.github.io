import React from "react";
import { Link, HeadFC } from "gatsby";

export default function Legal() {
	return (
		<main className="page">
			<h1>1D6's Legalese</h1>
			<div className="flex-column">
				<Link to="/">Back to Home</Link>
			</div>
			<div>
				<p>
					Last Updated: 04/08/2024
					<h3>TL;DR</h3>
					All of the data we gather is anonymized and deleted immediately.<br />
					We don't really care what you do with the project, just don't blame us if you get in trouble with someone, and don't use the name like you own it.<br />
					We may ask you to change, remove, or modify content if we find it unsafe for you or 1D6.<br />
					If you have any questions, feel free to contact us and ask.

					<h3>Usage of 1D6 (TOS)</h3>
					We don't care what you do with the 1D6 platform, as long as you follow a few simple rules:
					<ul>
						<li>Be careful with copyrighted materials, avoid it at all costs.</li>
						<li>If you get in trouble or incur damages using the platform, and we do not oversee the cause, we are not involved and will/do not have the capacity to repay you.</li>
						<li>Don't use the 1D6 name like you own it. Say "Adventure: a 1D6 game" instead of "1D6: The Adventure".</li>
					</ul>
					Here are a few extra clarifications:
					<ul>
						<li>We are not liable if you download malware or stealers from our service. We are too small to afford any malware protection.</li>
						<li>All content you make is owned by you, and you can license it how you like. An exclusion for this rule comes when violating copyright law; the original creator, be that a company or individual, owns the work. We may ask to use your work for ads or other purposes, but you own full rights to the content and may decline if you like.</li>
						<li>We may ask you to remove or change your content if we find it violates copyright law, or is generally cruel or disturbing.</li>
						<li>We maintain the right to ban, block, or remove your account and/or IP address at any time. This is rarely used.</li>
						<li>If you use a library or some other technology that has it's own Privacy Policy and/or TOS, we ask you link it somewhere in your project.</li>
					</ul>
					We may notify you via Discord and/or Email of any changes to this document. This may include spelling corrections or clarifications.<br />
					The backend service's uptime may fluctuate over time, so be aware that the backend services may be unstable at high usage, and possibly crash.

					<h3>Data from 1D6 (Privacy Policy)</h3>
					We will never collect data without your consent, and we will never sell it, period.<br />
					All data collection is purely optional and is disabled by default.<br />
					We only collect usage stats and basic info like preferred language(s), how long you play, how well the game is running, etc.<br />
					We will never store this data either; it is shown via the admin panel and some API endpoints, then immediately deleted.<br />
					The source code for the telemetry backend is located <a href="https://github.com/OneDSix/1d6-api/blob/main/api/src/routes/v1/telemetry.rs">here</a>.<br />
					As a legal precaution, if you try to access the telemetry endpoint from inside the EU or Canada, the request will fail with a "Unavailable due to legal reasons" error.

					<h3>Words of Caution</h3>
					<ul>
						<li>The language, playtime, and currently online statistics are public via the API.</li>
						<li>Login tokens are stored using browser cookies and can be tracked.</li>
						<li>If you are using GitHub to host your mods, they may track you; we have no say in this. This site is also hosted on GitHub Pages, and as such follows the <a href="https://docs.github.com/en/github/site-policy/github-privacy-statement">GitHub Privacy Statement</a></li>
					</ul>

					<h3>Closing Statement and Contact</h3>
					You can contact the 1D6 team via a Discord ticket if you have a legal inquiry or GDPR deletion request.<br />
					We currently have no mailing address.<br />
					This EULA applies on top of the legal documentation of United States of America and Eastern Massachusetts law, specifically Central Boston/Cambridge.
				</p>
			</div>
		</main>
	);
}

export const Head: HeadFC = () => <title>1D6 | Legal</title>;
