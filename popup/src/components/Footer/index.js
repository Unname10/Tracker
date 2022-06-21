import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);
const tipNumber = Math.floor(Math.random() * 3);

function Footer() {
    switch (tipNumber) {
        case 0:
            return (
                <div className={cx('footer')}>
                    <span className={cx('')}>
                        Muốn biết thời gian bạn sử dụng internet?
                    </span>
                    <button>Xem thống kê</button>
                </div>
            );
        default:
            break;
    }
}

export default Footer;
