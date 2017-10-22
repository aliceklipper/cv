/**
 * @file Alice Klipper's CV, page component.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import { cell, cellL2, cellS4, colorBg, widthPage, heightPage } from '../config/css';

import HeaderSection from '../sections/header-section';
import BuzzwordsSection from '../sections/buzzwords-section';
import WorkExperienceSection from '../sections/jobs-section';

const StyledArticle = styled.article`
    background-color: ${colorBg};
    border-radius: ${cellS4}px;
    box-shadow: 0 2px 9px -3px #000;
    padding: ${cellL2}px;
    margin: ${cell}px auto;
    width: ${widthPage}px;
    min-height: ${heightPage}px;

    @media print {
        margin: 0;
        border-radius: 0;
        box-shadow: none;
        min-height: unset;
    }

    @media (max-width: ${widthPage + cell * cell}px) {
        width: 100%;
        margin: 0;
        border-radius: 0;
        box-shadow: none;
        min-height: unset;
        padding: ${cell}px;
    }
`;

const Page = () => (
    <StyledArticle>
        <HeaderSection />
        <BuzzwordsSection />
        <WorkExperienceSection />
    </StyledArticle>
);

export default Page;
