/**
 * @file Alice Klipper's CV, button component.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import type { Node } from 'react';

import levelToColor from '../lib/level-to-color';

import { cell, cellS2, cellS3, cellS4, colorFgAlt } from '../config/css';

import type { Levelable } from '../types/index';

export type ButtonProps = Levelable & {
    children: Node,
    onClick: () => void,
};

const StyledButton = styled.button`
    background-color: ${levelToColor};
    padding: ${cellS3}px ${cell}px;
    border-radius: ${cellS4}px;
    box-shadow: 0 2px 9px -3px #000;
    border: none;
    margin: 0 ${cellS2}px;

    &,
    & * {
        color: ${colorFgAlt};
    }

    &:first-of-type {
        margin-left: 0;
    }
`;

const Button = ({ children, level, onClick }: ButtonProps) => (
    <StyledButton onClick={onClick} level={level}>
        {children}
    </StyledButton>
);

export default Button;
