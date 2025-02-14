import styles from '../contactsblock.module.css';
import classNames from 'classnames';

export const ContactsBlock = ({ variant = 'dark' }: ContactsBlockProps) => {
    return (
        <div
            className={classNames(styles.phoneInfo, {
                [styles.phoneInfoDark]: variant === 'dark',
                [styles.phoneInfoLight]: variant === 'light',
            })}
        >
            <a href='+77774900091' className={styles.phoneNumber}>
                +7 (777) 777-77-77
            </a>
            <p className={styles.workingHours}>время работы: 9:00-20:00</p>
            <button className={styles.callback}>Заказать звонок</button>
        </div>
    );
};

type ContactsBlockProps = {
    variant?: 'light' | 'dark';
};
