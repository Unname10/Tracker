import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    Tooltip,
    CategoryScale,
    LinearScale,
    Title,
    SubTitle,
} from 'chart.js';
import classNames from 'classnames/bind';
import { formatDateObj, findSum, shortTimeFormat, longTimeFormat } from '~/module/date';
import styles from './AccessTimeChart.module.scss';

ChartJS.register(Tooltip, BarElement, CategoryScale, LinearScale, Title, SubTitle);

const borderColor = [
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)',
];
const backgroundColor = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 205, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(201, 203, 207, 0.2)',
];
const cx = classNames.bind(styles);
const storageData = {
    '2022-7-17': {
        localhost: 31950,
        'www.timecalculator.net': 72808,
        'www.w3schools.com': 88958,
    },
    '2022-7-18': {
        'codesandbox.io': 1686548,
        'github.com': 1412514,
        localhost: 24878,
        'stackoverflow.com': 28058,
        'www.chartjs.org': 241748,
        'www.google.com': 63665,
        'www.w3schools.com': 7135,
        'www.youtube.com': 1198489,
    },
    '2022-7-19': {
        'codesandbox.io': 131928,
        'github.com': 856457,
        'kilianvalkhof.com': 10281,
        localhost: 775260,
        'nivo.rocks': 1470037,
        'stackoverflow.com': 137496,
        'viblo.asia': 169654,
        'www.chartjs.org': 434123,
        'www.freecodecamp.org': 47935,
        'www.google.com': 2460967,
        'www.npmjs.com': 26854,
        'www.youtube.com': 141523,
    },
    '2022-7-20': {
        'github.com': 21763,
        'letdiv.com': 55960,
        localhost: 59962,
        'quantrimang.com': 271561,
        'rgbacolorpicker.com': 54280,
        'stackoverflow.com': 172899,
        'viblo.asia': 91425,
        'www.chartjs.org': 828544,
        'www.color-hex.com': 7649,
        'www.google.com': 155570,
        'www.youtube.com': 828604,
    },
    usageDate: 4,
    usageTime: 445970,
};
const week = (() => {
    let week = new Array();
    let current = new Date();

    //@ Bắt đầu bằng thứ hai
    current.setDate(
        current.getDate() - (current.getDay() - 1 < 0 ? 6 : current.getDay() - 1)
    );
    for (let i = 0; i < 7; i++) {
        week.push(formatDateObj(current));
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
                return findSum(storageData[value]);
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
                    console.log(value);
                    return `Thời gian sử dụng: ${shortTimeFormat(value.raw)}`;
                },
            },
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
        },
        subtitle: {
            display: true,
            text: longTimeFormat(findSum(formatDateObj(new Date()))),
            padding: {
                top: 5,
                bottom: 2,
            },
            font: {
                size: 18,
            },
        },
    },
};

function AccessTimeChart() {
    return (
        <div className={cx('wrapper')}>
            <Bar data={data} options={options} />
        </div>
    );
}

export default AccessTimeChart;
