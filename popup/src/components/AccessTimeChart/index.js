import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import classNames from 'classnames/bind';
import styles from './AccessTimeChart.module.scss';

ChartJS.register(ArcElement, Tooltip);

const cx = classNames.bind(styles);
const storageData = {
    'reactjs.org': 26440,
    'stackoverflow.com': 33743,
    'www.chartjs.org': 4012,
};

console.log('Keys: ', Object.keys(storageData));
console.log('Values: ', Object.values(storageData));

const data = {
    labels: Object.keys(storageData),
    datasets: [
        {
            data: Object.values(storageData),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#B2DF8A', '#FB9A99'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#B2DF8A', '#FB9A99'],
            borderWidth: 2,
            hoverOffset: 4,
        },
    ],
};

function AccessTimeChart() {
    return (
        <div className={cx('wrapper')}>
            <Doughnut
                data={data}
                options={{
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                }}
            />
        </div>
    );
}

export default AccessTimeChart;
