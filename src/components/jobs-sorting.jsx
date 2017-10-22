/**
 * @file Alice Klipper's CV, jobs sorting control.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { cell } from '../config/css';

import { setJobsSorting } from '../store';

import Buttonbar from '../kit/buttonbar';

import localize from '../lib/localize';

import type { LocalizeProps } from '../lib/localize';

export type JobsSortingProps = LocalizeProps & {
    jobsSorting: 'ascending' | 'descending',
};

const createSortingItem = (current, sorting, text) => ({
    id: sorting,
    text,
    onClick: () => setJobsSorting(sorting),
    active: current === sorting,
});

const StyledDiv = styled.div`margin-top: ${cell}px;`;

const JobsSorting = ({ __, _lang: lang, jobsSorting }: JobsSortingProps) => {
    return (
        <StyledDiv>
            <Buttonbar
                level={'secondary'}
                items={[createSortingItem(jobsSorting, 'ascending', __`Ascending`), createSortingItem(jobsSorting, 'descending', __`Descending`)]}
            />
        </StyledDiv>
    );
};

export default connect(state => ({ jobsSorting: state.jobsSorting }))(localize(JobsSorting));
