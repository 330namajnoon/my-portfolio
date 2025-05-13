import { ReactNode } from "react";
import QueryStyler, { SX } from "@/components/QueryStyler/QueryStyler";

export type TextTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

const Text = ({ children, tag = "p", sx, size = 20, ...rest }: { children?: ReactNode; tag?: TextTag; sx?: SX; size?: number }) => {
	const tags = {
		h1: <h1 {...rest}>{children}</h1>,
		h2: <h2 {...rest}>{children}</h2>,
		h3: <h3 {...rest}>{children}</h3>,
		h4: <h4 {...rest}>{children}</h4>,
		h5: <h5 {...rest}>{children}</h5>,
		h6: <h6 {...rest}>{children}</h6>,
		p: <p {...rest}>{children}</p>,
		span: <span {...rest}>{children}</span>,
	};

	return <QueryStyler sx={{ fontSize: size ?? `${size}px`, ...sx }}>{tags[tag] || tags.p}</QueryStyler>;
};

export default Text;
