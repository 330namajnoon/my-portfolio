import { createContext, Dispatch, SetStateAction } from "react";
import { Theme } from "..";

const ThemeContext = createContext<{theme: Theme, setTheme: Dispatch<SetStateAction<Theme>>} | null>(null);

export default ThemeContext;