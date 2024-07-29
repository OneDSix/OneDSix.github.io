import React from "react";
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import './style.scss';
import Home from "./pages/home/home.tsx";
import Mods from "./pages/mods/mods.tsx"
import News from "./pages/news/news.tsx";

function App() {
	return (
		<Router>
			<Header />
			<div className="spacer header" />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/news" element={<News />} />
				<Route path="/mods" element={<Mods />} />
				<Route path="/account" element={<Home />} />
				<Route path="*" element={<NoMatch />} />
			</Routes>
		</Router>
	);
  }

const queryClient = new QueryClient()
// @ts-ignore
ReactDOM.createRoot(document.getElementById('root'))
	.render(
		<React.StrictMode>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</React.StrictMode>
	);

function Header() {
	return (
		<nav>

		</nav>
	)
}

function NoMatch() {
	return (
		<div className="page">
			<h1>Page doesnt exist!</h1>
			<p>
				<i>
				You find yourself in an empty room. There is nothing here but a few chairs and a table with food left out on it.
				Dusty hardwood floors, grimy paper thin walls, shattered glass from the windows nearby that somehow made its way across the room.
				The history of this place, gone in what feels like an instant, but you can see the beauty in the missing and gone.
				<br/><br/>
				You turn around and see yourself out. <b><Link className="homeButton" to="/">Lets go home</Link></b>.
				</i>
			</p>
		</div>
	);
}
