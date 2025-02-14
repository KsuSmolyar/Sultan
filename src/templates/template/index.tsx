import { Outlet } from "react-router-dom";
import { UseMedia } from "../../shared/hooks/useMedia";

import styles from "./template.module.css";
import { Footer } from "../../widgets/Footer";
import { Header, HeaderMobile } from "../../widgets/Header";

export const Template = () => {
	const mobile = UseMedia("(max-width: 768px)");
	return (
		<div className={styles.template}>
			{mobile ? <HeaderMobile /> : <Header />}
			<main className={styles.main}>
				<Outlet />
			</main>

			<Footer />
		</div>
	);
};
