/**
 * @file Alice Klipper's CV, buzzwords categories filter.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Spinner from '../kit/spinner';
import Checkbox from '../kit/checkbox';

import type { BuzzwordsCategoryWithVisibility } from '../types';

import { toggleBuzzwordsCategoryVisibility } from '../store';

import { cellS2 } from '../config/css';

import localize from '../lib/localize';

import type { LocalizeProps } from '../lib/localize';

export type BuzzwordsCategoriesProps = LocalizeProps & {
    buzzwordsCategories: Array<BuzzwordsCategoryWithVisibility> | null,
};

const StyledUl = styled.ul`
    display: block;
    margin-top: ${cellS2}px;
`;

const StyledLi = styled.li`
    display: block;
    padding: 0;
    margin: 0;
`;

const BuzzwordsCategories = ({ __, buzzwordsCategories }: BuzzwordsCategoriesProps) => {
    if (buzzwordsCategories !== null) {
        return (
            <StyledUl>
                {buzzwordsCategories.map(({ name, title, visible }, index) => (
                    <StyledLi key={name}>
                        <Checkbox checked={visible} onChange={() => toggleBuzzwordsCategoryVisibility(index)}>
                            {__`${title}`}
                        </Checkbox>
                    </StyledLi>
                ))}
            </StyledUl>
        );
    } else {
        return <Spinner />;
    }
};

export default connect(state => ({ buzzwordsCategories: state.buzzwordsCategories }))(localize(BuzzwordsCategories));
