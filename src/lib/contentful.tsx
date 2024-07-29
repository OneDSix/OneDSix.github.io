import React from 'react'
import getFromUrl from "./get.tsx";
import { useQuery } from '@tanstack/react-query';
import DOMPurify from 'dompurify';
import marked from 'marked';

export default function Contentful({url}:{url: string}): React.JSX.Element {
	const { isPending, error, data } = useQuery({
		queryKey: ['blogPost'],
		queryFn: () => getFromUrl(url)
	});

	if (isPending) return (
		<div>
			<p>Loading...</p>
		</div>
	)

	if (error) return (
		<div>
			<p>An error occurred grabbing this content: {error.message}</p>
		</div>
	)

    const htmlContent: string = (marked as any)(data); // typescript hack
    const sanitizedContent: string = DOMPurify.sanitize(htmlContent);
	return (
		<div className="contentful-element" dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
	)
}
