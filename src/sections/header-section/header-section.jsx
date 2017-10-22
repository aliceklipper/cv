/**
 * @file Alice Klipper's CV, header section.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

import React from 'react';

import Split from '../../kit/split';

import Title from './title';
import QuickFacts from './quick-facts';
import Photo from './photo';

const HeaderSection = () => (
    <Split right={<Photo />}>
        <Title />
        <QuickFacts />
    </Split>
);

export default HeaderSection;
