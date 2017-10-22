/**
 * @file Alice Klipper's CV, reducers main file.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

import { createAction, createReducer, assignAll } from 'redux-act';
import { createStore } from 'redux';
import { lensProp, lensIndex, over } from 'ramda';

import { DEFAULT_LANGUAGE } from 'config';

export const setLanguage = createAction('set language');
export const addBuzzwordsList = createAction('add buzzwords list');
export const addBuzzwordsCategoriesList = createAction('add buzzwords categories list');
export const toggleBuzzwordsCategoryVisibility = createAction('toggle buzzwords category visibility');
export const toggleBuzzwordsLevelVisibility = createAction('toggle buzzwords level visibility');
export const addJobsList = createAction('add jobs list');
export const setJobsSorting = createAction('set jobs sorting');

const lensLang = lensProp('lang');
const lensBuzzwords = lensProp('buzzwords');
const lensBuzzwordsCategories = lensProp('buzzwordsCategories');
const lensVisible = lensProp('visible');
const lensBuzzwordsLevelsVisibilities = lensProp('buzzwordsLevelsVisibilities');
const lensJobs = lensProp('jobs');
const lensJobsSorting = lensProp('jobsSorting');

const reducer = createReducer(
    {
        [setLanguage]: (state, payload) => over(lensLang, () => payload, state),
        [addBuzzwordsList]: (state, payload) => over(lensBuzzwords, () => payload, state),
        [addBuzzwordsCategoriesList]: (state, payload) =>
            over(lensBuzzwordsCategories, () => payload.map(category => over(lensVisible, () => true, category)), state),
        [toggleBuzzwordsCategoryVisibility]: (state, payload) =>
            over(
                lensBuzzwordsCategories,
                buzzwordsCategories => over(lensIndex(payload), category => over(lensVisible, visible => !visible, category), buzzwordsCategories),
                state,
            ),
        [toggleBuzzwordsLevelVisibility]: (state, payload) =>
            over(
                lensBuzzwordsLevelsVisibilities,
                buzzwordsLevelsVisibilities => over(lensProp(payload), visible => !visible, buzzwordsLevelsVisibilities),
                state,
            ),
        [addJobsList]: (state, payload) => over(lensJobs, () => payload, state),
        [setJobsSorting]: (state, payload) => over(lensJobsSorting, () => payload, state),
    },
    {
        lang: DEFAULT_LANGUAGE,
        buzzwords: null,
        buzzwordsCategories: null,
        buzzwordsLevelsVisibilities: {
            success: true,
            info: true,
            warning: true,
            error: true,
            primary: true,
            secondary: true,
        },
        jobs: null,
        jobsSorting: 'ascending',
    },
);

const store =
    process.env.NODE_ENV === 'development'
        ? createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
        : createStore(reducer);

assignAll(
    [setLanguage, addBuzzwordsList, addBuzzwordsCategoriesList, toggleBuzzwordsCategoryVisibility, toggleBuzzwordsLevelVisibility, addJobsList, setJobsSorting],
    store,
);

export default store;
