import classNames from "classnames";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../buttonBack.module.css";
import { ButtonOrLink } from "../../../shared/ui/ButtonOrLink";
import { ArrowLeftDark } from "../../../shared/ui/Icons";
export const ButtonBack: React.FC<{ className?: string }> = ({ className }) => {
    const navigate = useNavigate();

    const onClick = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    return (
        <div className={classNames(styles.buttonBackContainer, className)}>
            <ButtonOrLink
                className={styles.sidebarButton}
                variant='small'
                round
                onClick={onClick}
            >
                <ArrowLeftDark className={styles.sidebarButtonImg} />
            </ButtonOrLink>
            <p className={styles.text}>Назад</p>
        </div>
    );
};
