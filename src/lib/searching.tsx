import React from 'react'
import getFromUrl from "./get.tsx";
import { useQuery } from '@tanstack/react-query';
import Contentful from './contentful.tsx';

const searchUrl = ""

export default function Searching({search}:{search: string}): React.JSX.Element {
	const { isPending, error, data } = useQuery({
		queryKey: ['blogPost'],
		queryFn: () => getFromUrl(`${searchUrl}/?${search}`)
	});

	if (isPending) return (
		<div className="search-element loading">
			<p>Loading...</p>
		</div>
	)

	if (error) return (
		<div className="search-element error">
			<p>An error occurred grabbing this content: {error.message}</p>
		</div>
	)

	console.log(data)
	return (
		<div className="search-element success">
			<Contentful url=''/>
		</div>
	)
}
