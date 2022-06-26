import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const handleTip = () => {
    const tipNumber = Math.floor(Math.random() * 3);
    switch (tipNumber) {
        case 0:
            return (
                <div className={cx('footer')}>
                    <span className={cx('tip-content')}>Xem đầy đủ báo cáo?</span>
                    <button>Thống kê</button>
                </div>
            );
        case 1:
            return (
                <div className={cx('footer')}>
                    <span className={cx('tip-content')}>Bỏ qua trang web này?</span>
                    <button>Thêm vào Whitelist</button>
                </div>
            );
        case 2:
            return (
                <div className={cx('footer')}>
                    <span className={cx('tip-content')}>Source code?</span>
                    <button>Xem trang Github</button>
                </div>
            );
        case 3:
            return (
                <div className={cx('footer')}>
                    <span className={cx('tip-content')}>Gỡ cài đặt tiện ích?</span>
                    <button>Gỡ cài đặt</button>
                </div>
            );
        default:
            throw new Error('Invalid Tip');
    }
};

function Footer() {
    return handleTip();
}

export default Footer;
