/**
 * @file Alice Klipper's CV, page component.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import { cell, widthSplitRight } from '../../config/css';

import photo from './alice.jpeg';

const StyledDiv = styled.div`
    width: ${widthSplitRight - cell}px;
    height: ${widthSplitRight - cell}px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.25) url('${photo}') no-repeat center center;
    background-size: cover;
    text-align: center;
    line-height: ${widthSplitRight - cell}px;
    box-shadow: inset 0 2px 9px -3px #000;
`;

const Photo = () => <StyledDiv />;

export default Photo;
