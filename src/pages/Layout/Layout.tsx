import Column from "@/components/Column";
import Header from "@/components/Header";
import useTheme from "@/theme/useTheme";
import { Outlet } from "react-router-dom";

const Layout = () => {
	const { theme } = useTheme();
	return (
		<Column sx={{ backgroundColor: theme.palette.color_003, minHeight: "100vh" }}>
			<Header />
			<Outlet />
		</Column>
	);
};

export default Layout;
