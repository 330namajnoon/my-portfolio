import Row from "@/components/Row";
import Menu from "./Menu";

const Header = () => {
	return (
		<Row sx={{ width: "100%", padding: "16px" }}>
			<Menu />
		</Row>
	);
};

export default Header;
