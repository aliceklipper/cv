/**
 * @file Alice Klipper's CV, language switcher.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import { cell } from '../config/css';

import { setLanguage } from '../store';

import Buttonbar from '../kit/buttonbar';

import localize from '../lib/localize';

import type { LocalizeProps } from '../lib/localize';

const StyledDiv = styled.div`margin-top: ${cell}px;`;

const createLangSwitcherItem = (id, text, lang) => ({
    id,
    text,
    onClick: () => setLanguage(id),
    active: id === lang,
});

const LanguageSwitcher = ({ __, _lang: lang }: LocalizeProps) => {
    return (
        <StyledDiv>
            <Buttonbar
                level={'secondary'}
                items={[
                    createLangSwitcherItem('en', 'English', lang),
                    createLangSwitcherItem('ru', 'Русский', lang),
                    createLangSwitcherItem('ja', '日本語', lang),
                ]}
            />
        </StyledDiv>
    );
};

export default localize(LanguageSwitcher);
