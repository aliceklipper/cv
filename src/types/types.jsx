/**
 * @file Alice Klipper's CV, commonly used types.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

export * from './intl';

export type Level = 'error' | 'warning' | 'success' | 'info' | 'primary' | 'secondary';

export type Levelable = {
    level: Level,
};

export type BuzzwordsCategory = {
    id: string,
    name: string,
    title: string,
};

export type BuzzwordsCategoryWithVisibility = BuzzwordsCategory & {
    visible: boolean,
};

export type Buzzword = Levelable & {
    title: string,
    categories: Array<string>,
    rainbow?: true,
};

export type JoinedBuzzword = Levelable & {
    title: string,
    categories: Array<BuzzwordsCategory>,
    rainbow?: true,
};

export type BuzzwordsLevelsVisibilities = {
    [key: Level]: boolean,
};

export type ApproximateDate = string | 'now';

export type ApproximateRange = {
    start: ApproximateDate,
    end: ApproximateDate,
};

export type Project = {
    name: string,
    title: string,
    description: string,
    comment?: string,
    link?: string,
};

export type Job = ApproximateRange & {
    name: string,
    company: string,
    city: string,
    position: string,
    projects: Array<Project>,
};
