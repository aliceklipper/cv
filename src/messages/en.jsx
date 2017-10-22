/**
 * @file Alice Klipper's CV, Russian locale.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

export default {
    locale: 'en',
    name: 'English',
    messages: (new Map([
        ['__separator_comma', ', '],
        ['__ApproximateDate_now', 'now'],
        ['__ApproximateRange_separator', ' – '],
        ['from $#/month', 'from {salary, plural, other{$#/month}}'],
    ]): Map<string, string>),
    fallback: [],
};
