/**
 * @file Alice Klipper's CV, buzzwords section.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import { cell } from '../../config/css';

import { addBuzzwordsList, addBuzzwordsCategoriesList } from '../../store';

import buzzwords from '../../api/buzzwords';
import buzzwordsCategories from '../../api/buzzwords-categories';

import Title from './title';
import Buzzwords from './buzzwords';

const StyledSection = styled.section`margin-bottom: ${cell}px;`;

const BuzzwordsSection = () => (
    <StyledSection>
        <Title />
        <Buzzwords buzzwords={null} />
    </StyledSection>
);

export default BuzzwordsSection;

(async () => {
    const buzzwordsResponse = await buzzwords();

    if (buzzwordsResponse !== null) {
        addBuzzwordsList(buzzwordsResponse.buzzwords);
    }
})();

(async () => {
    const buzzwordsCategoriesResponse = await buzzwordsCategories();

    if (buzzwordsCategoriesResponse !== null) {
        addBuzzwordsCategoriesList(buzzwordsCategoriesResponse.buzzwordsCategories);
    }
})();
