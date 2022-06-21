import classNames from 'classnames/bind';
import styles from './QuickReport.module.scss';

const cx = classNames.bind(styles);

const timeToUseToday = 300000;
const timeToUseThisWeek = 1500000;
const timeToUseThisMonth = 7500000;
const mostUsedSiteOfTheMonth = 'www.youtube.com';

function QuickReport() {
    return (
        <div className={cx('quickreport')}>
            <h4 className={cx('header')}>Báo cáo nhanh: </h4>
            <div className={cx('content')}>
                <p className={cx('contentReport')}>
                    Thời gian sử dụng hôm nay: {timeToUseToday}
                </p>
                <p className={cx('contentReport')}>
                    Thời gian sử dụng tuần này: {timeToUseThisWeek}
                </p>
                <p className={cx('contentReport')}>
                    Thời gian sử dụng tháng này: {timeToUseThisMonth}
                </p>
                <p className={cx('contentReport')}>
                    Truy cập nhiều nhất: {mostUsedSiteOfTheMonth}
                </p>
            </div>
        </div>
    );
}

export default QuickReport;
