import ThemeContext from "@/theme/ThemeContext";
import theme, { Theme } from "..";
import colors from "../colors";
import { useState } from "react";

type ThemeProviderProps = {
	children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme_, setTheme] = useState<Theme>({
		colors: colors,
		palette: theme.palette(),
	});

	return <ThemeContext.Provider value={{ theme: theme_, setTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
