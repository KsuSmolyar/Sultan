import { useState } from "react";
import styles from "../sidebar.module.css";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarForm } from "./SidebarForm";
import { SidebarCategories } from "./SidebarCategories";

export const Sidebar = () => {
    const [expand, setExpand] = useState(false);

    return (
        <div className={styles.sidebar}>
            <SidebarHeader expand={expand} setExpand={setExpand} />
            <SidebarForm expand={expand} />
            <SidebarCategories />
        </div>
    );
};
