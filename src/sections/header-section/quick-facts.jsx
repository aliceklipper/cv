/**
 * @file Alice Klipper's CV, quick facts about me.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import localize from '../../lib/localize';
import type { LocalizeProps } from '../../lib/localize';

import { cell, cellS2 } from '../../config/css';

export type QuickFactsProps = LocalizeProps;

const SALARY = 1600;

const StyledFlex = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 150mm) {
        flex-direction: column;
    }
`;

const StyledDiv = styled.div`
    margin: ${cell}px 0 0 ${cell}px;
    display: table;

    &:first-of-type {
        margin-left: 0;
    }

    @media (max-width: 150mm) {
        margin-left: 0;
    }
`;

const StyledDl = styled.dl`display: table-row;`;

const StyledDt = styled.dt`
    display: table-cell;
    padding-right: ${cellS2}px;
    font-weight: 700;
`;

const StyledDd = styled.dd`display: table-cell;`;

const QuickFacts = ({ __ }: QuickFactsProps) => (
    <StyledFlex>
        <StyledDiv>
            <StyledDl>
                <StyledDt>{__`Name: `}</StyledDt>
                <StyledDd>{__`Yuri Zemskov`}</StyledDd>
            </StyledDl>
            <StyledDl>
                <StyledDt>{__`Age: `}</StyledDt>
                <StyledDd>{__`24`}</StyledDd>
            </StyledDl>
            <StyledDl>
                <StyledDt>{__`Location: `}</StyledDt>
                <StyledDd>{__`Moscow`}</StyledDd>
            </StyledDl>
            <StyledDl>
                <StyledDt>{__`Phone: `}</StyledDt>
                <StyledDd>{'+7 915 563\u201104\u201132'}</StyledDd>
            </StyledDl>
            <StyledDl>
                <StyledDt>{__`Mail: `}</StyledDt>
                <StyledDd>
                    <a key={0} href={'mailto:aliceklipper@yandex.com'}>
                        aliceklipper@yandex.com
                    </a>
                </StyledDd>
            </StyledDl>
            <StyledDl>
                <StyledDt>{__`Telegram: `}</StyledDt>
                <StyledDd>
                    <a key={0} href={'https://t.me/aliceklipper'}>
                        @aliceklipper
                    </a>
                </StyledDd>
            </StyledDl>
        </StyledDiv>
        <StyledDiv>
            <StyledDl>
                <StyledDt>{__`Level: `}</StyledDt>
                <StyledDd>{__`magical girl`}</StyledDd>
            </StyledDl>
            <StyledDl>
                <StyledDt>{__`Position: `}</StyledDt>
                <StyledDd>{__`React developer`}</StyledDd>
            </StyledDl>
            <StyledDl>
                <StyledDt>{__`Salary: `}</StyledDt>
                <StyledDd>{__({ salary: SALARY })`from $#/month`}</StyledDd>
            </StyledDl>
            <StyledDl>
                <StyledDt>{__`Employment: `}</StyledDt>
                <StyledDd>{__`full time`}</StyledDd>
            </StyledDl>
            <StyledDl>
                <StyledDt>{__`Work location: `}</StyledDt>
                <StyledDd>{__`office, remote`}</StyledDd>
            </StyledDl>
            <StyledDl>
                <StyledDt>{__`GitHub: `}</StyledDt>
                <StyledDd>
                    <a href={'https://github.com/aliceklipper'}>@aliceklipper</a>
                    {', '}
                    <a href={'https://github.com/klippersubs'}>@klippersubs</a>
                </StyledDd>
            </StyledDl>
        </StyledDiv>
    </StyledFlex>
);

export default localize(QuickFacts);
