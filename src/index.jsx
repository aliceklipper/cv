/**
 * @file Alice Klipper's CV, entry point.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { css, injectGlobal } from 'styled-components';

import store from 'store';

import App from 'components/app';

import { colorFg, fontFamily, fontSize, lineHeight } from 'config/css';

const globalCss = css`
    * {
        font-family: ${fontFamily};
        font-size: ${fontSize}px;
        line-height: ${lineHeight}px;
        box-sizing: border-box;
        color: ${colorFg};
        font-weight: 400;
        padding: 0;
        margin: 0;
    }

    html,
    body {
        width: 100%;
        height: 100%;
    }

    #root {
        width: 100%;
        min-height: 100%;
        position: absolute;
    }

    @media print {
        html,
        body,
        #root {
            height: unset;
        }
    }
`;

injectGlobal`${globalCss}`;

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root'),
);

import('lib/fa');
