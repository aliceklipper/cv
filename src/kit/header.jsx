/**
 * @file Alice Klipper's CV, generic header component.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

/*
 eslint
 no-magic-numbers: off,
 */

import React from 'react';
import styled from 'styled-components';

import type { Node } from 'react';

import {
    lineHeightH1,
    fontSizeH1,
    borderLeftH1,
    paddingH1,
    lineHeightH2,
    fontSizeH2,
    borderLeftH2,
    paddingH2,
    lineHeightH3,
    fontSizeH3,
    borderLeftH3,
    paddingH3,
    lineHeightH4,
    fontSizeH4,
    borderLeftH4,
    paddingH4,
    lineHeightH5,
    fontSizeH5,
    borderLeftH5,
    paddingH5,
    lineHeightH6,
    fontSizeH6,
    borderLeftH6,
    paddingH6,
} from '../config/css';

export type HeaderProps = {
    level?: number,
    children: Node,
    subtext?: Node,
};

const StyledP = styled.p`
    margin: 0;
    padding: 0;
`;

const createStyledH = (level: number) => {
    switch (level) {
        case 1:
            return {
                StyledH: styled.h1`
                    padding: 0;
                    margin: 0;
                    line-height: ${lineHeightH1}px;
                    font-size: ${fontSizeH1}px;
                    font-weight: 100;
                `,
                StyledHeader: styled.header`
                    padding: ${paddingH1};
                    border-left: ${borderLeftH1};
                `,
            };
        case 2:
            return {
                StyledH: styled.h2`
                    padding: 0;
                    margin: 0;
                    line-height: ${lineHeightH2}px;
                    font-size: ${fontSizeH2}px;
                `,
                StyledHeader: styled.header`
                    padding: ${paddingH2};
                    border-left: ${borderLeftH2};
                `,
            };
        case 3:
            return {
                StyledH: styled.h3`
                    padding: 0;
                    margin: 0;
                    line-height: ${lineHeightH3}px;
                    font-size: ${fontSizeH3}px;
                `,
                StyledHeader: styled.header`
                    padding: ${paddingH3};
                    border-left: ${borderLeftH3};
                `,
            };
        case 4:
            return {
                StyledH: styled.h4`
                    padding: 0;
                    margin: 0;
                    line-height: ${lineHeightH4}px;
                    font-size: ${fontSizeH4}px;
                `,
                StyledHeader: styled.header`
                    padding: ${paddingH4};
                    border-left: ${borderLeftH4};
                `,
            };
        case 5:
            return {
                StyledH: styled.h5`
                    padding: 0;
                    margin: 0;
                    line-height: ${lineHeightH5}px;
                    font-size: ${fontSizeH5}px;
                `,
                StyledHeader: styled.header`
                    padding: ${paddingH5};
                    border-left: ${borderLeftH5};
                `,
            };
        default:
            return {
                StyledH: styled.h6`
                    padding: 0;
                    margin: 0;
                    line-height: ${lineHeightH6}px;
                    font-size: ${fontSizeH6}px;
                `,
                StyledHeader: styled.header`
                    padding: ${paddingH6};
                    border-left: ${borderLeftH6};
                `,
            };
    }
};

const Header = ({ level, children, subtext }: HeaderProps) => {
    const { StyledH, StyledHeader } = createStyledH(typeof level === 'number' ? Math.max(1, Math.min(level, 6)) : 2);

    return (
        <StyledHeader>
            <StyledH>{children}</StyledH>
            {typeof subtext !== 'undefined' ? <StyledP>{subtext}</StyledP> : null}
        </StyledHeader>
    );
};

export default Header;
