import colors from "./colors";

export const theme = {
	colors: colors,
	palette: (id?: ThemeId) => {
		if (!id) {
			return colors[0].values;
		}
		const color = colors.find((color) => color.id === id);
		if (!color) {
			throw new Error(`Color with id ${id} not found`);
		}
		return color.values;
	},
};

export type Palette = ReturnType<typeof theme.palette>;

export type Theme = {
	colors: typeof colors;
	palette: Palette;
};

export type ThemeId = typeof colors[number]["id"];

export default theme;
