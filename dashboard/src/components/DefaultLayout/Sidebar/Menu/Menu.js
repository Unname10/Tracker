import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ children }) {
    return <nav className={cx('wrapper')}>{children}</nav>;
}

export default Menu;
