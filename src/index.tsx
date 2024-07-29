import React from "react";
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
