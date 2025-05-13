import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/pages/Layout";
import Home from "@/pages/Home";
import Aboutme from "@/pages/Aboutme";
import { PATH } from "./constants";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<Home />} />
					<Route path={PATH.HOME} element={<Home />} />
					<Route path={PATH.ABOUTME} element={<Aboutme />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
