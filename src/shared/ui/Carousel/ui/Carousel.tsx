import React, { MouseEvent, useState } from 'react';
import { PropsWithChildren, useEffect, useRef } from 'react';
import styles from '../carousel.module.css';
import classNames from 'classnames';
import { useCombinedRefs } from '../../../../shared/hooks/useCombinedRefs';
import { ButtonNext, ButtonPrev } from '../../Icons';

const LAST_ITEM_COUNT = 1;
const CORRECT_COEFFICIENT = 5;
export const Carousel = React.forwardRef<
    HTMLDivElement,
    PropsWithChildren<CarouselProps>
>(
    (
        {
            carouselClassName,
            withButton,
            children,
            scrollMultipleItems,
            carouselContainerClassName,
        },
        ref
    ) => {
        const [showPrevButton, setShowPrevButton] = useState(false);
        const [showNextButton, setShowNextButton] = useState(true);
        const carouselContentRef = useRef<HTMLDivElement | null>(null);
        const combinedRefs = useCombinedRefs(ref, carouselContentRef);
        const offsetRef = useRef(0);
        const contentWidthRef = useRef(0);

        const onPrevClick = () => {
            carouselContentRef.current?.scrollBy({
                left: -offsetRef.current,
                behavior: 'smooth',
            });
        };

        const onNextClick = () => {
            carouselContentRef.current?.scrollBy({
                left: offsetRef.current,
                behavior: 'smooth',
            });
        };

        const onContentScroll = (event: MouseEvent<HTMLDivElement>) => {
            const scrollLeft = event.currentTarget.scrollLeft;
            const scrollWidth =
                event.currentTarget.scrollWidth - contentWidthRef.current;
            if (scrollLeft > 0) {
                setShowPrevButton(true);
            } else {
                setShowPrevButton(false);
            }
            if (scrollLeft + CORRECT_COEFFICIENT > scrollWidth) {
                setShowNextButton(false);
            } else {
                setShowNextButton(true);
            }
        };

        useEffect(() => {
            const carouselContent = carouselContentRef.current;
            let carouselContentWidth = 0;
            const resizeObserver = new ResizeObserver((entries) => {
                for (const carouselContentEntry of entries) {
                    if (carouselContentEntry.borderBoxSize) {
                        carouselContentWidth =
                            carouselContentEntry.borderBoxSize[0].inlineSize;
                        contentWidthRef.current = carouselContentWidth;
                        const carouselItemWidth =
                            carouselContentEntry.target.children[0].getBoundingClientRect()
                                .width;
                        const visibleItemsCount = Math.floor(
                            carouselContentWidth / carouselItemWidth
                        );
                        const scrollItemsCount = scrollMultipleItems
                            ? visibleItemsCount - LAST_ITEM_COUNT
                            : 1;
                        offsetRef.current = carouselItemWidth * scrollItemsCount;
                        // if (withButton) {
                        //   const scrollWidth = carouselContentEntry.target.scrollWidth;
                        //   const scrollLeft = carouselContentEntry.target.scrollLeft;
                        // }
                    }
                }
            });
            if (carouselContent) {
                resizeObserver.observe(carouselContent);
            }
            return () => {
                carouselContent && resizeObserver.unobserve(carouselContent);
            };
        }, [carouselContentRef, offsetRef, withButton, scrollMultipleItems]);

        return (
            <section className={classNames(styles.carousel, carouselClassName)}>
                {withButton && showPrevButton && (
                    <button className={styles.buttonPrev} onClick={onPrevClick}>
                        <ButtonPrev />
                    </button>
                )}
                <div
                    ref={combinedRefs}
                    className={classNames(
                        styles.carouselChildrenContainer,
                        carouselContainerClassName
                    )}
                    onScroll={onContentScroll}
                >
                    {children}
                </div>

                {withButton && showNextButton && (
                    <button className={styles.buttonNext} onClick={onNextClick}>
                        <ButtonNext />
                    </button>
                )}
            </section>
        );
    }
);

type CarouselProps = {
    carouselClassName?: string;
    withButton?: boolean;
    scrollMultipleItems?: boolean;
    carouselContainerClassName?: string;
};
