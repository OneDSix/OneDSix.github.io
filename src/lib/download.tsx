import React, { useState } from "react"
import { Link } from "gatsby"

import Linux from "../assets/linux.svg"
import MacOS from "../assets/macos.svg"
import Windows from "../assets/windows.svg"
import Logo from "../assets/1d6.svg"

export function useDownloadToggle() {
	const [isDownloadVisible, setIsDownloadVisible] = useState(false);
	const onDownloadClick = () => setIsDownloadVisible(!isDownloadVisible);
	return { isDownloadVisible, onDownloadClick };
}

export default function DownloadInterface({ isDesktop, isDownloadVisible, onDownloadClick }: { isDesktop: boolean, isDownloadVisible: boolean, onDownloadClick: () => void }) {
	return (
		<dialog open={isDownloadVisible} className="flex-column">
			<button className="rounded-link larger" style={{maxWidth: "150px"}} onClick={onDownloadClick}>Go Back</button>
			<div className="container">
				<div className="dialog-flex">
					<div className="flex-column description-box">
						<h2>1D6 Core</h2>
						<img className="svg-100px" src={Logo} alt="1D6 Logo" />
						<p>
							The core game, engine, and loader, without the need to download a separate launcher.
							Comes with the mod loader pre-installed.
						</p>
						<div className="flex-row">
							<span>Available on:</span>
							<img className="svg-20px" src={Linux} alt="Linux" />
							<img className="svg-20px" src={Windows} alt="Windows" />
							<img className="svg-20px" src={MacOS} alt="MacOS" />
						</div>
						<Link className="rounded-link larger" to="https://github.com/OneDSix/onedsix/releases">Download 1D6 Core</Link>
						<Link className="rounded-link larger" to="https://github.com/OneDSix/onedsix/actions">Download Dev Builds</Link>
					</div>
					<div className="flex-column description-box">
						<h2>1D6 Launcher</h2>
						<img className="svg-100px" src={Logo} alt="1D6 Logo" />
						<p>
							The official 1D6 game launcher, with instancing, a mod manager, and some basic debugging tools built in.
							This is the preferred way to run 1D6.
						</p>
						<div className="flex-row">
							<span>Available on:</span>
							<img className="svg-20px" src={Linux} alt="Linux" />
							<img className="svg-20px" src={Windows} alt="Windows" />
						</div>
						<Link className="rounded-link larger" to="https://github.com/OneDSix/launcher/releases">Download 1D6 Launcher</Link>
						<Link className="rounded-link larger" to="https://github.com/OneDSix/launcher/actions">Download Dev Builds</Link>
					</div>
					<div className="flex-column description-box">
						<h2>Playnite Plugin</h2>
						<img className="svg-100px" src="https://playnite.link/applogo.png" alt="Playnite Logo" />
						<p>
							A plugin for the <Link to="https://playnite.link/">Playnite game launcher</Link> for launching, managing, and downloading 1D6 mods and instances.
							The only thing it cant do that the official launcher can is manage your account and download development versions.
						</p>
						<div className="flex-row">
							<span>Available on:</span>
							<img className="svg-20px" src={Windows} alt="Windows" />
						</div>
						<span className="rounded-link larger" style={{cursor: "not-allowed"}}>In Development!</span>
					</div>
				</div>
			</div>
		</dialog>
	);
}
