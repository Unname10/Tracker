import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './QuickReport.module.scss';

const cx = classNames.bind(styles);
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#00d1c7'];

function QuickReport() {
    return (
        <div className={cx('quickreport')}>
            <div className={cx('prevSlide')}>
                <FontAwesomeIcon className={cx('icons')} icon={faChevronLeft} />
            </div>
            <div className={cx('slideshow')}>
                <div className={cx('slideshowSlider')}>
                    {colors.map((backgroundColor, index) => (
                        <div
                            className={cx('slide')}
                            key={index}
                            style={{ backgroundColor }}
                        />
                    ))}
                </div>
            </div>
            <div className={cx('nextSlide')}>
                <FontAwesomeIcon className={cx('icons')} icon={faChevronRight} />
            </div>
            <div className="slideshowDots">
                {colors.map((_, idx) => (
                    <div key={idx} className="slideshowDot"></div>
                ))}
            </div>
        </div>
    );
}

export default QuickReport;
