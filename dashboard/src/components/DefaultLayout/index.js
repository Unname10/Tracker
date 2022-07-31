import classNames from 'classnames/bind';
import { useContext } from 'react';
import styles from './DefaultLayout.module.scss';
import ThemeContext from '~/store/ThemeContext/ThemeContext';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={cx(theme, 'wrapper')}>
            <Sidebar />
            <div className={cx('content')}>{children}</div>
        </div>
    );
}

export default DefaultLayout;
