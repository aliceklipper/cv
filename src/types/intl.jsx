/**
 * @file Alice Klipper's CV, intl-related types.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

export type Locale = {
    locale: string,
    name: string,
    messages: Map<string, string>,
    fallback: Array<string>,
};

export type Locales = Map<string, Locale>;

export type IntlAwareState = {
    +lang: string,
};

export type IntlAwareStore = {
    getState(): IntlAwareState,
};

export type Message = {
    locale: string,
    message: string,
};

export type TranslatorTag = (strings: Array<string>, ...rest: Array<any>) => string;
export type ParametrizedTranslatorTag = (values: any) => TranslatorTag;
