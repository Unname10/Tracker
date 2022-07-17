import {
    formatDateObj,
    getAllDateInCurrentWeek,
    getAllDateInCurrentMonth,
    findSum,
    timeFormatForHuman,
} from './date';

//@ Lấy dữ liệu của ngày hiện tại
const data = {
    '2022-7-1': {
        'codepen.io': 53849,
        'developer.mozilla.org': 3549,
        'fullstack.edu.vn': 101347,
        'github.com': 16678,
        localhost: 624892,
        'tinloof.com': 106244,
        'www.google.com': 15145,
        'www.w3schools.com': 12061,
        'www.youtube.com': 13375,
    },
    '2022-7-2': {
        'blogchiasekienthuc.com': 24103,
        'codepen.io': 3515,
        'drive.google.com': 5440,
        'quantrimang.com': 3854,
        'www.youtube.com': 25235,
    },
    '2022-7-3': {
        'codepen.io': 648,
        'cssgradient.io': 128169,
        'fonts.google.com': 63672,
        'fullstack.edu.vn': 59051,
        localhost: 278547,
        'translate.google.com': 13910,
        'www.google.com': 2755,
        'www.w3schools.com': 83858,
        'www.youtube.com': 64177,
    },
    '2022-7-5': {
        'bobbyhadz.com': 11392,
        'codepen.io': 1673,
        'cssgradient.io': 5778,
        'developer.mozilla.org': 37269,
        'ed.ted.com': 1527,
        'fonts.google.com': 9942,
        localhost: 99937,
        'quantrimang.com': 18168,
        'stackoverflow.com': 1173,
        'tinloof.com': 1725,
        'translate.google.com': 38033,
        'www.geeksforgeeks.org': 30880,
        'www.w3schools.com': 1663,
        'www.youtube.com': 42099,
    },
    '2022-7-6': {
        'developer.mozilla.org': 82506,
        localhost: 115862,
        'stackoverflow.com': 35635,
        'www.geeksforgeeks.org': 1938,
        'www.youtube.com': 22694,
    },
};
const date = formatDateObj(new Date());
const dateInWeek = getAllDateInCurrentWeek();
const dateInMonth = getAllDateInCurrentMonth();

const timeUsedToday = timeFormatForHuman(findSum(data[date]));
const timeUsedInWeek = timeFormatForHuman(
    dateInWeek.reduce((sum, date) => {
        return sum + findSum(data[date]);
    }, 0)
);
const timeUsedInMonth = timeFormatForHuman(
    dateInMonth.reduce((sum, date) => {
        return sum + findSum(data[date]);
    }, 0)
);
const averageUsageTimePerDay = timeFormatForHuman(
    Math.floor(timeUsedInMonth / dateInMonth.length)
);

const reportContent = [
    timeUsedToday,
    timeUsedInWeek,
    timeUsedInMonth,
    averageUsageTimePerDay,
];

const reportTitle = [
    'Thời gian sử dụng hôm nay:',
    'Thời gian sử dụng tuần này:',
    'Thời gian sử dụng tháng này:',
    'Sử dụng trung bình hàng ngày:',
];

export { reportContent, reportTitle };
