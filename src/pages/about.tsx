import React from "react";
import { Link, HeadFC } from "gatsby"

export default function About() {
	return (
		<main className="page">
			<h1>About 1D6</h1>
			<div className="flex-column">
				<Link to="/">Back to Home</Link>
				<Link to="/legal">Legal</Link>
				<Link to="/contrib">Contributing</Link>
			</div>
			<div>
				<p>
					1D6 is a framework around <Link to="https://libgdx.com/">LibGDX</Link> that
					adds <Link to="/wiki">modding</Link>, <Link to="/wiki">networking</Link>, <Link to="/wiki">rendering</Link>, <Link to="/wiki">asset creation</Link>,
					and <Link to="/wiki">data handling</Link> all in a free, open-source, community oriented, and fairly small package.<br />
					<br />
					Active development of 1D6 was started by TheColorBlurple in January 2024, with plans coming from similar projects spanning all the way back to 2016.<br />
					The original plan for 1D6 was very different; a 2.5d turn based rpg, taking a lot of inspiration from Pokemon Gen 5, DnD, and an old Roblox game called <Link to="https://www.roblox.com/games/1600503/Apocalypse-Rising">Apocalypse Rising</Link>.
					The name is meant to be a reference to tabletop RPGs like DnD that use dice notation like "1D6" or "2D4", but after plans changed the name stuck.
					The modding focus was from the first iteration of the plan, so i guess its still in the game in a sense.<br />
					Fast forward to now, plans have changed drastically, and instead of being a single game, 1D6 is a massive framework for collective modding and community projects.<br />
					<br />
					The target audience of 1D6 is pretty narrow, as this project's modding focus is intended to be familiar to Minecraft players and modders,
					using a few of the same libraries, and a few custom ones built by the 1D6 team, alongside a modding API reminiscent of Fabric and (Neo)Forge modding.<br />
					This time without all the bureaucracy, source-closing, microtransaction shilling, and corporate mismanagement that came upon Minecraft and its players.
					We choose not to point fingers for this situation, there are way too many actors at play, most of which deserve at least some blame;
					and instead take the modding community under our wings and fix the mess that Minecraft has become as of late.
					We do not blame the Mojang employees, if anything we love them for what they do and how difficult developing Minecraft, is with all its conflicting ideas and styles coming from the community.
					If they want to join us, we will welcome them with open arms.<br />
					<br />
					There is no specific end goal for 1D6, we intend to continue development until we can't anymore.
					Specific members of the team may have their own goals, like TheColorBlurple want to use 1D6 to complete the game idea mentioned earlier, but beyond that this project is pretty open-ended.<br />
					<br />
					If you would like to join development, join the <Link to="https://discord.gg/sQvmWdpQhR">Discord</Link> and read up on the <Link to="/contrib">contributing guidelines</Link>.
				</p>
			</div>
		</main>
	);
}

export const Head: HeadFC = () => <title>1D6 | About</title>
