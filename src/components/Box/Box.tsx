import { ReactNode } from "react";
import QueryStyler, { SX } from "@/components/QueryStyler/QueryStyler";

const Box = ({ children, ...rest }: { sx?: SX; children?: ReactNode }) => {
	return (
		<QueryStyler sx={{ ...rest }.sx}>
			<div {...rest}>{children}</div>
		</QueryStyler>
	);
};

export default Box;
