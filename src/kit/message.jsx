/**
 * @file Alice Klipper's CV, message component.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import type { Node } from 'react';

import levelToColor from '../lib/level-to-color';

import { cell, cellS4, colorFgAlt } from '../config/css';

import type { Levelable } from '../types/index';

export type MessageProps = Levelable & {
    children: Node,
};

const StyledDiv = styled.div`
    margin: ${cell}px 0;
    background-color: ${levelToColor};
    padding: ${cell}px;
    border-radius: ${cellS4}px;
    box-shadow: 0 2px 9px -3px #000;

    &,
    & * {
        color: ${colorFgAlt};
    }

    &:first-of-type {
        margin-top: 0;
    }
`;

const Message = ({ children, level }: MessageProps) => <StyledDiv level={level}>{children}</StyledDiv>;

export default Message;
