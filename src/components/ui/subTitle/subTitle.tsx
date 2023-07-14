import styles from './subtitle.module.css';

export const SubTitle = ({
  coloredText,
  text,
  subCaptionText,
}: SubTitleProps) => {
  return (
    <a className={styles.wrapper}>
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
};
