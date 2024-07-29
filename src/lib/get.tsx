import axios from 'axios'

export default async function getFromUrl(post: string): Promise<any> {
    return await axios
		.get(post)
		.then((res) => res.data)
}
