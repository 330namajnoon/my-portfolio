import { useContext } from "react";
import ThemeContext from "@/theme/ThemeContext";

const useTheme = () => {
	const theme = useContext(ThemeContext);

	return theme!;
};

export default useTheme;
