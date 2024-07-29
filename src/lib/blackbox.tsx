import React from "react";

export default function Blackbox({on}:{on:boolean}) {
	return (
		<div hidden={!on} className="blackbox" />
	)
}
