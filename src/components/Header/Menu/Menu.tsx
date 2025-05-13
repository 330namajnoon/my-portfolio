import Row from "@/components/Row";
import Text from "@/components/Text";
import TransText from "@/components/TransText";
import useTheme from "@/theme/useTheme";
import { useLocation, useNavigate } from "react-router-dom";
import * as Styles from "./styles";

const Menu = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { theme } = useTheme();

	const menuItems = [
		{
			id: "1",
			label: <TransText textKey={"menu_items_home"} />,
			icon: "home",
			path: ["/home", "/"],
		},
		{
			id: "2",
			label: <TransText textKey={"menu_items_home"} />,
			icon: "aboutme",
			path: ["/aboutme"],
		},
	];

	const selectedMenuItem = menuItems.find((item) => item.path.includes(location.pathname));

	return (
		<Row>
			{menuItems.map((item, index) => (
				<Row key={index}>
					<Styles.ItemButton onClick={() => navigate(item.path[0])}>
						<Text tag="h1" sx={{ color: theme.palette.color_001 }}>
							#
						</Text>
						<Text tag="h1" sx={{ color: theme.palette.color_005, opacity: selectedMenuItem?.id === item.id ? 1 : 0.5 }}>{item.label}</Text>
					</Styles.ItemButton>
				</Row>
			))}
		</Row>
	);
};

export default Menu;
