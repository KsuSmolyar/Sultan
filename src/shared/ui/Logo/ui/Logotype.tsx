import { Link } from "react-router-dom";
import styles from "../logotype.module.css";
import { paths } from '../../../../router';
import { LogoWhite, Logo } from "../../Icons";

type LogotypeProps = {
    variant?: "standard" | "white" 
}
export const Logotype = ({variant = "standard"}: LogotypeProps) => {
    return (
        <Link to={paths.main} className={styles.logotype}>
            {variant=== "white" ? <LogoWhite /> : <Logo />}
        </Link>
    )
}
