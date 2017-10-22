/**
 * @file Alice Klipper's CV, main component.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import { colorBgAlt } from '../config/css';

import Page from './page';
import Aside from './aside';

const StyledDiv = styled.div`
    width: 100%;
    min-height: 100%;

    background-color: ${colorBgAlt};
    display: flex;
    position: absolute;
`;

const App = () => (
    <StyledDiv>
        <Page />
        <Aside />
    </StyledDiv>
);

export default App;
