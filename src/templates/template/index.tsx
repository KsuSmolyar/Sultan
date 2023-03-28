import React from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { HeaderMobile } from "../../components/header/headerMobile";
import { UseMedia } from "../../hooks/useMedia";

import styles from "./template.module.css";

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
