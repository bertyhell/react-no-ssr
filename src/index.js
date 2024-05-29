import { FC, ReactNode, useEffect, useState } from 'react';

export const NoServerSideRendering: FC<NoSsrProps> = ({ children, onSSR = <span /> }) => {
	const [renderChildren, setRenderChildren] = useState(false);

	useEffect(() => {
		setRenderChildren(true);
	}, []);

	return renderChildren ? children : onSSR;
};
