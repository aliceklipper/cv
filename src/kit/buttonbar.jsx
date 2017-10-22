/**
 * @file Alice Klipper's CV, button bar component.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

import React from 'react';
import styled, { css } from 'styled-components';

import type { Node } from 'react';

import levelToColor from '../lib/level-to-color';

import { cell, cellS3, cellS4, colorFgAlt } from '../config/css';

import type { Levelable } from '../types/index';

export type ButtonbarButtonProps = {
    id: string,
    text: Node,
    onClick: () => void,
    active?: boolean,
};

export type ButtonbarProps = Levelable & {
    items: Array<ButtonbarButtonProps>,
};

const StyledButton = styled.button`
    flex-grow: 1;

    ${({ active }: ButtonbarButtonProps) => {
        if (active) {
            return css`
                background-color: ${colorFgAlt};
                padding: ${cellS3 - 1}px ${cell - 1}px;
                border: 1px solid;

                &,
                & * {
                    color: ${levelToColor};
                }
            `;
        } else {
            return css`
                background-color: ${levelToColor};
                padding: ${cellS3}px ${cell}px;
                border: none;

                &,
                & * {
                    color: ${colorFgAlt};
                }
            `;
        }
    }}};

    &:first-of-type {
        border-top-left-radius: ${cellS4}px;
        border-bottom-left-radius: ${cellS4}px;
    }

    &:last-of-type {
        border-top-right-radius: ${cellS4}px;
        border-bottom-right-radius: ${cellS4}px;
    }
`;

const StyledDiv = styled.div`
    border-radius: ${cellS4}px;
    display: flex;
`;

const Buttonbar = ({ items, level }: ButtonbarProps) => (
    <StyledDiv>
        {items.map(({ onClick, text, id, active }: ButtonbarButtonProps) => (
            <StyledButton key={id} id={id} active={active} level={level} onClick={onClick}>
                {text}
            </StyledButton>
        ))}
    </StyledDiv>
);

export default Buttonbar;
