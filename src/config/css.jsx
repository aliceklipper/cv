/**
 * @file Alice Klipper's CV, CSS-related constants file.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

/*
 eslint
 no-magic-numbers: off,
 */

import { hsluv } from '@klippersubs/hsluv';

/*
 * Main constants
 */

export const cell = 20;

export const cellL1 = cell * 1.5;
export const cellL2 = cell * 2;
export const cellL3 = cell * 3;
export const cellL4 = cell * 4;
export const cellL5 = cell * 5;

export const cellS1 = cell * 0.75;
export const cellS2 = cell * 0.5;
export const cellS3 = cell * 0.25;
export const cellS4 = 3;
export const cellS5 = 2;

/*
 * Sizes
 */

export const widthPage = cell * 42;
export const heightPage = cell * 60;
export const widthSplitRight = cell * 10;

/*
 * Colors components
 */

export const saturation = 100;
export const lightness = 50;

export const hueError = 10; /* Red. */
export const saturationError = saturation;
export const lightnessError = lightness;

export const hueWarning = 70; /* Yellow/brown. */
export const saturationWarning = saturation;
export const lightnessWarning = 66.67;

export const hueSuccess = 140; /* Green. */
export const saturationSuccess = saturation;
export const lightnessSuccess = lightness;

export const hueInfo = 260; /* Blue. */
export const saturationInfo = saturation;
export const lightnessInfo = lightness;

export const huePrimary = 180;
export const hueSecondary = 230;

export const hueBg = 0;
export const saturationBg = 0;
export const lightnessBg = 100;

export const hueFg = 0;
export const saturationFg = 100;
export const lightnessFg = 0;

export const hueFgAlt = 0;
export const saturationFgAlt = 100;
export const lightnessFgAlt = 100;

export const hueBgAlt = 0;
export const saturationBgAlt = 0;
export const lightnessBgAlt = 25;

/*
 * Colors
 */

export const colorError = hsluv(hueError, saturationError, lightnessError);
export const colorWarning = hsluv(hueWarning, saturationWarning, lightnessWarning);
export const colorSuccess = hsluv(hueSuccess, saturationSuccess, lightnessSuccess);
export const colorInfo = hsluv(hueInfo, saturationInfo, lightnessInfo);

export const colorBg = hsluv(hueBg, saturationBg, lightnessBg);
export const colorFg = hsluv(hueFg, saturationFg, lightnessFg);

export const colorPrimary = hsluv(huePrimary, saturation, lightness);
export const colorSecondary = hsluv(hueSecondary, saturation, lightness);

export const colorBgAlt = hsluv(hueBgAlt, saturationBgAlt, lightnessBgAlt);
export const colorFgAlt = hsluv(hueFgAlt, saturationFgAlt, lightnessFgAlt);

/*
 * Typography
 */

export const fontFamily = `
    'PT Sans',
    'San Francisco',
    'Helvetica Neue',
    'Lucida Grande',
    'Helvetica',
    'Ubuntu',
    'Roboto',
    'Droid Sans',
    'Segoe UI',
    'Tahoma',
    'MigMix 1M',
    'Osaka',
    'MS PGothic',
    sans-serif
`;

export const fontSize = cell / 20 * 13;
export const lineHeight = cell;

export const lineHeightH1 = cell * 2;
export const fontSizeH1 = fontSize * 2;
export const borderLeftH1 = '1px solid';
export const paddingH1 = `0 ${cellS2}px 0 9px`;

export const lineHeightH2 = cell * 1.5;
export const fontSizeH2 = fontSize * 1.5;
export const borderLeftH2 = '1px solid';
export const paddingH2 = `0 ${cellS2}px 0 9px`;

export const lineHeightH3 = cell * 1.25;
export const fontSizeH3 = fontSize * 1.25;
export const borderLeftH3 = '1px solid';
export const paddingH3 = `0 ${cellS2}px 0 9px`;

export const lineHeightH4 = cell;
export const fontSizeH4 = fontSize;
export const borderLeftH4 = '1px solid';
export const paddingH4 = `0 ${cellS2}px 0 9px`;

export const lineHeightH5 = cell * 2;
export const fontSizeH5 = fontSize * 2;
export const borderLeftH5 = '3px solid';
export const paddingH5 = `0 ${cellS2}px 0 9px`;

export const lineHeightH6 = cell * 2;
export const fontSizeH6 = fontSize * 2;
export const borderLeftH6 = '3px solid';
export const paddingH6 = `0 ${cellS2}px 0 9px`;
