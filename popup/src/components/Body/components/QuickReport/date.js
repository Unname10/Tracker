const findSum = (obj) => {
    if (typeof obj === 'object') {
        const values = Object.values(obj);
        return values.reduce((sum, value) => {
            return sum + value;
        }, 0);
    }
    return 0;
};
const getAllDateInCurrentWeek = () => {
    let week = new Array();
    let current = new Date();

    //@ Bắt đầu bằng thứ hai
    current.setDate(current.getDate() - current.getDay() + 1);
    while (current.getDate() <= new Date().getDate()) {
        week.push(formatDateObj(current));
        current.setDate(current.getDate() + 1); //@ Tăng một ngày
    }
    return week;
};

const getAllDateInCurrentMonth = () => {
    let month = new Array();
    let current = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    for (let i = 0; i < new Date().getDate(); i++) {
        month.push(formatDateObj(current));
        current.setDate(current.getDate() + 1);
    }
    return month;
};

const formatDateObj = (dateObj) => {
    return `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${dateObj.getDate()}`;
};

const timeFormatForHuman = (date) => {
    let seconds = Math.floor(date / 1000) % 60; // 1000 mili giây bằng 1 giây
    let minutes = Math.floor(date / 60000) % 60; // 60000 mili giây bằng 1 phút
    let hours = Math.floor(date / 3600000) % 24; // 3600000 mili giây bằng 1 giờ;
    let days = Math.floor(date / 86400000); // 86400000 mili giây bằng 1 ngày;
    let result = '';
    if (seconds > 0) {
        result = `${seconds} giây`;
    }
    if (minutes > 0) {
        result = `${minutes} phút${result === '' ? '' : `, ${result}`}`;
    }
    if (hours > 0) {
        result = `${hours} giờ${result === '' ? '' : `, ${result}`}`;
    }
    if (days > 0) {
        result = `${days} ngày${result === '' ? '' : `, ${result}`}`;
    }
    if (result === '') {
        return '0 phút';
    }
    return result;
};

export {
    findSum,
    getAllDateInCurrentWeek,
    getAllDateInCurrentMonth,
    formatDateObj,
    timeFormatForHuman,
};
