import canSpam from './all_blogs/canSpam.json';
import problemsWithPlastic from './all_blogs/problemsWithPlastic.json';
import reflection2024 from './all_blogs/reflection2024.json';
import timeBasedMaintanence from './all_blogs/timeBasedMaintanence.json';
import reflection2023 from './all_blogs/reflection2023.json';
import reflection2022 from './all_blogs/reflection2022.json';

export const AllBlogs = [
    {path: 'canSpam', data: canSpam},
    {path: 'problemsWithPlastic', data: problemsWithPlastic},
    {path: 'reflection2024', data: reflection2024},
    {path: 'timeBasedMaintanence', data: timeBasedMaintanence},
    {path: 'reflection2023', data: reflection2023},
    {path: 'reflection2022', data: reflection2022},
];
export const ArticlesExcludedFromComments = [
    reflection2024.title,
    reflection2023.title,
    reflection2022.title,
];