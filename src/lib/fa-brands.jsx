/**
 * @file Alice Klipper's CV, Font Awesome 5, brands.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

import { css } from 'styled-components';

import eot from './fa-brands.eot';
import woff2 from './fa-brands.woff2';
import woff from './fa-brands.woff';
import ttf from './fa-brands.ttf';
import svg from './fa-brands.svg';

export default css`
    @font-face {
        font-family: 'Font Awesome 5 Brands';
        font-style: normal;
        font-weight: 900;
        src: url('${eot}');
        src: url('${eot}?#iefix') format('embedded-opentype'),
            url('${woff2}') format('woff2'),
            url('${woff}') format('woff'),
            url('${ttf}') format('truetype'),
            url('${svg}#fontawesome') format('svg');
    }

    .fab {
        font-family: 'Font Awesome 5 Brands', sans-serif;
        font-weight: 900;
    }
`;
