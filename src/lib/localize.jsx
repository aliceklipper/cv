/**
 * @file Alice Klipper's CV, localization HOC.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

import { connect } from 'react-redux';

import type { ComponentType } from 'react';

import locales from 'messages';
import { FALLBACK_LANGUAGE } from 'config';
import intl from 'lib/intl';

import type { ParametrizedTranslatorTag, TranslatorTag } from 'types';

export type LocalizeProps = {
    __: TranslatorTag & ParametrizedTranslatorTag,
    _lang: string,
};

export default <T>(component: ComponentType<T & LocalizeProps>) =>
    connect(state => ({
        __: intl(state.lang, locales, FALLBACK_LANGUAGE),
        _lang: state.lang,
    }))(component);
