import classNames from 'classnames';
import styles from './subtitle.module.css';

export const SubTitle = ({
  coloredText,
  text,
  subCaptionText,
  className
}: SubTitleProps) => {
  return (
    <a className={classNames(styles.wrapper, className)}>
      <h3 className={styles.caption}>
        <span className={styles.colored}>{coloredText}</span> {text}
      </h3>
      {subCaptionText && <p className={styles.subCaption}>{subCaptionText}</p>}
    </a>
  );
};

type SubTitleProps = {
  coloredText: string;
  text: string;
  subCaptionText?: string;
  className?: string;
};
