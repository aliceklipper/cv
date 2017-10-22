/**
 * @file Alice Klipper's CV, jobs section.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import { cell } from '../../config/css';

import { addJobsList } from '../../store';

import jobs from '../../api/jobs';

import Title from './title';
import Jobs from './jobs';

const StyledSection = styled.section`margin-bottom: ${cell}px;`;

const JobsSection = () => (
    <StyledSection>
        <Title />
        <Jobs workExperience={null} />
    </StyledSection>
);

export default JobsSection;

(async () => {
    const jobsResponse = await jobs();

    if (jobsResponse !== null) {
        addJobsList(jobsResponse.jobs);
    }
})();
