import React, { useState } from "react";

export function useDownloadToggle() {
	const [isDownloadVisible, setIsDownloadVisible] = useState(false);
	const onDownloadClick = () => setIsDownloadVisible(!isDownloadVisible);
	return { isDownloadVisible, onDownloadClick };
}

export default function DownloadInterface({ isDesktop, isDownloadVisible, onDownloadClick }: { isDesktop: boolean, isDownloadVisible: boolean, onDownloadClick: () => void }) {
	return (
		<dialog open={isDownloadVisible} className="adjustable-flex">
			<button type="button" onClick={onDownloadClick}>Test</button>
			<button type="button" onClick={onDownloadClick}>Test</button>
			<button type="button" onClick={onDownloadClick}>Test</button>
			<button type="button" onClick={onDownloadClick}>Test</button>
			<button type="button" onClick={onDownloadClick}>Test</button>
			<button type="button" onClick={onDownloadClick}>Test</button>
			<button type="button" onClick={onDownloadClick}>Test</button>
			<button type="button" onClick={onDownloadClick}>Test</button>
			<button type="button" onClick={onDownloadClick}>Test</button>
		</dialog>
	);
}
