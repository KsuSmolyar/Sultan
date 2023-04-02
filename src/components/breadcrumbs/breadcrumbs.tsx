import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import { paths } from "../../router";
import styles from "./breadcrumbs.module.css";

export const Breadcrumbs: React.FC<BreadCrumbsProps> = ({
	crumbs,
	className,
}) => {
	return (
		<ol className={classNames(styles.crumbsContainer, className)}>
			<li className={styles.crumb}>
				<Link to={paths.main}>Главная</Link>
			</li>
			{crumbs.map((crumb, index) => (
				<li className={styles.crumb} key={index}>
					<span className={styles.crumbSlash}></span>
					<Link to={`/${crumb.link}`}>{crumb.title}</Link>
				</li>
			))}
		</ol>
	);
};

type BreadCrumbsProps = {
	crumbs: { title: string; link: string }[];
	className?: string;
};
