/**
 * @file Alice Klipper's CV, buzzwords list.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

/*
 eslint
 no-magic-numbers: off,
 no-plusplus: off,
 fp/no-let: off,
 fp/no-mutation: off,
 fp/no-mutating-methods: off,
 */

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Spinner from '../../kit/spinner';

import levelToColor from '../../lib/level-to-color';

import { cell, cellS3, cellS5, colorFgAlt } from '../../config/css';

import type { Buzzword, BuzzwordsCategoryWithVisibility, BuzzwordsLevelsVisibilities } from '../../types';

export type BuzzwordsProps = {
    buzzwords: Array<Buzzword> | null,
    buzzwordsCategories: Array<BuzzwordsCategoryWithVisibility> | null,
    buzzwordsLevelsVisibilities: BuzzwordsLevelsVisibilities,
};

const flag = `
    #ff0000 000.00%,
    #ff0000 016.67%,
    #ff8000 016.67%,
    #ff8000 033.33%,
    #ffff00 033.33%,
    #ffff00 050.00%,
    #1fb557 050.00%,
    #1fb557 066.67%,
    #4040ff 066.67%,
    #4040ff 083.33%,
    #ff00ff 083.33%,
    #ff00ff 100.00%
`;

const outline = (size, r, g, b) => {
    const shadows = [];

    for (let x = -size; x <= size; x++) {
        for (let y = -size; y <= size; y++) {
            const d = (x ** 2 + y ** 2) ** (1 / 2);

            if (d <= size) {
                shadows.push(`${x}px ${y}px 0 rgba(${r}, ${g}, ${b}, 1)`);
            } else if (d <= size + 1) {
                shadows.push(`${x}px ${y}px 0 rgba(${r}, ${g}, ${b}, ${(1 - (d - size)) ** (1 / 2)})`);
            }
        }
    }

    return shadows.join(',');
};

const StyledUl = styled.ul`
    margin-top: ${cell - cellS3}px;
    display: flex;
    flex-wrap: wrap;
`;

const StyledLi = styled.li`
    border-radius: ${cellS5}px;
    display: block;
    background-color: ${levelToColor};
    background-image: ${({ rainbow }) => (rainbow ? `linear-gradient(90deg, ${flag})` : 'none')};
    color: ${({ rainbow }) => (rainbow ? '#00f' : colorFgAlt)};
    padding: 0 ${cellS3}px;
    margin: ${cellS3}px ${cellS3}px 0 0;
    text-shadow: ${({ rainbow }) => (rainbow ? outline(2, 255, 255, 255) : 'none')};
`;

const filterBuzzwords = (visibleCategories: Array<BuzzwordsCategoryWithVisibility>, buzzwordsLevelsVisibilities) => ({ categories, level }: Buzzword) => {
    if (!buzzwordsLevelsVisibilities[level]) {
        return false;
    }

    for (const { id } of visibleCategories) {
        if (categories.find(category => category === id)) {
            return true;
        }
    }

    return false;
};

const mapBuzzwordToLi = ({ title, level, rainbow }: Buzzword) => (
    <StyledLi key={title} level={level} rainbow={rainbow}>
        {title}
    </StyledLi>
);

const filterVisibleCategories = buzzwordsCategory => buzzwordsCategory.visible;

const Buzzwords = ({ buzzwords, buzzwordsCategories, buzzwordsLevelsVisibilities }: BuzzwordsProps) => {
    if (buzzwords !== null && buzzwordsCategories !== null) {
        const visibleCategories = buzzwordsCategories.filter(filterVisibleCategories);
        const visibleBuzzwords = buzzwords.filter(filterBuzzwords(visibleCategories, buzzwordsLevelsVisibilities));

        return <StyledUl>{visibleBuzzwords.map(mapBuzzwordToLi)}</StyledUl>;
    } else if (buzzwords !== null) {
        return <StyledUl>{buzzwords.map(mapBuzzwordToLi)}</StyledUl>;
    } else {
        return <Spinner />;
    }
};

export default connect(state => ({
    buzzwords: state.buzzwords,
    buzzwordsCategories: state.buzzwordsCategories,
    buzzwordsLevelsVisibilities: state.buzzwordsLevelsVisibilities,
}))(Buzzwords);
