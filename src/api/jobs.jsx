/**
 * @file Alice Klipper's CV, work experience API adapter.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

import { API_BASE } from '../config';

import type { Job } from '../types';

export type JobsResponse = {
    jobs: Array<Job>,
} | null;

let jobsCache: JobsResponse = null; // eslint-disable-line fp/no-let

export default async (): Promise<JobsResponse> => {
    if (jobsCache === null) {
        try {
            const jobs: Array<Job> = await (await fetch(`${API_BASE}/jobs.json`)).json();

            jobsCache = { jobs }; // eslint-disable-line fp/no-mutation
        } catch (error) {
            console.error(error);
        }
    }

    return jobsCache;
};
