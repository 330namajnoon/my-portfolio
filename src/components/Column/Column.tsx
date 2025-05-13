import { SX } from "@/components/QueryStyler/QueryStyler";
import { ReactNode } from "react";
import Box from "@/components/Box";

const Column = ({ children, ...rest }: { sx?: SX; children?: ReactNode }) => {
	return (
		<Box sx={{ display: "flex", flexDirection: "column", ...rest.sx }} {...rest}>
			{children}
		</Box>
	);
};

export default Column;
