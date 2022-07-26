import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGear,
    faPlus,
    faChartSimple,
    faSun,
    faMoon,
    faMinus,
    faExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { useContext, useState, useLayoutEffect } from 'react';
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
    let [url, setUrl] = useState();
    useLayoutEffect(() => {
        const getCurrentTab = async () => {
            let currentTab = await chrome.tabs.query({
                active: true,
                currentWindow: true,
            });
            setUrl(new URL(currentTab[0].url));
        };
        getCurrentTab();
    }, []);

    const isUrlValid = url ? url.protocol.startsWith('http') : false;
    const [exclusionBtn, setExclusionBtn] = useState(
        url ? exclusion.includes(url.hostname) : false
    );
    if (url) {
        var handleToggleWhileList = () => {
            if (exclusionBtn) {
                const indexInExclusionList = exclusion.findIndex((value) => {
                    return value === url.hostname;
                });
                exclusion.splice(indexInExclusionList, 1);
                chrome.storage.local.set({ exclusion });
            } else {
                exclusion.push(url.hostname);
                chrome.storage.local.set({ exclusion });
            }
            setExclusionBtn(!exclusionBtn);
        };
    }
    const handleSetTheme = async () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
        setting.theme = theme;
        chrome.storage.local.set({ setting });
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
                {isUrlValid ? (
                    exclusionBtn ? (
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
                    )
                ) : (
                    <Tippy content="Trang hiện tại không hợp lệ">
                        <div className={cx('block')}>
                            <FontAwesomeIcon
                                icon={faExclamation}
                                className={cx('icons')}
                            />
                        </div>
                    </Tippy>
                )}
                <Tippy content="Xem báo cáo">
                    <a
                        className={cx('btn')}
                        href="/dashboard/general.html"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faChartSimple} className={cx('icons')} />
                    </a>
                </Tippy>
                <Tippy content="Thiết lập">
                    <a
                        className={cx('btn')}
                        href="/dashboard/config.html"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faGear} className={cx('icons')} />
                    </a>
                </Tippy>
            </div>
        </div>
    );
}

export default Header;
