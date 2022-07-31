import { General, Statistics, Exclusion, Setting } from '~/components/pages';

export const routes = [
    { path: '/', element: General },
    { path: '/statistics', element: Statistics },
    { path: '/exclusion', element: Exclusion },
    { path: '/setting', element: Setting },
];
