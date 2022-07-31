import { longDateFormat, shortDateFormat, shortTimeFormat } from '~/module/date';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { useContext } from 'react';
import styles from './PagesVisited.module.scss';
import DataContext from '~/store/DataContext/DataContext';
import ThemeContext from '~/store/ThemeContext/ThemeContext';
import DateContext from '~/store/DateContext/DateContent';

const cx = classNames.bind(styles);

function PagesVisited() {
    const { byDate } = useContext(DataContext);
    const { theme } = useContext(ThemeContext);
    const { date, setDate } = useContext(DateContext);

    const minDate = Math.min(...Object.keys(byDate).map((value) => new Date(value)));
    const maxDate = Math.max(...Object.keys(byDate).map((value) => new Date(value)));
    const handlePrevDate = () => {
        setDate((prevDate) => {
            const dateObj = new Date(prevDate);
            dateObj.setDate(dateObj.getDate() - 1);
            return shortDateFormat(dateObj);
        });
    };
    const handleNextDate = () => {
        setDate((prevDate) => {
            const dateObj = new Date(prevDate);
            dateObj.setDate(dateObj.getDate() + 1);
            return shortDateFormat(dateObj);
        });
    };
    return (
        <div className={cx('wrapper', theme)}>
            <div className={cx('header')}>
                <button
                    className={cx('btn', 'prevDate')}
                    onClick={handlePrevDate}
                    disabled={new Date(date) <= minDate}
                >
                    <FontAwesomeIcon icon={faAngleLeft} className={cx('icons')} />
                </button>
                <span className={cx('header-title')}>
                    {longDateFormat(new Date(date))}
                </span>
                <button
                    className={cx('btn', 'nextDate')}
                    onClick={handleNextDate}
                    disabled={new Date(date) >= maxDate}
                >
                    <FontAwesomeIcon icon={faAngleRight} className={cx('icons')} />
                </button>
            </div>
            <div className={cx('content')}>
                <div className={cx('pagesVisitedList')}>
                    {byDate[date] ? (
                        Object.keys(byDate[date])
                            .sort((a, b) => byDate[date][b] - byDate[date][a])
                            .map((value, index) => {
                                const faviconUrl = `https://www.google.com/s2/favicons?sz=16&domain_url=${value}`;
                                return (
                                    <div key={index} className={cx('pages')}>
                                        <div className={cx('pages-report')}>
                                            <div className={cx('pages-info')}>
                                                <img src={faviconUrl} />
                                                <span className={cx('pages-title')}>
                                                    {value}
                                                </span>
                                            </div>
                                            <span className={cx('pages-usage-time')}>
                                                {shortTimeFormat(byDate[date][value])}
                                            </span>
                                        </div>
                                        <button
                                            className={cx('view-report-btn')}
                                            title="Xem báo cáo"
                                        >
                                            <FontAwesomeIcon
                                                icon={faAngleRight}
                                                className={cx('icons')}
                                            />
                                        </button>
                                    </div>
                                );
                            })
                    ) : (
                        <span className={cx('message')}>Không có dữ liệu</span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PagesVisited;
