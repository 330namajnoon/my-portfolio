/* eslint-disable @typescript-eslint/no-explicit-any */
import { Children, cloneElement, CSSProperties, useEffect, useState } from "react";

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

type SxValue<T> = T | Partial<Record<Breakpoint, T>>;

export type SX = {
	[K in keyof CSSProperties]?: SxValue<CSSProperties[K]>;
};

type QueryStylerProps = {
	children: React.ReactNode;
	sx?: SX;
	Component?: React.ElementType | null;
};

const QueryStyler = ({ children, sx, Component = null, ...rest }: QueryStylerProps) => {
	const [width, setWidth] = useState(window.innerWidth);

	const getSize = (width = 0) => {
		if (width < 576) return "xs";
		if (width < 768) return "sm";
		if (width < 992) return "md";
		if (width < 1200) return "lg";
		return "xl";
	};

	const getChildren = (sx: any) => {
		const sizes = ["xs", "sm", "md", "l", "xl"];
		const size: any = getSize(width);
		if (sx && !Component) {
			return Children.map(children, (child: any) => {
				const keys = Object.keys(sx);
				const style: any = {};
				keys.forEach((key) => {
					const prop: any = sx[key];
					if (typeof prop === "object") {
						const i = sizes.indexOf(size);
						const t = Object.keys(prop)
							.map((key) => sizes.indexOf(key))
							.sort((a, b) => a - b);
						const j = t.includes(i) ? t.find((t) => t <= i)! : t[t.length - 1];
						style[key] = prop[sizes[j]];
					} else {
						style[key] = prop;
					}
				});
				return cloneElement(child, { style, ...rest });
			});
		} else if (sx && Component) {
			const keys = Object.keys(sx);
			const style: any = {};
			keys.forEach((key) => {
				const prop: any = sx[key];
				if (typeof prop === "object") {
					const i = sizes.indexOf(size);
					const t = Object.keys(prop)
						.map((key) => sizes.indexOf(key))
						.sort((a, b) => a - b);
					const j = t.find((t) => t >= i) || t[t.length - 1];
					style[key] = prop[sizes[j]];
				} else {
					style[key] = prop;
				}
			});
			return (
				<Component style={style} {...rest}>
					{children}
				</Component>
			);
		}
		return children;
	};

	useEffect(() => {
		window.addEventListener("resize", () => setWidth(window.innerWidth));
		return () => window.removeEventListener("resize", () => setWidth(window.innerWidth));
	}, []);

	return getChildren(sx);
};

export default QueryStyler;
