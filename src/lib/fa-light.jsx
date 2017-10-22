/**
 * @file Alice Klipper's CV, Font Awesome 5, light.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

import { css } from 'styled-components';

import eot from './fa-light.eot';
import woff2 from './fa-light.woff2';
import woff from './fa-light.woff';
import ttf from './fa-light.ttf';
import svg from './fa-light.svg';

export default css`
    @font-face {
        font-family: 'Font Awesome 5 Light';
        font-style: normal;
        font-weight: 300;
        src: url('${eot}');
        src: url('${eot}?#iefix') format('embedded-opentype'),
            url('${woff2}') format('woff2'),
            url('${woff}') format('woff'),
            url('${ttf}') format('truetype'),
            url('${svg}#fontawesome') format('svg');
    }

    .fal {
        font-family: 'Font Awesome 5 Light', sans-serif;
        font-weight: 300;
    }
`;
