/**
 * @file Alice Klipper's CV, buzzwords categories API adapter.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

import { API_BASE } from '../config';

import type { BuzzwordsCategory } from '../types';

export type BuzzwordsCategoriesResponse = {
    buzzwordsCategories: Array<BuzzwordsCategory>,
} | null;

let buzzwordsCategoriesCache: BuzzwordsCategoriesResponse = null; // eslint-disable-line fp/no-let

export default async (): Promise<BuzzwordsCategoriesResponse> => {
    if (buzzwordsCategoriesCache === null) {
        try {
            const buzzwordsCategories: Array<BuzzwordsCategory> = await (await fetch(`${API_BASE}/buzzwords-categories.json`)).json();

            buzzwordsCategoriesCache = { buzzwordsCategories }; // eslint-disable-line fp/no-mutation
        } catch (error) {
            //
        }
    }

    return buzzwordsCategoriesCache;
};
