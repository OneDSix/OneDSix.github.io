import React from "react"
import { Link, HeadFC } from "gatsby"

import "../style.scss"
import useDeviceType from "../lib/device"
import DownloadInterface, { useDownloadToggle } from "../lib/download"
import Blackbox from "../lib/blackbox"

export default function Home() {
	const isDesktopDevice = useDeviceType()
	const {isDownloadVisible, onDownloadClick} = useDownloadToggle()

	return (
		<main>
			<Blackbox on={isDownloadVisible} />
			<div className="face">
				<div>
					<h1 className="title">1D6</h1>
					<img
					className="logo"
					src="https://raw.githubusercontent.com/OneDSix/onedsix/main/src/main/resources/assets/icon_large.png"
					alt="1D6 Logo"></img>
					<p className="nowrap">The Modding Focused RPG Engine</p>
					{ isDesktopDevice ?
						<button className="rounded-link table-link nowrap" onClick={onDownloadClick}>Download 1D6 Alpha 0.1</button> :
						<button className="rounded-link table-link nowrap" onClick={onDownloadClick}>Download 1D6 (Desktop Only!)</button>
					}
					<div className="spacer px15" />
					<Link className="rounded-link table-link nowrap" to="/wiki">Modding and Addon Docs</Link>
					{isDownloadVisible && (
						<DownloadInterface isDesktop={isDesktopDevice} isDownloadVisible={isDownloadVisible} onDownloadClick={onDownloadClick} />
					)}
				</div>
			</div>
			<div>
				<h2>Newest News</h2>
				<div className="content adjustable-flex">
					{

					}
				</div>
				<div className="spacer px15" />
				<Link className="rounded-link normal-link nowrap" to="/news">More News</Link>

				<h2>Best Mods</h2>
				<div className="content adjustable-flex">
					{

					}
				</div>
				<div className="spacer px15" />
				<Link className="rounded-link normal-link nowrap" to="/mods">More Mods</Link>
			</div>
		</main>
	)
}

export const Head: HeadFC = () => <title>1D6 | Home</title>
