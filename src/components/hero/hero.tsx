import React from 'react';
import styles from './hero.module.css';
import HeroImg from './hero.png';
import { ButtonOrLink } from '../ui/button/button';
import { HeroInfoItem } from './heroInfoItem/heroInfoItem';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <img className={styles.heroImg} src={HeroImg} alt='' />

      <div className={styles.wrapperInner}>
        <div className={styles.heroInfoContainer}>
          <div className={styles.heroText}>
            <h2 className={styles.heroCaption}>
              Бытовая химия, косметика и хозтовары
            </h2>
            <p className={styles.heroSubCaption}>
              оптом по кокчетаву и области
            </p>
          </div>
          <div className={styles.heroControls}>
            <ButtonOrLink className={styles.catalogButton}>
              В КАТАЛОГ
            </ButtonOrLink>
            <div className={styles.controlsInfo}>
              <HeroInfoItem
                textUpper='Только самые'
                textLower='выгодные предложения'
              />
              <HeroInfoItem
                textUpper='Бесплатная доставка'
                textLower='по '
                boldText='Кокчетаву от 10 000 т'
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heroBlur}></div>
    </section>
  );
};
