import classNames from 'classnames/bind';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './QuickReport.module.scss';

const cx = classNames.bind(styles);
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#00d1c7'];
const slideshowDelay = 5000;
const reportText = [
    'Thời gian sử dụng hôm nay:',
    'Thời gian sử dụng tuần này:',
    'Thời gian sử dụng tháng này:',
    'Truy cập nhiều nhất:',
];
function QuickReport() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            slideshowDelay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className={cx('quickreport')}>
            <div
                className={cx('prevSlide')}
                onClick={() => {
                    setIndex((prevIndex) =>
                        prevIndex === 0 ? colors.length - 1 : prevIndex - 1
                    );
                }}
            >
                <FontAwesomeIcon className={cx('icons')} icon={faChevronLeft} />
            </div>
            <div className={cx('slideshow')}>
                <div
                    className={cx('slideshowSlider')}
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {colors.map((backgroundColor, index) => (
                        <div
                            className={cx('slide')}
                            key={index}
                            style={{ backgroundColor }}
                        >
                            {reportText[index]}
                        </div>
                    ))}
                </div>
            </div>
            <div
                className={cx('nextSlide')}
                onClick={() => {
                    setIndex((prevIndex) =>
                        prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                    );
                }}
            >
                <FontAwesomeIcon className={cx('icons')} icon={faChevronRight} />
            </div>
        </div>
    );
}

export default QuickReport;
