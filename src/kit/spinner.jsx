/**
 * @file Alice Klipper's CV, spinner component.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import Icon from './icon';

const StyledOuterWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledInnerWrapper = styled.div`margin: auto;`;

const Spinner = () => (
    <StyledOuterWrapper>
        <StyledInnerWrapper>
            <Icon icon={'spinner-third'} spin />
        </StyledInnerWrapper>
    </StyledOuterWrapper>
);

export default Spinner;
