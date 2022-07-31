import { Bar } from 'react-chartjs-2';
import { useContext } from 'react';
import {
    Chart as ChartJS,
    BarElement,
    Tooltip,
    CategoryScale,
    LinearScale,
    Title,
    SubTitle,
} from 'chart.js';
import { shortDateFormat, findSum, shortTimeFormat, longTimeFormat } from '~/module/date';
import classNames from 'classnames/bind';
import styles from './AccessTimeChart.module.scss';
import DataContext from '~/store/DataContext/DataContext';
import DateContext from '~/store/DateContext/DateContent';
import ThemeContext from '~/store/ThemeContext/ThemeContext';

const cx = classNames.bind(styles);
ChartJS.register(Tooltip, BarElement, CategoryScale, LinearScale, Title, SubTitle);

function AccessTimeChart() {
    const { byDate } = useContext(DataContext);
    const { date } = useContext(DateContext);
    const { theme } = useContext(ThemeContext);
    const borderColor = [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)',
    ];
    const backgroundColor =
        theme !== 'dark'
            ? [
                  'rgba(255, 99, 132, 0.5)',
                  'rgba(255, 159, 64, 0.5)',
                  'rgba(255, 205, 86, 0.5)',
                  'rgba(75, 192, 192, 0.5)',
                  'rgba(54, 162, 235, 0.5)',
                  'rgba(153, 102, 255, 0.5)',
                  'rgba(201, 203, 207, 0.5)',
              ]
            : [
                  'rgba(255, 99, 132, 0.4)',
                  'rgba(255, 159, 64, 0.4)',
                  'rgba(255, 205, 86, 0.4)',
                  'rgba(75, 192, 192, 0.4)',
                  'rgba(54, 162, 235, 0.4)',
                  'rgba(153, 102, 255, 0.4)',
                  'rgba(201, 203, 207, 0.4)',
              ];
    const week = (() => {
        let week = new Array();
        let current = new Date(date);

        //@ Bắt đầu bằng thứ hai
        current.setDate(
            current.getDate() - (current.getDay() - 1 < 0 ? 6 : current.getDay() - 1)
        );
        for (let i = 0; i < 7; i++) {
            week.push(shortDateFormat(current));
            current.setDate(current.getDate() + 1); //@ Tăng một ngày
        }
        return week;
    })();

    const labels = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN'];
    const data = {
        labels,
        datasets: [
            {
                backgroundColor,
                borderColor,
                borderWidth: 1,
                data: week.map((value) => {
                    return findSum(byDate[value]);
                }),
            },
        ],
    };
    const options = {
        scales: {
            y: {
                ticks: {
                    callback: shortTimeFormat,
                },
                position: 'right',
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (value) {
                        return `Thời gian sử dụng: ${shortTimeFormat(value.raw)}`;
                    },
                },
                backgroundColor:
                    theme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.8)',
                titleColor: theme === 'dark' ? '#000' : '#fff',
                bodyColor: theme === 'dark' ? '#000' : '#fff',
            },
            title: {
                display: true,
                text: 'Thời gian sử dụng hôm nay:',
                padding: {
                    top: 5,
                    bottom: 2,
                },
                font: {
                    size: 20,
                },
                color: theme === 'dark' ? '#f0f0f0' : '#2e2e2e',
            },
            subtitle: {
                display: true,
                text: longTimeFormat(findSum(byDate[shortDateFormat(new Date())])),
                padding: {
                    top: 5,
                    bottom: 20,
                },
                font: {
                    size: 18,
                },
                color: theme === 'dark' ? 'rgb(200, 200, 200)' : 'rgb(94, 94, 94)',
            },
        },
    };
    return (
        <div className={cx('wrapper')}>
            <Bar data={data} options={options} />
        </div>
    );
}

export default AccessTimeChart;
