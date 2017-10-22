/**
 * @file Alice Klipper's CV, Font Awesome 5.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

import { injectGlobal } from 'styled-components';

(async () => {
    const [core, light, brands] = (await Promise.all([import('./fa-core'), import('./fa-light'), import('./fa-brands')])).map(x => x.default);

    injectGlobal`${core} ${light} ${brands}`;
})();
