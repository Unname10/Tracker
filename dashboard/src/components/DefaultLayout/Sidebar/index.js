import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faChartLine, faMinus, faGear } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import styles from './Sidebar.module.scss';
import ThemeContext from '~/store/ThemeContext/ThemeContext';
import { ReactComponent as LogoSvg } from '~/images/logo_svg.svg';
import Menu, { MenuItem } from './Menu';

const cx = classNames.bind(styles);

function Sidebar() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={cx('wrapper', theme)}>
            <LogoSvg className={cx('logo')} />
            <Menu>
                <MenuItem
                    title="Chung"
                    to="/"
                    icon={<FontAwesomeIcon icon={faHouse} className={cx('links-icon')} />}
                />
                <MenuItem
                    title="Thống kê"
                    to="/statistics"
                    icon={
                        <FontAwesomeIcon
                            icon={faChartLine}
                            className={cx('links-icon')}
                        />
                    }
                />
                <MenuItem
                    title="Ngoại lệ"
                    to="/exclusion"
                    icon={<FontAwesomeIcon icon={faMinus} className={cx('links-icon')} />}
                />
                <MenuItem
                    title="Cài đặt"
                    to="/setting"
                    icon={<FontAwesomeIcon icon={faGear} className={cx('links-icon')} />}
                />
            </Menu>
        </div>
    );
}

export default Sidebar;
