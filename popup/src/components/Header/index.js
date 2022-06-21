import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faPlus, faChartSimple } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import logo from '~/images/logo_32.png';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('header')}>
            <div className={cx('logo')}>
                <img src={logo} alt="Logo" className={cx('logo-image')} />
                <span className={cx('logo-title')}>Tracker</span>
            </div>
            <div className={cx('actions')}>
                <Tippy content="Thêm vào Whitelist">
                    <button className={cx('add-whitelist')}>
                        <FontAwesomeIcon icon={faPlus} className={cx('icons')} />
                    </button>
                </Tippy>
                <Tippy content="Thống kê">
                    <button>
                        <FontAwesomeIcon icon={faChartSimple} className={cx('icons')} />
                    </button>
                </Tippy>
                <Tippy content="Thiết lập">
                    <button className={cx('setting-icon')}>
                        <FontAwesomeIcon icon={faGear} className={cx('icons')} />
                    </button>
                </Tippy>
            </div>
        </header>
    );
}

export default Header;
