import AccessTimeChart from '~/components/AccessTimeChart';
import QuickReport from '~/components/QuickReport';
import Footer from '~/components/Footer';
import classNames from 'classnames/bind';
import styles from './Body.module.scss';

const cx = classNames.bind(styles);

function Body() {
    return (
        <div className={cx('body')}>
            <AccessTimeChart />
            <QuickReport />
            <Footer />
        </div>
    );
}

export default Body;
