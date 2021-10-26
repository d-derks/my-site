import React, { useRef, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './ItemScroller.module.scss';

const ItemScroller = ({ children}) => {
    let items;
    const [currentIndex, updateCurrentIndex] = useState(0);
    const [isPrevVisible, updatePrevVisible] = useState(false);
    const itemRef = useRef();
    const containerRef = useRef(null);
    const scrollContainer = containerRef;

    useEffect(() => {
        getItemMetrics(scrollContainer);

        window.addEventListener("resize", () => getItemMetrics(scrollContainer));

        return () => {
            window.removeEventListener("resize", getItemMetrics);
        };
    });


    let sliderItems = children.map((item, index) => {
        return (
            <div
                data-host="item-scroller-item"
                ref={itemRef}
                key={index}
                className={styles.item}
            >
                {item}
            </div>
        )
    })

   const getItemMetrics = (element) => {
        const listItems = element.current?.querySelectorAll('[data-host ="item-scroller-item"]');
        items = [];

        listItems?.forEach((item) => {
            items.push([item.offsetLeft]);
        });
    }

    function scrollToIndex(index) {
        scrollContainer.current.scrollTo({
            left: items[index][0],
            behavior: "smooth"
        });

        updateCurrentIndex(index);
        updatePrevVisible(index === items.length - 1);
    }

    const scrollPrev = () => {
        if (currentIndex !== 0 && currentIndex <= items?.length) {
            scrollToIndex(currentIndex - 1);
        }
    }

    function scrollNext() {
        if (currentIndex < items?.length - 1) {
            scrollToIndex(currentIndex + 1);
        }
    }

    useEffect(() => {
        createPagination();
    },[]);

    const createPagination = () => {
        const totalDots = items?.length;
        const pagination = document.querySelector('[data-host="item-scroller-pagination"]');
        //
        for (let i = 0; i < totalDots; i++) {
            const paginationDot = document.createElement("span");
            paginationDot.className += "pagination-dot"
            pagination.appendChild(paginationDot);
        }
        //navigationPagination(totalDots);
    }
    //
    // // navigate through pagination
    //
    // const navigationPagination = (totalDots) => {
    //     const dotList = items.filter((x, i) => i % (totalDots));
    //     console.log(dotList, 'dot list')
    // }


    return (
        <div className={styles.host}>
            <div
                className={styles.list}
                ref={containerRef}
            >
                {sliderItems}
            </div>
            <button
                className={`${styles.button} ${styles.isPrev}`}
                onClick={scrollPrev}
                title="scroll left"
                type="button"
                {...(currentIndex === 0 ? {disabled: 'true'} : {})}
            >
                Prev
            </button>
            <button
                className={`${styles.button} ${styles.isNext}`}
                onClick={scrollNext}
                title="scroll right"
                type="button"
                {...(isPrevVisible ? {disabled: 'true'} : {})}
            >
                Next
            </button>
            <div
                className={styles.pagination}
                data-host="item-scroller-pagination"
            >

            </div>
        </div>
    );
};

export default ItemScroller;

ItemScroller.propTypes = {
    children: PropTypes.node.isRequired,
};
