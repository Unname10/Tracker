import classNames from 'classnames/bind';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {
    findSum,
    getAllDateInCurrentWeek,
    getAllDateInCurrentMonth,
    formatDate,
} from './date';
import styles from './QuickReport.module.scss';

const cx = classNames.bind(styles);

//@ Màu của Slideshow
const backgroundColors = ['#4158D0', '#c46af1', '#0093E9', '#9FACE6'];
const backgroundImages = [
    'linear-gradient(90deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
    'linear-gradient(90deg, #c46af1 0%, #21D4FD 100%)',
    'linear-gradient(90deg, #0093E9 0%, #80D0C7 100%)',
    'linear-gradient(90deg, #9FACE6 0%, #74EBD5 100%)',
];
const slideshowDelay = 5000;

//@ Tiêu đề của từng slide
const reportTitle = [
    'Thời gian sử dụng hôm nay:',
    'Thời gian sử dụng tuần này:',
    'Thời gian sử dụng tháng này:',
    'Truy cập nhiều nhất:',
];

//@ Lấy dữ liệu của ngày hiện tại
const data = {
    '2022-7-1': {
        'codepen.io': 53849,
        'developer.mozilla.org': 3549,
        'fullstack.edu.vn': 101347,
        'github.com': 16678,
        localhost: 624892,
        'tinloof.com': 106244,
        'www.google.com': 15145,
        'www.w3schools.com': 12061,
        'www.youtube.com': 13375,
    },
    '2022-7-2': {
        'blogchiasekienthuc.com': 24103,
        'codepen.io': 3515,
        'drive.google.com': 5440,
        'quantrimang.com': 3854,
        'www.youtube.com': 25235,
    },
    '2022-7-3': {
        'codepen.io': 648,
        'cssgradient.io': 128169,
        'fonts.google.com': 63672,
        'fullstack.edu.vn': 59051,
        localhost: 278547,
        'translate.google.com': 13910,
        'www.google.com': 2755,
        'www.w3schools.com': 83858,
        'www.youtube.com': 64177,
    },
    '2022-7-5': {
        'bobbyhadz.com': 11392,
        'codepen.io': 1673,
        'cssgradient.io': 5778,
        'developer.mozilla.org': 37269,
        'ed.ted.com': 1527,
        'fonts.google.com': 9942,
        localhost: 99937,
        'quantrimang.com': 18168,
        'stackoverflow.com': 1173,
        'tinloof.com': 1725,
        'translate.google.com': 38033,
        'www.geeksforgeeks.org': 30880,
        'www.w3schools.com': 1663,
        'www.youtube.com': 42099,
    },
    '2022-7-6': {
        'developer.mozilla.org': 82506,
        localhost: 115862,
        'stackoverflow.com': 35635,
        'www.geeksforgeeks.org': 1938,
        'www.youtube.com': 22694,
    },
};
const date = formatDate(new Date());
const dateInWeek = getAllDateInCurrentWeek();
const dateInMonth = getAllDateInCurrentMonth();

const timeUsedToday = findSum(data[date]);
const timeUsedInWeek = dateInWeek.reduce((sum, date) => {
    console.log(date);
    console.log(data[date]);
    return sum + findSum(data[date]);
}, 0);
const timeUsedInMonth = dateInMonth.reduce((sum, date) => {
    return sum + findSum(data[date]);
}, 0);

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
                    prevIndex === backgroundColors.length - 1 ? 0 : prevIndex + 1
                ),
            slideshowDelay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className={cx('quickReport')}>
            <div
                className={cx('prevSlide')}
                onClick={() => {
                    setIndex((prevIndex) =>
                        prevIndex === 0 ? backgroundColors.length - 1 : prevIndex - 1
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
                    {backgroundColors.map((backgroundColor, index) => (
                        <div
                            className={cx('slide')}
                            key={index}
                            style={{
                                backgroundColor,
                                backgroundImage: backgroundImages[index],
                            }}
                        >
                            <div className={cx('slideshow-right')}>
                                <p className={cx('slideshow-heading')}>
                                    {reportTitle[index]}
                                </p>
                                <p className={cx('slideshow-content')}></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div
                className={cx('nextSlide')}
                onClick={() => {
                    setIndex((prevIndex) =>
                        prevIndex === backgroundColors.length - 1 ? 0 : prevIndex + 1
                    );
                }}
            >
                <FontAwesomeIcon className={cx('icons')} icon={faChevronRight} />
            </div>
        </div>
    );
}

export default QuickReport;
