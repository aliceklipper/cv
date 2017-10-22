/**
 * @file Alice Klipper's CV, page title.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

import React from 'react';

import localize from '../../lib/localize';

import Header from '../../kit/header';

import type { LocalizeProps } from '../../lib/localize';

export type TitleProps = LocalizeProps;

const Title = ({ __ }: TitleProps) => <Header level={1}>{__`Alice Klipper, the JS fanboy`}</Header>;

export default localize(Title);
