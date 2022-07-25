import { useState } from 'react';
import DateContext from './DateContent';
import { shortDateFormat } from '~/module/date';

function DateProvider({ children }) {
    const [date, setDate] = useState(shortDateFormat(new Date()));
    const values = { date, setDate };
    return <DateContext.Provider value={values}>{children}</DateContext.Provider>;
}

export default DateProvider;
