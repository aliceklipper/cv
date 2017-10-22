/**
 * @file Alice Klipper's CV, buzzwords API adapter.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

import { API_BASE } from '../config';

import type { Buzzword, JoinedBuzzword, BuzzwordsCategory } from '../types';

import buzzwordsCategories from './buzzwords-categories';

export type BuzzwordsResponse =
    | {
          joined: true,
          buzzwords: Array<JoinedBuzzword>,
      }
    | {
          joined: false,
          buzzwords: Array<Buzzword>,
      }
    | null;

const joinCategory = (categories: Array<BuzzwordsCategory>) => (category: string): BuzzwordsCategory | null =>
    categories.find(({ id }) => category === id) || null;

const joinBuzzwordWithCategories = (categories: Array<BuzzwordsCategory>) => (buzzword: Buzzword): JoinedBuzzword => ({
    ...buzzword,
    categories: (buzzword.categories.map(joinCategory(categories)).filter(Boolean): Array<BuzzwordsCategory>),
});

export default async (joinCategories: boolean = false): Promise<BuzzwordsResponse> => {
    try {
        const buzzwords: Array<Buzzword> = await (await fetch(`${API_BASE}/buzzwords.json`)).json();

        if (joinCategories) {
            const buzzwordsCategoriesResponse = await buzzwordsCategories();

            if (buzzwordsCategoriesResponse === null) {
                return null;
            } else {
                return {
                    joined: true,
                    buzzwords: buzzwords.map(joinBuzzwordWithCategories(buzzwordsCategoriesResponse.buzzwordsCategories)),
                };
            }
        } else {
            return {
                joined: false,
                buzzwords,
            };
        }
    } catch (error) {
        return null;
    }
};
