/**
 * @file Alice Klipper's CV, buzzwords header components.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

import React from 'react';

import localize from '../../lib/localize';

import type { LocalizeProps } from '../../lib/localize';

import Header from '../../kit/header';

const Title = ({ __ }: LocalizeProps) => <Header level={2}>{__`Buzzwords`}</Header>;

export default localize(Title);
