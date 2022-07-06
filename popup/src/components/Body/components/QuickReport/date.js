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
        week.push(formatDate(current));
        current.setDate(current.getDate() + 1); //@ Tăng một ngày
    }
    return week;
};

const getAllDateInCurrentMonth = () => {
    let month = new Array();
    let current = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    for (let i = 0; i < new Date().getDate(); i++) {
        month.push(formatDate(current));
        current.setDate(current.getDate() + 1);
    }
    return month;
};

const formatDate = (dateObj) => {
    return `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${dateObj.getDate()}`;
};

export { findSum, getAllDateInCurrentWeek, getAllDateInCurrentMonth, formatDate };
