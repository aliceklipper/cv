/**
 * @file Alice Klipper's CV, main component.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

/*
 eslint
 no-magic-numbers: off,
 */

import React from 'react';
import styled from 'styled-components';

import Header from '../kit/header';

import localize from '../lib/localize';

import type { LocalizeProps } from '../lib/localize';

import { colorBg, cell, cellS4, widthPage } from '../config/css';

import BuzzwordsCategories from './buzzwords-categories';
import BuzzwordsLevels from './buzzwords-levels';
import JobsSorting from './jobs-sorting';
import LanguageSwitcher from './language-switcher';

const StyledAside = styled.aside`
    background-color: ${colorBg};
    width: 300px;
    box-shadow: 0 2px 9px -3px #000;
    border-radius: ${cellS4}px;
    left: calc(50% + ${widthPage}px / 2 + ${cell}px);
    top: ${cell}px;
    padding: ${cell}px;
    position: fixed;

    @media print {
        display: none;
    }

    @media (max-width: ${600 + cell * 5 + widthPage}px) {
        display: none;
    }
`;

const StyledSection = styled.section`
    margin-top: ${cell}px;
    &:first-of-type {
        margin-top: 0;
    }
`;

const Aside = ({ __, _lang: lang }: LocalizeProps) => (
    <StyledAside>
        <StyledSection>
            <Header level={2}>{__`Language`}</Header>
            <LanguageSwitcher />
        </StyledSection>
        <StyledSection>
            <Header level={2}>{__`Buzzwords filter`}</Header>
        </StyledSection>
        <StyledSection>
            <Header level={3}>{__`By category`}</Header>
            <BuzzwordsCategories />
        </StyledSection>
        <StyledSection>
            <Header level={3}>{__`By level`}</Header>
            <BuzzwordsLevels />
        </StyledSection>
        <StyledSection>
            <Header level={2}>{__`Jobs sorting`}</Header>
            <JobsSorting />
        </StyledSection>
    </StyledAside>
);

export default localize(Aside);
