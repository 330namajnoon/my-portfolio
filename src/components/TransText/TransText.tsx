import { Trans, useTranslation } from "react-i18next";
import styled from "styled-components";

type TransTextProps = {
	textKey: string | React.ReactNode;
	textReplace?: Record<string, string>;
	components?: Record<string, React.ReactNode>;
};

const Ins = styled.ins`
	text-decoration: none;
	display: inline-block;
`;

const TransText = ({ textKey, textReplace, components, ...rest }: TransTextProps) => {
	const { t } = useTranslation();

	const basicHtmlNodes = {
		div: <div />,
		span: <span />,
		b: <b />,
		a: <a />,
		p: <p />,
		br: <br />,
		strong: <strong />,
		i: <i />,
		h1: <h1 />,
		h2: <h2 />,
		h3: <h3 />,
		h4: <h4 />,
		h5: <h5 />,
		ul: <ul />,
		li: <li />,
	};

	return typeof textKey === "string" ? (
		<Ins data-trl-id={textKey}>
			<Trans t={t} i18nKey={textKey} values={textReplace} components={{ ...basicHtmlNodes, ...components }} {...rest} />
		</Ins>
	) : (
		<>{textKey}</>
	);
};

export default TransText;
