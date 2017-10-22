/**
 * @file Alice Klipper's CV, Internationalization library.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

import t from 'flow-runtime';
import { join } from 'taghelper';
import IntlMessageFormat from 'intl-messageformat';
import { memoize, uniq } from 'ramda';

import type { Locale, Locales, Message, TranslatorTag, ParametrizedTranslatorTag } from 'types/intl';

const fallbackLocale: Locale = {
    locale: 'en-US',
    name: 'English',
    messages: new Map(),
    fallback: [],
};

/**
 * Resolves locale.
 *
 * TODO: Parse name and process according to keikaku.
 *
 * @param {Locales} locales
 * @param {string} lang
 * @return {Locale}
 */
export const resolveLocale = (locales: Locales, lang: string): Locale => {
    if (locales.has(lang)) {
        return (locales.get(lang): any);
    }

    const [fallback] = /^[a-z]+/.exec(lang);

    if (locales.has(fallback)) {
        return (locales.get(fallback): any);
    }

    return fallbackLocale;
};

/**
 * Flattens locales' fallbacks excluding already visited locales.
 * @param {Locales} locales
 * @param {Array<string>} visited
 * @param {Array<string>} visit
 * @param {Array<string>} next
 * @param {Array<string>} result
 * @return {Array<string>}
 */
export const flattenFallbacks = (locales: Locales, visited: Array<string>, visit: Array<string>, next: Array<string>, result: Array<string>) => {
    if (visit.length === 0 && next.length === 0) {
        return result;
    }

    if (next.length === 0) {
        return flattenFallbacks(locales, visited, visit.slice(1), resolveLocale(locales, visit[0]).fallback, result);
    }

    if (visited.find(x => x === next[0])) {
        return flattenFallbacks(locales, visited, visit, next.slice(1), result);
    }

    return flattenFallbacks(locales, [...visited, next[0]], visit, next.slice(1), [...result, next[0]]);
};

/**
 * Creates fallback locales list for specified language.
 * @param {Locales} locales
 * @param {Array<string>} visited
 * @param {Array<string>} visit
 * @return {Array<string>}
 */
export const walkLanguages = memoize((locales: Locales, visited: Array<string>, visit: Array<string>) => {
    const next = flattenFallbacks(locales, visited, visit, [], []);

    return next.length === 0 ? visited : walkLanguages(locales, [...visited, ...next], next);
});

/**
 * Resolves message using fallback locales list.
 * @param {Locales} locales
 * @param {string} lang
 * @param {string} fallback
 * @param {string} input
 * @return {Message|null}
 */
export const resolveMessage = memoize((locales: Locales, lang: string, fallback: string, input: string): Message | null => {
    const languages = uniq([...walkLanguages(locales, [lang], [lang]), fallback]);

    for (const current of languages) {
        const locale = resolveLocale(locales, current);

        if (locale.messages.has(input)) {
            return {
                locale: current,
                message: (locale.messages.get(input): any),
            };
        }
    }

    return null;
});

export const translator = memoize((lang: string, locales: Locales, fallback: string, strings: Array<string>, rest: Array<any>, values: any) => {
    const input = join(strings, rest);
    const message = resolveMessage(locales, lang, fallback, input);

    if (message === null) {
        return input;
    } else {
        const formatter = new IntlMessageFormat(message.message, message.locale);

        try {
            return formatter.format(values);
        } catch (error) {
            /* TODO: Log error. */
            return input;
        }
    }
});

/**
 * Creates translator template tag.
 * @param {string} lang
 * @param {Locales} locales
 * @param {string} fallback
 * @return {TranslatorTag&ParametrizedTranslatorTag}
 */
export default memoize(
    (lang: string, locales: Locales, fallback: string) =>
        (memoize(
            t.pattern(
                (strings: Array<string>, ...rest: Array<any>) => translator(lang, locales, fallback, strings, rest, null),
                (values: any) => (strings: Array<string>, ...rest: Array<any>) => translator(lang, locales, fallback, strings, rest, values),
            ),
        ): TranslatorTag & ParametrizedTranslatorTag),
);
