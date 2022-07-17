import classNames from 'classnames/bind';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { reportContent, reportTitle } from './report';
import styles from './QuickReport.module.scss';

const cx = classNames.bind(styles);

const backgroundColors = ['#4158D0', '#c46af1', '#0093E9', '#9FACE6'];
const backgroundImages = [
    'linear-gradient(90deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
    'linear-gradient(90deg, #c46af1 0%, #21D4FD 100%)',
    'linear-gradient(90deg, #0093E9 0%, #80D0C7 100%)',
    'linear-gradient(90deg, #9FACE6 0%, #74EBD5 100%)',
];
const slideshowDelay = 5000;

function QuickReport() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };
    const decreaseIndex = (prevIndex) =>
        prevIndex === 0 ? backgroundColors.length - 1 : prevIndex - 1;
    const increaseIndex = (prevIndex) =>
        prevIndex === backgroundColors.length - 1 ? 0 : prevIndex + 1;

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => setIndex(increaseIndex), slideshowDelay);

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className={cx('quickReport')}>
            <div
                className={cx('prevSlide')}
                onClick={() => {
                    setIndex(decreaseIndex);
                }}
            >
                <FontAwesomeIcon className={cx('icons')} icon={faChevronLeft} />
            </div>
            <div className={cx('slideshow')}>
                <div
                    className={cx('slideshowSlider')}
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {backgroundColors.map((backgroundColor, index) => (
                        <div
                            className={cx('slide')}
                            key={index}
                            style={{
                                backgroundColor,
                                backgroundImage: backgroundImages[index],
                            }}
                        >
                            <div className={cx('slide-content')}>
                                <div className={cx('report')}>
                                    <p className={cx('report-heading')}>
                                        {reportTitle[index]}
                                    </p>
                                    <p className={cx('report-content')}>
                                        {reportContent[index]}
                                    </p>
                                </div>
                                <button className={cx('view-report-btn')}>
                                    Xem thống kê
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div
                className={cx('nextSlide')}
                onClick={() => {
                    setIndex(increaseIndex);
                }}
            >
                <FontAwesomeIcon className={cx('icons')} icon={faChevronRight} />
            </div>
        </div>
    );
}

export default QuickReport;
