/**
 * @file Alice Klipper's CV, locales.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

import type { Locales } from 'types/intl';

import en from './en';
import ru from './ru';
import ja from './ja';

const messages: Locales = new Map([['en', en], ['ru', ru], ['ja', ja]]);

export default messages;
