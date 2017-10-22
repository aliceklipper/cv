/**
 * @file Alice Klipper's CV, split view component.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import type { Node } from 'react';

import { cell, widthSplitRight, widthPage } from '../config/css';

export type SplitProps = {
    children: Node,
    right: Node,
};

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin: ${cell}px 0;

    &:first-of-type {
        margin-top: 0;
    }

    @media (max-width: ${widthPage + cell * cell}px) {
        flex-direction: column-reverse;
    }
`;

const StyledLeft = styled.div`flex-grow: 1;`;

const StyledRight = styled.div`
    width: ${widthSplitRight}px;
    border-left: 1px solid;
    padding-left: ${cell - 1}px;

    @media (max-width: ${widthPage + cell * cell}px) {
        border: none;
        padding: 0 0 ${cell}px;
        margin: 0 auto;
    }
`;

const Split = ({ children, right }: SplitProps) => (
    <StyledDiv>
        <StyledLeft>{children}</StyledLeft>
        <StyledRight>{right}</StyledRight>
    </StyledDiv>
);

export default Split;
