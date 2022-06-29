import AccessTimeChart from './components/AccessTimeChart';
import QuickReport from './components/QuickReport';
import classNames from 'classnames/bind';
import styles from './Body.module.scss';

const cx = classNames.bind(styles);

function Body() {
    return (
        <div className={cx('body')}>
            <AccessTimeChart />
            <QuickReport />
        </div>
    );
}

export default Body;
