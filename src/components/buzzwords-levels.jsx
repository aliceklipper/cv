/**
 * @file Alice Klipper's CV, buzzwords levels filter.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Checkbox from '../kit/checkbox';

import { toggleBuzzwordsLevelVisibility } from '../store';

import { cellS2 } from '../config/css';

import localize from '../lib/localize';

import type { LocalizeProps } from '../lib/localize';

import type { BuzzwordsLevelsVisibilities } from '../types';

export type BuzzwordsLevelsProps = LocalizeProps & {
    buzzwordsLevelsVisibilities: BuzzwordsLevelsVisibilities,
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

const BuzzwordsLevels = ({ __, buzzwordsLevelsVisibilities }: BuzzwordsLevelsProps) => {
    return (
        <StyledUl>
            <StyledLi>
                <Checkbox checked={buzzwordsLevelsVisibilities.success} onChange={() => toggleBuzzwordsLevelVisibility('success')}>
                    {__`Almost perfect`}
                </Checkbox>
            </StyledLi>
            <StyledLi>
                <Checkbox checked={buzzwordsLevelsVisibilities.info} onChange={() => toggleBuzzwordsLevelVisibility('info')}>
                    {__`OK`}
                </Checkbox>
            </StyledLi>
            <StyledLi>
                <Checkbox checked={buzzwordsLevelsVisibilities.warning} onChange={() => toggleBuzzwordsLevelVisibility('warning')}>
                    {__`Imperfect`}
                </Checkbox>
            </StyledLi>
            <StyledLi>
                <Checkbox checked={buzzwordsLevelsVisibilities.error} onChange={() => toggleBuzzwordsLevelVisibility('error')}>
                    {__`Bad`}
                </Checkbox>
            </StyledLi>
        </StyledUl>
    );
};

export default connect(state => ({ buzzwordsLevelsVisibilities: state.buzzwordsLevelsVisibilities }))(localize(BuzzwordsLevels));
