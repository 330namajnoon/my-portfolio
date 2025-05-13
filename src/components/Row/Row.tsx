import { ReactNode } from "react";
import { SX } from "@/components/QueryStyler/QueryStyler";
import Box from "../Box";

const Row = ({ children, ...rest }: { sx?: SX; children?: ReactNode }) => {
	return (
		<Box sx={{ display: "flex", flexDirection: "row", ...rest.sx }} {...rest}>
			{children}
		</Box>
	);
};

export default Row;
