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

import { cellS3 } from '../config/css';

import Icon from './icon';

export type CheckboxProps = {
    children: Node,
    onChange?: () => void,
    checked?: boolean,
};

const StyledLabel = styled.label.attrs({ tabIndex: 0 })`
    display: inline-block;

    & > .fa,
    & > .fal,
    & > .far,
    & > .fas,
    & > .fab {
        margin-right: ${cellS3}px;
        vertical-align: -1px;
    }
`;

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`display: none;`;

const Checkbox = ({ children, onChange, checked }: CheckboxProps) => (
    <StyledLabel>
        <StyledCheckbox checked={checked} onChange={onChange} />
        <Icon icon={checked ? 'check-square' : 'square'} />
        {children}
    </StyledLabel>
);

export default Checkbox;
