import {
    formatDateObj,
    getAllDateInCurrentWeek,
    getAllDateInCurrentMonth,
    findSum,
    longTimeFormat,
} from '~/module/date';

//@ Lấy dữ liệu của ngày hiện tại
const data = {
    '2022-7-16': {
        'accounts.google.com': 1570,
        'accounts.pixiv.net': 1208,
        'getcssscan.com': 40274,
        'github.com': 89632,
        localhost: 63571,
        'login.live.com': 15054,
        'nodejs.vn': 12437,
        'office.live.com': 7030,
        'onedrive.live.com': 177539,
        'vi.wikipedia.org': 2006,
        'viblo.asia': 53116,
        'www.dropbox.com': 21958,
        'www.geeksforgeeks.org': 26459,
        'www.google.com': 11562,
        'www.microsoft.com': 19767,
        'www.pixiv.net': 95487,
        'www.timecalculator.net': 82272,
        'www.w3schools.com': 35491,
        'www.youtube.com': 1265236,
    },
    '2022-7-17': {
        'getcssscan.com': 50874,
        localhost: 208734,
        'www.timecalculator.net': 27842,
        'www.youtube.com': 335276,
    },
    usageTime: 2644000,
    usageDate: 2,
};
const date = formatDateObj(new Date());
const dateInWeek = getAllDateInCurrentWeek();
const dateInMonth = getAllDateInCurrentMonth();

const timeUsedToday = longTimeFormat(findSum(data[date]));
const timeUsedInWeek = longTimeFormat(
    dateInWeek.reduce((sum, date) => {
        return sum + findSum(data[date]);
    }, 0)
);
const timeUsedInMonth = longTimeFormat(
    dateInMonth.reduce((sum, date) => {
        return sum + findSum(data[date]);
    }, 0)
);
const averageUsageTimePerDay = longTimeFormat(
    Math.floor(data.usageTime / data.usageDate)
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
