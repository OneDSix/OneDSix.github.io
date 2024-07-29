import { useEffect, useState } from "react";

function isDesktop() {
	const userAgent = navigator.userAgent.toLowerCase()
	return !(/mobile|android|ipad|iphone|tablet|kindle|silk|fennec/).test(userAgent)
}

export default function useDeviceType() {
	const [isDesktopDevice, setIsDesktopDevice] = useState(true)

	useEffect(() => {
		setIsDesktopDevice(isDesktop)
	}, [])

	return isDesktopDevice
}
