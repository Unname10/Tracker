import classNames from 'classnames/bind';
import AccessTimeChart from './components/AccessTimeChart';
import PagesVisited from './components/PagesVisited';
import styles from './Body.module.scss';
import DateProvider from '~/store/DateContext/DateProvider';

const cx = classNames.bind(styles);

function Body() {
    return (
        <DateProvider>
            <div className={cx('body')}>
                <AccessTimeChart />
                <PagesVisited />
            </div>
        </DateProvider>
    );
}

export default Body;
