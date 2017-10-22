/**
 * @file Alice Klipper's CV, icon component.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

export type Variant = 'light' | 'regular' | 'solid' | 'brand' | void;

export type Scale = -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type Pull = 'left' | 'right';

export type Rotate = 0 | 90 | 180 | 270;

export type IconProps = {
    variant?: Variant,
    icon: string,
    spin?: boolean,
    scale?: Scale,
    fixed?: boolean,
    li?: boolean,
    border?: boolean,
    pull?: Pull,
    flipHorizontal?: boolean,
    flipVertical?: boolean,
    rotate?: Rotate,
};

const variantToClassName = (variant: Variant) => {
    switch (variant) {
        case 'regular':
            return 'fa';
        case 'solid':
            return 'fas';
        case 'brand':
            return 'fab';
        default:
            return 'fal';
    }
};

const scaleToClassName = (scale: Scale) => {
    switch (scale) {
        case -2: // eslint-disable-line no-magic-numbers
            return 'fa-xs';
        case -1: // eslint-disable-line no-magic-numbers
            return 'fa-sm';
        case 0:
            return null;
        case 1:
            return 'fa-lg';
        default:
            return `fa-${scale}x`;
    }
};

const createClassName = ({ variant, icon, spin, scale, fixed, li, border, pull, flipHorizontal, flipVertical, rotate }) => {
    return [
        variantToClassName(variant),
        `fa-${icon}`,
        spin ? 'fa-spin' : null,
        typeof scale === 'number' ? scaleToClassName(scale) : null,
        fixed ? 'fa-fw' : null,
        li ? 'fa-li' : null,
        border ? 'fa-border' : null,
        typeof pull === 'string' ? `fa-pull-${pull}` : null,
        flipHorizontal ? 'fa-flip-horizontal' : null,
        flipVertical ? 'fa-flip-vertical' : null,
        typeof rotate === 'number' && rotate !== 0 ? `fa-rotate-${rotate}` : null,
    ]
        .filter(Boolean)
        .join(' ');
};

const StyledSpan = styled.span`font-size: 14px;`;

const Icon = (props: IconProps) => <StyledSpan className={createClassName(props)} />;

export default Icon;
