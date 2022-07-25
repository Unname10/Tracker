import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGear,
    faPlus,
    faChartSimple,
    faSun,
    faMoon,
    faMinus,
} from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import logo from '~/images/logo_32.png';
import ThemeContext from '~/store/ThemeContext/ThemeContext';
import DataContext from '~/store/DataContext/DataContext';

const cx = classNames.bind(styles);

function Header() {
    const { theme, setTheme } = useContext(ThemeContext);
    const { exclusion, setting } = useContext(DataContext);
    const [exclusionBtn, setExclusionBtn] = useState(
        exclusion.includes(window.location.hostname)
    );

    const handleSetTheme = async () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
        setting.theme = theme;
    };

    const handleToggleWhileList = () => {
        if (exclusionBtn) {
            const indexInExclusionList = exclusion.findIndex((value) => {
                return value === window.location.hostname;
            });
            exclusion.splice(indexInExclusionList, 1);
        } else {
            exclusion.push(window.location.hostname);
        }
        setExclusionBtn(!exclusionBtn);
    };

    return (
        <div className={cx('header', theme)}>
            <div className={cx('logo')}>
                <img src={logo} alt="Logo" className={cx('logo-image')} />
                <span className={cx('logo-title')}>Tracker</span>
            </div>
            <div className={cx('actions')}>
                <Tippy content={theme === 'dark' ? 'Lightmode' : 'Darkmode'}>
                    <button className={cx('btn')} onClick={handleSetTheme}>
                        <FontAwesomeIcon
                            icon={theme !== 'dark' ? faMoon : faSun}
                            className={cx('icons')}
                        />
                    </button>
                </Tippy>
                {exclusionBtn ? (
                    <Tippy content="Xóa khỏi Whitelist">
                        <button className={cx('btn')} onClick={handleToggleWhileList}>
                            <FontAwesomeIcon icon={faMinus} className={cx('icons')} />
                        </button>
                    </Tippy>
                ) : (
                    <Tippy content="Thêm vào Whitelist">
                        <button className={cx('btn')} onClick={handleToggleWhileList}>
                            <FontAwesomeIcon icon={faPlus} className={cx('icons')} />
                        </button>
                    </Tippy>
                )}
                <Tippy content="Xem báo cáo">
                    <a className={cx('btn')} href="/dashboard/general.html">
                        <FontAwesomeIcon icon={faChartSimple} className={cx('icons')} />
                    </a>
                </Tippy>
                <Tippy content="Thiết lập">
                    <a className={cx('btn')} href="/dashboard/config.html">
                        <FontAwesomeIcon icon={faGear} className={cx('icons')} />
                    </a>
                </Tippy>
            </div>
        </div>
    );
}

export default Header;
