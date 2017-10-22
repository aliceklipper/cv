/**
 * @file Alice Klipper's CV, localization HOC.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

import type { Levelable } from 'types';

import { colorError, colorWarning, colorSuccess, colorInfo, colorPrimary, colorSecondary } from 'config/css';

export default ({ level }: Levelable) => {
    switch (level) {
        case 'error':
            return colorError;
        case 'warning':
            return colorWarning;
        case 'success':
            return colorSuccess;
        case 'info':
            return colorInfo;
        case 'primary':
            return colorPrimary;
        case 'secondary':
            return colorSecondary;
    }
};
