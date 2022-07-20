import classNames from 'classnames/bind';
import { createContext } from 'react';
import AccessTimeChart from './components/AccessTimeChart';
import QuickReport from './components/QuickReport';
import styles from './Body.module.scss';

const cx = classNames.bind(styles);

function Body() {
    return (
        <div className={cx('body')}>
            <AccessTimeChart />
        </div>
    );
}

export default Body;
