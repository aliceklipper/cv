/**
 * @file Alice Klipper's CV, jobs list.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

/*
 eslint
 no-magic-numbers: off,
 no-plusplus: off,
 fp/no-let: off,
 fp/no-mutation: off,
 fp/no-mutating-methods: off,
 */

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Spinner from '../../kit/spinner';
import Header from '../../kit/header';

import { cell, cellS2 } from '../../config/css';

import localize from '../../lib/localize';

import type { LocalizeProps } from '../../lib/localize';

import type { Job, ApproximateDate, ApproximateRange } from '../../types';

export type JobsProps = LocalizeProps & {
    jobs: Array<Job> | null,
    jobsSorting: 'ascending' | 'descending',
};

const StyledCardsOl = styled.ol`
    display: block;
    margin-top: ${cell}px;
`;

const StyledCardLi = styled.li`
    display: block;
    margin-top: ${cell}px;
`;

const StyledProjectsUl = styled.ul`
    display: block;
    margin-top: ${cellS2}px;
`;

const StyledProjectLi = styled.li`
    display: block;
    margin: ${cellS2}px 0 0 ${cell}px;

    &::before {
        display: inline-block;
        content: '•';
        width: ${cell}px;
        height: ${cell}px;
        text-align: center;
        margin-left: -${cell}px;
    }
`;

const StyledSpan = styled.span`color: #666;`;

const formatDate = (__, lang: string, date: ApproximateDate): string => {
    if (date === 'now') {
        return __`__ApproximateDate_now`;
    } else {
        return new Intl.DateTimeFormat(lang, { year: 'numeric', month: 'long' }).format(new Date(date));
    }
};

const approximateRangeToString = (__, lang: string, { start, end }: ApproximateRange) => {
    if (start === end) {
        return formatDate(__, lang, start);
    } else {
        return `${formatDate(__, lang, start)}${__`__ApproximateRange_separator`}${formatDate(__, lang, end)}`;
    }
};

const jobToLi = (__, lang: string, { name: jobName, company, position, city, start, end, projects }: Job) => (
    <StyledCardLi key={jobName}>
        <Header level={3} subtext={[__`${company}`, __`${city}`, approximateRangeToString(__, lang, { start, end })].join(__`__separator_comma`)}>
            {__`${position}`}
        </Header>
        <StyledProjectsUl>
            {projects.map(({ name: projectName, description, comment }) => (
                <StyledProjectLi key={projectName}>
                    {description}
                    {typeof comment !== 'undefined' ? [<br key={1} />, <StyledSpan key={2}>{comment}</StyledSpan>] : null}
                </StyledProjectLi>
            ))}
        </StyledProjectsUl>
    </StyledCardLi>
);

const compareJobs = (sorting: 'ascending' | 'descending') => (a: Job, b: Job) => {
    if (sorting === 'ascending') {
        if (a.start < b.start) {
            return -1;
        } else if (a.start === b.start) {
            return 0;
        } else {
            return 1;
        }
    } else {
        if (a.start < b.start) {
            return 1;
        } else if (a.start === b.start) {
            return 0;
        } else {
            return -1;
        }
    }
};

const Jobs = ({ __, _lang, jobs, jobsSorting }: JobsProps) => {
    if (jobs !== null) {
        return <StyledCardsOl>{jobs.sort(compareJobs(jobsSorting)).map(job => jobToLi(__, _lang, job))}</StyledCardsOl>;
    } else {
        return <Spinner />;
    }
};

export default connect(state => ({
    jobs: state.jobs,
    jobsSorting: state.jobsSorting,
}))(localize(Jobs));
