/**
 * @file Alice Klipper's CV, Font Awesome 5, core.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

/*
 eslint
 max-lines: off,
 */

import { css, keyframes } from 'styled-components';

const faSpin = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;

export default css`
    @keyframes fa-spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }

    .fa,
    .fas,
    .far,
    .fal,
    .fab {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        line-height: 1;
    }

    .fa-lg {
        font-size: 1.33333em;
        line-height: 0.75em;
        vertical-align: -15%;
    }

    .fa-xs {
        font-size: 0.75em;
    }

    .fa-sm {
        font-size: 0.875em;
    }

    .fa-1x {
        font-size: 1em;
    }

    .fa-2x {
        font-size: 2em;
    }

    .fa-3x {
        font-size: 3em;
    }

    .fa-4x {
        font-size: 4em;
    }

    .fa-5x {
        font-size: 5em;
    }

    .fa-6x {
        font-size: 6em;
    }

    .fa-7x {
        font-size: 7em;
    }

    .fa-8x {
        font-size: 8em;
    }

    .fa-9x {
        font-size: 9em;
    }

    .fa-10x {
        font-size: 10em;
    }

    .fa-fw {
        text-align: center;
        width: 1.25em;
    }

    .fa-ul {
        list-style-type: none;
        margin-left: 1.875em;
        padding-left: 0;
    }

    .fa-ul > li {
        position: relative;
    }

    .fa-li {
        left: -1.875em;
        position: absolute;
        text-align: center;
        top: 0.14286em;
        width: 1.875em;
    }

    .fa-li.fa-lg {
        left: -1.625em;
    }

    .fa-border {
        border: solid 0.08em #eee;
        border-radius: 0.1em;
        padding: 0.2em 0.25em 0.15em;
    }

    .fa-pull-left {
        float: left;
    }

    .fa-pull-right {
        float: right;
    }

    .fa.fa-pull-left,
    .fas.fa-pull-left,
    .far.fa-pull-left,
    .fal.fa-pull-left,
    .fab.fa-pull-left {
        margin-right: 0.3em;
    }

    .fa.fa-pull-right,
    .fas.fa-pull-right,
    .far.fa-pull-right,
    .fal.fa-pull-right,
    .fab.fa-pull-right {
        margin-left: 0.3em;
    }

    .fa-spin {
        animation: ${faSpin} 2s infinite linear;
    }

    .fa-pulse {
        animation: ${faSpin} 1s infinite steps(8);
    }

    .fa-rotate-90 {
        transform: rotate(90deg);
    }

    .fa-rotate-180 {
        transform: rotate(180deg);
    }

    .fa-rotate-270 {
        transform: rotate(270deg);
    }

    .fa-flip-horizontal {
        transform: scale(-1, 1);
    }

    .fa-flip-vertical {
        transform: scale(1, -1);
    }

    .fa-flip-horizontal.fa-flip-vertical {
        transform: scale(-1, -1);
    }

    :root .fa-rotate-90,
    :root .fa-rotate-180,
    :root .fa-rotate-270,
    :root .fa-flip-horizontal,
    :root .fa-flip-vertical {
        filter: none;
    }

    .fa-stack {
        display: inline-block;
        height: 2em;
        line-height: 2em;
        position: relative;
        vertical-align: middle;
        width: 2em;
    }

    .fa-stack-1x,
    .fa-stack-2x {
        left: 0;
        position: absolute;
        text-align: center;
        width: 100%;
    }

    .fa-stack-1x {
        line-height: inherit;
    }

    .fa-stack-2x {
        font-size: 2em;
    }

    .fa-inverse {
        color: #fff;
    }

    .fa-500px:before {
        content: '\uf26e';
    }

    .fa-accessible-icon:before {
        content: '\uf368';
    }

    .fa-accusoft:before {
        content: '\uf369';
    }

    .fa-address-book:before {
        content: '\uf2b9';
    }

    .fa-address-card:before {
        content: '\uf2bb';
    }

    .fa-adjust:before {
        content: '\uf042';
    }

    .fa-adn:before {
        content: '\uf170';
    }

    .fa-adversal:before {
        content: '\uf36a';
    }

    .fa-affiliatetheme:before {
        content: '\uf36b';
    }

    .fa-alarm-clock:before {
        content: '\uf34e';
    }

    .fa-algolia:before {
        content: '\uf36c';
    }

    .fa-align-center:before {
        content: '\uf037';
    }

    .fa-align-justify:before {
        content: '\uf039';
    }

    .fa-align-left:before {
        content: '\uf036';
    }

    .fa-align-right:before {
        content: '\uf038';
    }

    .fa-amazon:before {
        content: '\uf270';
    }

    .fa-ambulance:before {
        content: '\uf0f9';
    }

    .fa-american-sign-language-interpreting:before {
        content: '\uf2a3';
    }

    .fa-amilia:before {
        content: '\uf36d';
    }

    .fa-anchor:before {
        content: '\uf13d';
    }

    .fa-android:before {
        content: '\uf17b';
    }

    .fa-angellist:before {
        content: '\uf209';
    }

    .fa-angle-double-down:before {
        content: '\uf103';
    }

    .fa-angle-double-left:before {
        content: '\uf100';
    }

    .fa-angle-double-right:before {
        content: '\uf101';
    }

    .fa-angle-double-up:before {
        content: '\uf102';
    }

    .fa-angle-down:before {
        content: '\uf107';
    }

    .fa-angle-left:before {
        content: '\uf104';
    }

    .fa-angle-right:before {
        content: '\uf105';
    }

    .fa-angle-up:before {
        content: '\uf106';
    }

    .fa-angrycreative:before {
        content: '\uf36e';
    }

    .fa-app-store:before {
        content: '\uf36f';
    }

    .fa-app-store-ios:before {
        content: '\uf370';
    }

    .fa-apper:before {
        content: '\uf371';
    }

    .fa-apple:before {
        content: '\uf179';
    }

    .fa-archive:before {
        content: '\uf187';
    }

    .fa-arrow-alt-circle-down:before {
        content: '\uf358';
    }

    .fa-arrow-alt-circle-left:before {
        content: '\uf359';
    }

    .fa-arrow-alt-circle-right:before {
        content: '\uf35a';
    }

    .fa-arrow-alt-circle-up:before {
        content: '\uf35b';
    }

    .fa-arrow-alt-down:before {
        content: '\uf354';
    }

    .fa-arrow-alt-from-bottom:before {
        content: '\uf346';
    }

    .fa-arrow-alt-from-left:before {
        content: '\uf347';
    }

    .fa-arrow-alt-from-right:before {
        content: '\uf348';
    }

    .fa-arrow-alt-from-top:before {
        content: '\uf349';
    }

    .fa-arrow-alt-left:before {
        content: '\uf355';
    }

    .fa-arrow-alt-right:before {
        content: '\uf356';
    }

    .fa-arrow-alt-square-down:before {
        content: '\uf350';
    }

    .fa-arrow-alt-square-left:before {
        content: '\uf351';
    }

    .fa-arrow-alt-square-right:before {
        content: '\uf352';
    }

    .fa-arrow-alt-square-up:before {
        content: '\uf353';
    }

    .fa-arrow-alt-to-bottom:before {
        content: '\uf34a';
    }

    .fa-arrow-alt-to-left:before {
        content: '\uf34b';
    }

    .fa-arrow-alt-to-right:before {
        content: '\uf34c';
    }

    .fa-arrow-alt-to-top:before {
        content: '\uf34d';
    }

    .fa-arrow-alt-up:before {
        content: '\uf357';
    }

    .fa-arrow-circle-down:before {
        content: '\uf0ab';
    }

    .fa-arrow-circle-left:before {
        content: '\uf0a8';
    }

    .fa-arrow-circle-right:before {
        content: '\uf0a9';
    }

    .fa-arrow-circle-up:before {
        content: '\uf0aa';
    }

    .fa-arrow-down:before {
        content: '\uf063';
    }

    .fa-arrow-from-bottom:before {
        content: '\uf342';
    }

    .fa-arrow-from-left:before {
        content: '\uf343';
    }

    .fa-arrow-from-right:before {
        content: '\uf344';
    }

    .fa-arrow-from-top:before {
        content: '\uf345';
    }

    .fa-arrow-left:before {
        content: '\uf060';
    }

    .fa-arrow-right:before {
        content: '\uf061';
    }

    .fa-arrow-square-down:before {
        content: '\uf339';
    }

    .fa-arrow-square-left:before {
        content: '\uf33a';
    }

    .fa-arrow-square-right:before {
        content: '\uf33b';
    }

    .fa-arrow-square-up:before {
        content: '\uf33c';
    }

    .fa-arrow-to-bottom:before {
        content: '\uf33d';
    }

    .fa-arrow-to-left:before {
        content: '\uf33e';
    }

    .fa-arrow-to-right:before {
        content: '\uf340';
    }

    .fa-arrow-to-top:before {
        content: '\uf341';
    }

    .fa-arrow-up:before {
        content: '\uf062';
    }

    .fa-arrows:before {
        content: '\uf047';
    }

    .fa-arrows-alt:before {
        content: '\uf0b2';
    }

    .fa-arrows-alt-h:before {
        content: '\uf337';
    }

    .fa-arrows-alt-v:before {
        content: '\uf338';
    }

    .fa-arrows-h:before {
        content: '\uf07e';
    }

    .fa-arrows-v:before {
        content: '\uf07d';
    }

    .fa-assistive-listening-systems:before {
        content: '\uf2a2';
    }

    .fa-asterisk:before {
        content: '\uf069';
    }

    .fa-asymmetrik:before {
        content: '\uf372';
    }

    .fa-at:before {
        content: '\uf1fa';
    }

    .fa-audible:before {
        content: '\uf373';
    }

    .fa-audio-description:before {
        content: '\uf29e';
    }

    .fa-avianex:before {
        content: '\uf374';
    }

    .fa-aws:before {
        content: '\uf375';
    }

    .fa-backward:before {
        content: '\uf04a';
    }

    .fa-badge:before {
        content: '\uf335';
    }

    .fa-badge-check:before {
        content: '\uf336';
    }

    .fa-balance-scale:before {
        content: '\uf24e';
    }

    .fa-ban:before {
        content: '\uf05e';
    }

    .fa-bandcamp:before {
        content: '\uf2d5';
    }

    .fa-barcode:before {
        content: '\uf02a';
    }

    .fa-bars:before {
        content: '\uf0c9';
    }

    .fa-bath:before {
        content: '\uf2cd';
    }

    .fa-battery-bolt:before {
        content: '\uf376';
    }

    .fa-battery-empty:before {
        content: '\uf244';
    }

    .fa-battery-full:before {
        content: '\uf240';
    }

    .fa-battery-half:before {
        content: '\uf242';
    }

    .fa-battery-quarter:before {
        content: '\uf243';
    }

    .fa-battery-slash:before {
        content: '\uf377';
    }

    .fa-battery-three-quarters:before {
        content: '\uf241';
    }

    .fa-bed:before {
        content: '\uf236';
    }

    .fa-beer:before {
        content: '\uf0fc';
    }

    .fa-behance:before {
        content: '\uf1b4';
    }

    .fa-behance-square:before {
        content: '\uf1b5';
    }

    .fa-bell:before {
        content: '\uf0f3';
    }

    .fa-bell-slash:before {
        content: '\uf1f6';
    }

    .fa-bicycle:before {
        content: '\uf206';
    }

    .fa-bimobject:before {
        content: '\uf378';
    }

    .fa-binoculars:before {
        content: '\uf1e5';
    }

    .fa-birthday-cake:before {
        content: '\uf1fd';
    }

    .fa-bitbucket:before {
        content: '\uf171';
    }

    .fa-bitcoin:before {
        content: '\uf379';
    }

    .fa-bity:before {
        content: '\uf37a';
    }

    .fa-black-tie:before {
        content: '\uf27e';
    }

    .fa-blackberry:before {
        content: '\uf37b';
    }

    .fa-blind:before {
        content: '\uf29d';
    }

    .fa-blogger:before {
        content: '\uf37c';
    }

    .fa-blogger-b:before {
        content: '\uf37d';
    }

    .fa-bluetooth:before {
        content: '\uf293';
    }

    .fa-bluetooth-b:before {
        content: '\uf294';
    }

    .fa-bold:before {
        content: '\uf032';
    }

    .fa-bolt:before {
        content: '\uf0e7';
    }

    .fa-bomb:before {
        content: '\uf1e2';
    }

    .fa-book:before {
        content: '\uf02d';
    }

    .fa-bookmark:before {
        content: '\uf02e';
    }

    .fa-braille:before {
        content: '\uf2a1';
    }

    .fa-briefcase:before {
        content: '\uf0b1';
    }

    .fa-browser:before {
        content: '\uf37e';
    }

    .fa-btc:before {
        content: '\uf15a';
    }

    .fa-bug:before {
        content: '\uf188';
    }

    .fa-building:before {
        content: '\uf1ad';
    }

    .fa-bullhorn:before {
        content: '\uf0a1';
    }

    .fa-bullseye:before {
        content: '\uf140';
    }

    .fa-buromobelexperte:before {
        content: '\uf37f';
    }

    .fa-bus:before {
        content: '\uf207';
    }

    .fa-buysellads:before {
        content: '\uf20d';
    }

    .fa-calculator:before {
        content: '\uf1ec';
    }

    .fa-calendar:before {
        content: '\uf133';
    }

    .fa-calendar-alt:before {
        content: '\uf073';
    }

    .fa-calendar-check:before {
        content: '\uf274';
    }

    .fa-calendar-edit:before {
        content: '\uf333';
    }

    .fa-calendar-exclamation:before {
        content: '\uf334';
    }

    .fa-calendar-minus:before {
        content: '\uf272';
    }

    .fa-calendar-plus:before {
        content: '\uf271';
    }

    .fa-calendar-times:before {
        content: '\uf273';
    }

    .fa-camera:before {
        content: '\uf030';
    }

    .fa-camera-alt:before {
        content: '\uf332';
    }

    .fa-camera-retro:before {
        content: '\uf083';
    }

    .fa-car:before {
        content: '\uf1b9';
    }

    .fa-caret-circle-down:before {
        content: '\uf32d';
    }

    .fa-caret-circle-left:before {
        content: '\uf32e';
    }

    .fa-caret-circle-right:before {
        content: '\uf330';
    }

    .fa-caret-circle-up:before {
        content: '\uf331';
    }

    .fa-caret-down:before {
        content: '\uf0d7';
    }

    .fa-caret-left:before {
        content: '\uf0d9';
    }

    .fa-caret-right:before {
        content: '\uf0da';
    }

    .fa-caret-square-down:before {
        content: '\uf150';
    }

    .fa-caret-square-left:before {
        content: '\uf191';
    }

    .fa-caret-square-right:before {
        content: '\uf152';
    }

    .fa-caret-square-up:before {
        content: '\uf151';
    }

    .fa-caret-up:before {
        content: '\uf0d8';
    }

    .fa-cart-arrow-down:before {
        content: '\uf218';
    }

    .fa-cart-plus:before {
        content: '\uf217';
    }

    .fa-cc-amex:before {
        content: '\uf1f3';
    }

    .fa-cc-diners-club:before {
        content: '\uf24c';
    }

    .fa-cc-discover:before {
        content: '\uf1f2';
    }

    .fa-cc-jcb:before {
        content: '\uf24b';
    }

    .fa-cc-mastercard:before {
        content: '\uf1f1';
    }

    .fa-cc-paypal:before {
        content: '\uf1f4';
    }

    .fa-cc-stripe:before {
        content: '\uf1f5';
    }

    .fa-cc-visa:before {
        content: '\uf1f0';
    }

    .fa-centercode:before {
        content: '\uf380';
    }

    .fa-certificate:before {
        content: '\uf0a3';
    }

    .fa-chart-area:before {
        content: '\uf1fe';
    }

    .fa-chart-bar:before {
        content: '\uf080';
    }

    .fa-chart-line:before {
        content: '\uf201';
    }

    .fa-chart-pie:before {
        content: '\uf200';
    }

    .fa-check:before {
        content: '\uf00c';
    }

    .fa-check-circle:before {
        content: '\uf058';
    }

    .fa-check-square:before {
        content: '\uf14a';
    }

    .fa-chevron-circle-down:before {
        content: '\uf13a';
    }

    .fa-chevron-circle-left:before {
        content: '\uf137';
    }

    .fa-chevron-circle-right:before {
        content: '\uf138';
    }

    .fa-chevron-circle-up:before {
        content: '\uf139';
    }

    .fa-chevron-double-down:before {
        content: '\uf322';
    }

    .fa-chevron-double-left:before {
        content: '\uf323';
    }

    .fa-chevron-double-right:before {
        content: '\uf324';
    }

    .fa-chevron-double-up:before {
        content: '\uf325';
    }

    .fa-chevron-down:before {
        content: '\uf078';
    }

    .fa-chevron-left:before {
        content: '\uf053';
    }

    .fa-chevron-right:before {
        content: '\uf054';
    }

    .fa-chevron-square-down:before {
        content: '\uf329';
    }

    .fa-chevron-square-left:before {
        content: '\uf32a';
    }

    .fa-chevron-square-right:before {
        content: '\uf32b';
    }

    .fa-chevron-square-up:before {
        content: '\uf32c';
    }

    .fa-chevron-up:before {
        content: '\uf077';
    }

    .fa-child:before {
        content: '\uf1ae';
    }

    .fa-chrome:before {
        content: '\uf268';
    }

    .fa-circle:before {
        content: '\uf111';
    }

    .fa-circle-notch:before {
        content: '\uf1ce';
    }

    .fa-clipboard:before {
        content: '\uf328';
    }

    .fa-clock:before {
        content: '\uf017';
    }

    .fa-clone:before {
        content: '\uf24d';
    }

    .fa-closed-captioning:before {
        content: '\uf20a';
    }

    .fa-cloud:before {
        content: '\uf0c2';
    }

    .fa-cloud-download:before {
        content: '\uf0ed';
    }

    .fa-cloud-download-alt:before {
        content: '\uf381';
    }

    .fa-cloud-upload:before {
        content: '\uf0ee';
    }

    .fa-cloud-upload-alt:before {
        content: '\uf382';
    }

    .fa-cloudscale:before {
        content: '\uf383';
    }

    .fa-cloudsmith:before {
        content: '\uf384';
    }

    .fa-cloudversify:before {
        content: '\uf385';
    }

    .fa-club:before {
        content: '\uf327';
    }

    .fa-code:before {
        content: '\uf121';
    }

    .fa-code-branch:before {
        content: '\uf126';
    }

    .fa-code-commit:before {
        content: '\uf386';
    }

    .fa-code-merge:before {
        content: '\uf387';
    }

    .fa-codepen:before {
        content: '\uf1cb';
    }

    .fa-codiepie:before {
        content: '\uf284';
    }

    .fa-coffee:before {
        content: '\uf0f4';
    }

    .fa-cog:before {
        content: '\uf013';
    }

    .fa-cogs:before {
        content: '\uf085';
    }

    .fa-columns:before {
        content: '\uf0db';
    }

    .fa-comment:before {
        content: '\uf075';
    }

    .fa-comment-alt:before {
        content: '\uf27a';
    }

    .fa-comments:before {
        content: '\uf086';
    }

    .fa-compass:before {
        content: '\uf14e';
    }

    .fa-compress:before {
        content: '\uf066';
    }

    .fa-compress-wide:before {
        content: '\uf326';
    }

    .fa-connectdevelop:before {
        content: '\uf20e';
    }

    .fa-contao:before {
        content: '\uf26d';
    }

    .fa-copy:before {
        content: '\uf0c5';
    }

    .fa-copyright:before {
        content: '\uf1f9';
    }

    .fa-cpanel:before {
        content: '\uf388';
    }

    .fa-creative-commons:before {
        content: '\uf25e';
    }

    .fa-credit-card:before {
        content: '\uf09d';
    }

    .fa-credit-card-blank:before {
        content: '\uf389';
    }

    .fa-credit-card-front:before {
        content: '\uf38a';
    }

    .fa-crop:before {
        content: '\uf125';
    }

    .fa-crosshairs:before {
        content: '\uf05b';
    }

    .fa-css3:before {
        content: '\uf13c';
    }

    .fa-css3-alt:before {
        content: '\uf38b';
    }

    .fa-cube:before {
        content: '\uf1b2';
    }

    .fa-cubes:before {
        content: '\uf1b3';
    }

    .fa-cut:before {
        content: '\uf0c4';
    }

    .fa-cuttlefish:before {
        content: '\uf38c';
    }

    .fa-d-and-d:before {
        content: '\uf38d';
    }

    .fa-dashcube:before {
        content: '\uf210';
    }

    .fa-database:before {
        content: '\uf1c0';
    }

    .fa-deaf:before {
        content: '\uf2a4';
    }

    .fa-delicious:before {
        content: '\uf1a5';
    }

    .fa-deploydog:before {
        content: '\uf38e';
    }

    .fa-deskpro:before {
        content: '\uf38f';
    }

    .fa-desktop:before {
        content: '\uf108';
    }

    .fa-desktop-alt:before {
        content: '\uf390';
    }

    .fa-deviantart:before {
        content: '\uf1bd';
    }

    .fa-diamond:before {
        content: '\uf219';
    }

    .fa-digg:before {
        content: '\uf1a6';
    }

    .fa-digital-ocean:before {
        content: '\uf391';
    }

    .fa-discord:before {
        content: '\uf392';
    }

    .fa-discourse:before {
        content: '\uf393';
    }

    .fa-dochub:before {
        content: '\uf394';
    }

    .fa-docker:before {
        content: '\uf395';
    }

    .fa-dollar-sign:before {
        content: '\uf155';
    }

    .fa-dot-circle:before {
        content: '\uf192';
    }

    .fa-download:before {
        content: '\uf019';
    }

    .fa-draft2digital:before {
        content: '\uf396';
    }

    .fa-dribbble:before {
        content: '\uf17d';
    }

    .fa-dribbble-square:before {
        content: '\uf397';
    }

    .fa-dropbox:before {
        content: '\uf16b';
    }

    .fa-dropbox-alt:before {
        content: '\uf398';
    }

    .fa-drupal:before {
        content: '\uf1a9';
    }

    .fa-dyalog:before {
        content: '\uf399';
    }

    .fa-earlybirds:before {
        content: '\uf39a';
    }

    .fa-edge:before {
        content: '\uf282';
    }

    .fa-edit:before {
        content: '\uf044';
    }

    .fa-eject:before {
        content: '\uf052';
    }

    .fa-ellipsis-h:before {
        content: '\uf141';
    }

    .fa-ellipsis-h-alt:before {
        content: '\uf39b';
    }

    .fa-ellipsis-v:before {
        content: '\uf142';
    }

    .fa-ellipsis-v-alt:before {
        content: '\uf39c';
    }

    .fa-empire:before {
        content: '\uf1d1';
    }

    .fa-envelope:before {
        content: '\uf0e0';
    }

    .fa-envelope-open:before {
        content: '\uf2b6';
    }

    .fa-envelope-square:before {
        content: '\uf199';
    }

    .fa-envira:before {
        content: '\uf299';
    }

    .fa-eraser:before {
        content: '\uf12d';
    }

    .fa-erlang:before {
        content: '\uf39d';
    }

    .fa-etsy:before {
        content: '\uf2d7';
    }

    .fa-euro-sign:before {
        content: '\uf153';
    }

    .fa-exchange:before {
        content: '\uf0ec';
    }

    .fa-exchange-alt:before {
        content: '\uf362';
    }

    .fa-exclamation:before {
        content: '\uf12a';
    }

    .fa-exclamation-circle:before {
        content: '\uf06a';
    }

    .fa-exclamation-square:before {
        content: '\uf321';
    }

    .fa-exclamation-triangle:before {
        content: '\uf071';
    }

    .fa-expand:before {
        content: '\uf065';
    }

    .fa-expand-arrows:before {
        content: '\uf31d';
    }

    .fa-expand-arrows-alt:before {
        content: '\uf31e';
    }

    .fa-expand-wide:before {
        content: '\uf320';
    }

    .fa-expeditedssl:before {
        content: '\uf23e';
    }

    .fa-external-link:before {
        content: '\uf08e';
    }

    .fa-external-link-alt:before {
        content: '\uf35d';
    }

    .fa-external-link-square:before {
        content: '\uf14c';
    }

    .fa-external-link-square-alt:before {
        content: '\uf360';
    }

    .fa-eye:before {
        content: '\uf06e';
    }

    .fa-eye-dropper:before {
        content: '\uf1fb';
    }

    .fa-eye-slash:before {
        content: '\uf070';
    }

    .fa-facebook:before {
        content: '\uf09a';
    }

    .fa-facebook-f:before {
        content: '\uf39e';
    }

    .fa-facebook-messenger:before {
        content: '\uf39f';
    }

    .fa-facebook-square:before {
        content: '\uf082';
    }

    .fa-fast-backward:before {
        content: '\uf049';
    }

    .fa-fast-forward:before {
        content: '\uf050';
    }

    .fa-fax:before {
        content: '\uf1ac';
    }

    .fa-female:before {
        content: '\uf182';
    }

    .fa-fighter-jet:before {
        content: '\uf0fb';
    }

    .fa-file:before {
        content: '\uf15b';
    }

    .fa-file-alt:before {
        content: '\uf15c';
    }

    .fa-file-archive:before {
        content: '\uf1c6';
    }

    .fa-file-audio:before {
        content: '\uf1c7';
    }

    .fa-file-check:before {
        content: '\uf316';
    }

    .fa-file-code:before {
        content: '\uf1c9';
    }

    .fa-file-edit:before {
        content: '\uf31c';
    }

    .fa-file-excel:before {
        content: '\uf1c3';
    }

    .fa-file-exclamation:before {
        content: '\uf31a';
    }

    .fa-file-image:before {
        content: '\uf1c5';
    }

    .fa-file-minus:before {
        content: '\uf318';
    }

    .fa-file-pdf:before {
        content: '\uf1c1';
    }

    .fa-file-plus:before {
        content: '\uf319';
    }

    .fa-file-powerpoint:before {
        content: '\uf1c4';
    }

    .fa-file-times:before {
        content: '\uf317';
    }

    .fa-file-video:before {
        content: '\uf1c8';
    }

    .fa-file-word:before {
        content: '\uf1c2';
    }

    .fa-film:before {
        content: '\uf008';
    }

    .fa-film-alt:before {
        content: '\uf3a0';
    }

    .fa-filter:before {
        content: '\uf0b0';
    }

    .fa-fire:before {
        content: '\uf06d';
    }

    .fa-fire-extinguisher:before {
        content: '\uf134';
    }

    .fa-firefox:before {
        content: '\uf269';
    }

    .fa-first-order:before {
        content: '\uf2b0';
    }

    .fa-firstdraft:before {
        content: '\uf3a1';
    }

    .fa-flag:before {
        content: '\uf024';
    }

    .fa-flag-checkered:before {
        content: '\uf11e';
    }

    .fa-flask:before {
        content: '\uf0c3';
    }

    .fa-flickr:before {
        content: '\uf16e';
    }

    .fa-folder:before {
        content: '\uf07b';
    }

    .fa-folder-open:before {
        content: '\uf07c';
    }

    .fa-font:before {
        content: '\uf031';
    }

    .fa-font-awesome:before {
        content: '\uf2b4';
    }

    .fa-font-awesome-alt:before {
        content: '\uf35c';
    }

    .fa-fonticons:before {
        content: '\uf280';
    }

    .fa-fonticons-fi:before {
        content: '\uf3a2';
    }

    .fa-fort-awesome:before {
        content: '\uf286';
    }

    .fa-fort-awesome-alt:before {
        content: '\uf3a3';
    }

    .fa-forumbee:before {
        content: '\uf211';
    }

    .fa-forward:before {
        content: '\uf04e';
    }

    .fa-foursquare:before {
        content: '\uf180';
    }

    .fa-free-code-camp:before {
        content: '\uf2c5';
    }

    .fa-freebsd:before {
        content: '\uf3a4';
    }

    .fa-frown:before {
        content: '\uf119';
    }

    .fa-futbol:before {
        content: '\uf1e3';
    }

    .fa-gamepad:before {
        content: '\uf11b';
    }

    .fa-gavel:before {
        content: '\uf0e3';
    }

    .fa-gem:before {
        content: '\uf3a5';
    }

    .fa-genderless:before {
        content: '\uf22d';
    }

    .fa-get-pocket:before {
        content: '\uf265';
    }

    .fa-gg:before {
        content: '\uf260';
    }

    .fa-gg-circle:before {
        content: '\uf261';
    }

    .fa-gift:before {
        content: '\uf06b';
    }

    .fa-git:before {
        content: '\uf1d3';
    }

    .fa-git-square:before {
        content: '\uf1d2';
    }

    .fa-github:before {
        content: '\uf09b';
    }

    .fa-github-alt:before {
        content: '\uf113';
    }

    .fa-github-square:before {
        content: '\uf092';
    }

    .fa-gitkraken:before {
        content: '\uf3a6';
    }

    .fa-gitlab:before {
        content: '\uf296';
    }

    .fa-glass-martini:before {
        content: '\uf000';
    }

    .fa-glide:before {
        content: '\uf2a5';
    }

    .fa-glide-g:before {
        content: '\uf2a6';
    }

    .fa-globe:before {
        content: '\uf0ac';
    }

    .fa-gofore:before {
        content: '\uf3a7';
    }

    .fa-goodreads:before {
        content: '\uf3a8';
    }

    .fa-goodreads-g:before {
        content: '\uf3a9';
    }

    .fa-google:before {
        content: '\uf1a0';
    }

    .fa-google-drive:before {
        content: '\uf3aa';
    }

    .fa-google-play:before {
        content: '\uf3ab';
    }

    .fa-google-plus:before {
        content: '\uf2b3';
    }

    .fa-google-plus-g:before {
        content: '\uf0d5';
    }

    .fa-google-plus-square:before {
        content: '\uf0d4';
    }

    .fa-google-wallet:before {
        content: '\uf1ee';
    }

    .fa-graduation-cap:before {
        content: '\uf19d';
    }

    .fa-gratipay:before {
        content: '\uf184';
    }

    .fa-grav:before {
        content: '\uf2d6';
    }

    .fa-gripfire:before {
        content: '\uf3ac';
    }

    .fa-grunt:before {
        content: '\uf3ad';
    }

    .fa-gulp:before {
        content: '\uf3ae';
    }

    .fa-h-square:before {
        content: '\uf0fd';
    }

    .fa-h1:before {
        content: '\uf313';
    }

    .fa-h2:before {
        content: '\uf314';
    }

    .fa-h3:before {
        content: '\uf315';
    }

    .fa-hacker-news:before {
        content: '\uf1d4';
    }

    .fa-hacker-news-square:before {
        content: '\uf3af';
    }

    .fa-hand-lizard:before {
        content: '\uf258';
    }

    .fa-hand-paper:before {
        content: '\uf256';
    }

    .fa-hand-peace:before {
        content: '\uf25b';
    }

    .fa-hand-point-down:before {
        content: '\uf0a7';
    }

    .fa-hand-point-left:before {
        content: '\uf0a5';
    }

    .fa-hand-point-right:before {
        content: '\uf0a4';
    }

    .fa-hand-point-up:before {
        content: '\uf0a6';
    }

    .fa-hand-pointer:before {
        content: '\uf25a';
    }

    .fa-hand-rock:before {
        content: '\uf255';
    }

    .fa-hand-scissors:before {
        content: '\uf257';
    }

    .fa-hand-spock:before {
        content: '\uf259';
    }

    .fa-handshake:before {
        content: '\uf2b5';
    }

    .fa-hashtag:before {
        content: '\uf292';
    }

    .fa-hdd:before {
        content: '\uf0a0';
    }

    .fa-heading:before {
        content: '\uf1dc';
    }

    .fa-headphones:before {
        content: '\uf025';
    }

    .fa-heart:before {
        content: '\uf004';
    }

    .fa-heartbeat:before {
        content: '\uf21e';
    }

    .fa-hexagon:before {
        content: '\uf312';
    }

    .fa-hire-a-helper:before {
        content: '\uf3b0';
    }

    .fa-history:before {
        content: '\uf1da';
    }

    .fa-home:before {
        content: '\uf015';
    }

    .fa-hospital:before {
        content: '\uf0f8';
    }

    .fa-hotjar:before {
        content: '\uf3b1';
    }

    .fa-hourglass:before {
        content: '\uf254';
    }

    .fa-hourglass-end:before {
        content: '\uf253';
    }

    .fa-hourglass-half:before {
        content: '\uf252';
    }

    .fa-hourglass-start:before {
        content: '\uf251';
    }

    .fa-houzz:before {
        content: '\uf27c';
    }

    .fa-html5:before {
        content: '\uf13b';
    }

    .fa-hubspot:before {
        content: '\uf3b2';
    }

    .fa-i-cursor:before {
        content: '\uf246';
    }

    .fa-id-badge:before {
        content: '\uf2c1';
    }

    .fa-id-card:before {
        content: '\uf2c2';
    }

    .fa-image:before {
        content: '\uf03e';
    }

    .fa-images:before {
        content: '\uf302';
    }

    .fa-imdb:before {
        content: '\uf2d8';
    }

    .fa-inbox:before {
        content: '\uf01c';
    }

    .fa-inbox-in:before {
        content: '\uf310';
    }

    .fa-inbox-out:before {
        content: '\uf311';
    }

    .fa-indent:before {
        content: '\uf03c';
    }

    .fa-industry:before {
        content: '\uf275';
    }

    .fa-industry-alt:before {
        content: '\uf3b3';
    }

    .fa-info:before {
        content: '\uf129';
    }

    .fa-info-circle:before {
        content: '\uf05a';
    }

    .fa-info-square:before {
        content: '\uf30f';
    }

    .fa-instagram:before {
        content: '\uf16d';
    }

    .fa-internet-explorer:before {
        content: '\uf26b';
    }

    .fa-ioxhost:before {
        content: '\uf208';
    }

    .fa-italic:before {
        content: '\uf033';
    }

    .fa-itunes:before {
        content: '\uf3b4';
    }

    .fa-itunes-note:before {
        content: '\uf3b5';
    }

    .fa-jack-o-lantern:before {
        content: '\uf30e';
    }

    .fa-jenkins:before {
        content: '\uf3b6';
    }

    .fa-joget:before {
        content: '\uf3b7';
    }

    .fa-joomla:before {
        content: '\uf1aa';
    }

    .fa-js:before {
        content: '\uf3b8';
    }

    .fa-js-square:before {
        content: '\uf3b9';
    }

    .fa-jsfiddle:before {
        content: '\uf1cc';
    }

    .fa-key:before {
        content: '\uf084';
    }

    .fa-keyboard:before {
        content: '\uf11c';
    }

    .fa-keycdn:before {
        content: '\uf3ba';
    }

    .fa-kickstarter:before {
        content: '\uf3bb';
    }

    .fa-kickstarter-k:before {
        content: '\uf3bc';
    }

    .fa-language:before {
        content: '\uf1ab';
    }

    .fa-laptop:before {
        content: '\uf109';
    }

    .fa-laravel:before {
        content: '\uf3bd';
    }

    .fa-lastfm:before {
        content: '\uf202';
    }

    .fa-lastfm-square:before {
        content: '\uf203';
    }

    .fa-leaf:before {
        content: '\uf06c';
    }

    .fa-leanpub:before {
        content: '\uf212';
    }

    .fa-lemon:before {
        content: '\uf094';
    }

    .fa-level-down:before {
        content: '\uf149';
    }

    .fa-level-down-alt:before {
        content: '\uf3be';
    }

    .fa-level-up:before {
        content: '\uf148';
    }

    .fa-level-up-alt:before {
        content: '\uf3bf';
    }

    .fa-life-ring:before {
        content: '\uf1cd';
    }

    .fa-lightbulb:before {
        content: '\uf0eb';
    }

    .fa-line:before {
        content: '\uf3c0';
    }

    .fa-link:before {
        content: '\uf0c1';
    }

    .fa-linkedin:before {
        content: '\uf08c';
    }

    .fa-linkedin-in:before {
        content: '\uf0e1';
    }

    .fa-linode:before {
        content: '\uf2b8';
    }

    .fa-linux:before {
        content: '\uf17c';
    }

    .fa-lira-sign:before {
        content: '\uf195';
    }

    .fa-list:before {
        content: '\uf03a';
    }

    .fa-list-alt:before {
        content: '\uf022';
    }

    .fa-list-ol:before {
        content: '\uf0cb';
    }

    .fa-list-ul:before {
        content: '\uf0ca';
    }

    .fa-location-arrow:before {
        content: '\uf124';
    }

    .fa-lock:before {
        content: '\uf023';
    }

    .fa-lock-alt:before {
        content: '\uf30d';
    }

    .fa-lock-open:before {
        content: '\uf3c1';
    }

    .fa-lock-open-alt:before {
        content: '\uf3c2';
    }

    .fa-long-arrow-alt-down:before {
        content: '\uf309';
    }

    .fa-long-arrow-alt-left:before {
        content: '\uf30a';
    }

    .fa-long-arrow-alt-right:before {
        content: '\uf30b';
    }

    .fa-long-arrow-alt-up:before {
        content: '\uf30c';
    }

    .fa-long-arrow-down:before {
        content: '\uf175';
    }

    .fa-long-arrow-left:before {
        content: '\uf177';
    }

    .fa-long-arrow-right:before {
        content: '\uf178';
    }

    .fa-long-arrow-up:before {
        content: '\uf176';
    }

    .fa-low-vision:before {
        content: '\uf2a8';
    }

    .fa-lyft:before {
        content: '\uf3c3';
    }

    .fa-magento:before {
        content: '\uf3c4';
    }

    .fa-magic:before {
        content: '\uf0d0';
    }

    .fa-magnet:before {
        content: '\uf076';
    }

    .fa-male:before {
        content: '\uf183';
    }

    .fa-map:before {
        content: '\uf279';
    }

    .fa-map-marker:before {
        content: '\uf041';
    }

    .fa-map-marker-alt:before {
        content: '\uf3c5';
    }

    .fa-map-pin:before {
        content: '\uf276';
    }

    .fa-map-signs:before {
        content: '\uf277';
    }

    .fa-mars:before {
        content: '\uf222';
    }

    .fa-mars-double:before {
        content: '\uf227';
    }

    .fa-mars-stroke:before {
        content: '\uf229';
    }

    .fa-mars-stroke-h:before {
        content: '\uf22b';
    }

    .fa-mars-stroke-v:before {
        content: '\uf22a';
    }

    .fa-maxcdn:before {
        content: '\uf136';
    }

    .fa-medapps:before {
        content: '\uf3c6';
    }

    .fa-medium:before {
        content: '\uf23a';
    }

    .fa-medium-m:before {
        content: '\uf3c7';
    }

    .fa-medkit:before {
        content: '\uf0fa';
    }

    .fa-medrt:before {
        content: '\uf3c8';
    }

    .fa-meetup:before {
        content: '\uf2e0';
    }

    .fa-meh:before {
        content: '\uf11a';
    }

    .fa-mercury:before {
        content: '\uf223';
    }

    .fa-microchip:before {
        content: '\uf2db';
    }

    .fa-microphone:before {
        content: '\uf130';
    }

    .fa-microphone-alt:before {
        content: '\uf3c9';
    }

    .fa-microphone-slash:before {
        content: '\uf131';
    }

    .fa-microsoft:before {
        content: '\uf3ca';
    }

    .fa-minus:before {
        content: '\uf068';
    }

    .fa-minus-circle:before {
        content: '\uf056';
    }

    .fa-minus-hexagon:before {
        content: '\uf307';
    }

    .fa-minus-octagon:before {
        content: '\uf308';
    }

    .fa-minus-square:before {
        content: '\uf146';
    }

    .fa-mix:before {
        content: '\uf3cb';
    }

    .fa-mixcloud:before {
        content: '\uf289';
    }

    .fa-mizuni:before {
        content: '\uf3cc';
    }

    .fa-mobile:before {
        content: '\uf10b';
    }

    .fa-mobile-alt:before {
        content: '\uf3cd';
    }

    .fa-mobile-android:before {
        content: '\uf3ce';
    }

    .fa-mobile-android-alt:before {
        content: '\uf3cf';
    }

    .fa-modx:before {
        content: '\uf285';
    }

    .fa-monero:before {
        content: '\uf3d0';
    }

    .fa-money-bill:before {
        content: '\uf0d6';
    }

    .fa-money-bill-alt:before {
        content: '\uf3d1';
    }

    .fa-moon:before {
        content: '\uf186';
    }

    .fa-motorcycle:before {
        content: '\uf21c';
    }

    .fa-mouse-pointer:before {
        content: '\uf245';
    }

    .fa-music:before {
        content: '\uf001';
    }

    .fa-napster:before {
        content: '\uf3d2';
    }

    .fa-neuter:before {
        content: '\uf22c';
    }

    .fa-newspaper:before {
        content: '\uf1ea';
    }

    .fa-nintendo-switch:before {
        content: '\uf3d3';
    }

    .fa-npm:before {
        content: '\uf3d4';
    }

    .fa-ns8:before {
        content: '\uf3d5';
    }

    .fa-nutritionix:before {
        content: '\uf3d6';
    }

    .fa-object-group:before {
        content: '\uf247';
    }

    .fa-object-ungroup:before {
        content: '\uf248';
    }

    .fa-octagon:before {
        content: '\uf306';
    }

    .fa-odnoklassniki:before {
        content: '\uf263';
    }

    .fa-odnoklassniki-square:before {
        content: '\uf264';
    }

    .fa-opencart:before {
        content: '\uf23d';
    }

    .fa-openid:before {
        content: '\uf19b';
    }

    .fa-opera:before {
        content: '\uf26a';
    }

    .fa-optin-monster:before {
        content: '\uf23c';
    }

    .fa-outdent:before {
        content: '\uf03b';
    }

    .fa-page4:before {
        content: '\uf3d7';
    }

    .fa-pagelines:before {
        content: '\uf18c';
    }

    .fa-paint-brush:before {
        content: '\uf1fc';
    }

    .fa-palfed:before {
        content: '\uf3d8';
    }

    .fa-paper-plane:before {
        content: '\uf1d8';
    }

    .fa-paperclip:before {
        content: '\uf0c6';
    }

    .fa-paragraph:before {
        content: '\uf1dd';
    }

    .fa-paste:before {
        content: '\uf0ea';
    }

    .fa-patreon:before {
        content: '\uf3d9';
    }

    .fa-pause:before {
        content: '\uf04c';
    }

    .fa-pause-circle:before {
        content: '\uf28b';
    }

    .fa-paw:before {
        content: '\uf1b0';
    }

    .fa-paypal:before {
        content: '\uf1ed';
    }

    .fa-pen:before {
        content: '\uf304';
    }

    .fa-pen-alt:before {
        content: '\uf305';
    }

    .fa-pen-square:before {
        content: '\uf14b';
    }

    .fa-pencil:before {
        content: '\uf040';
    }

    .fa-pencil-alt:before {
        content: '\uf303';
    }

    .fa-percent:before {
        content: '\uf295';
    }

    .fa-periscope:before {
        content: '\uf3da';
    }

    .fa-phabricator:before {
        content: '\uf3db';
    }

    .fa-phoenix-framework:before {
        content: '\uf3dc';
    }

    .fa-phone:before {
        content: '\uf095';
    }

    .fa-phone-slash:before {
        content: '\uf3dd';
    }

    .fa-phone-square:before {
        content: '\uf098';
    }

    .fa-phone-volume:before {
        content: '\uf2a0';
    }

    .fa-pied-piper:before {
        content: '\uf2ae';
    }

    .fa-pied-piper-alt:before {
        content: '\uf1a8';
    }

    .fa-pied-piper-pp:before {
        content: '\uf1a7';
    }

    .fa-pinterest:before {
        content: '\uf0d2';
    }

    .fa-pinterest-p:before {
        content: '\uf231';
    }

    .fa-pinterest-square:before {
        content: '\uf0d3';
    }

    .fa-plane:before {
        content: '\uf072';
    }

    .fa-plane-alt:before {
        content: '\uf3de';
    }

    .fa-play:before {
        content: '\uf04b';
    }

    .fa-play-circle:before {
        content: '\uf144';
    }

    .fa-playstation:before {
        content: '\uf3df';
    }

    .fa-plug:before {
        content: '\uf1e6';
    }

    .fa-plus:before {
        content: '\uf067';
    }

    .fa-plus-circle:before {
        content: '\uf055';
    }

    .fa-plus-hexagon:before {
        content: '\uf300';
    }

    .fa-plus-octagon:before {
        content: '\uf301';
    }

    .fa-plus-square:before {
        content: '\uf0fe';
    }

    .fa-podcast:before {
        content: '\uf2ce';
    }

    .fa-poo:before {
        content: '\uf2fe';
    }

    .fa-portrait:before {
        content: '\uf3e0';
    }

    .fa-pound-sign:before {
        content: '\uf154';
    }

    .fa-power-off:before {
        content: '\uf011';
    }

    .fa-print:before {
        content: '\uf02f';
    }

    .fa-product-hunt:before {
        content: '\uf288';
    }

    .fa-pushed:before {
        content: '\uf3e1';
    }

    .fa-puzzle-piece:before {
        content: '\uf12e';
    }

    .fa-python:before {
        content: '\uf3e2';
    }

    .fa-qq:before {
        content: '\uf1d6';
    }

    .fa-qrcode:before {
        content: '\uf029';
    }

    .fa-question:before {
        content: '\uf128';
    }

    .fa-question-circle:before {
        content: '\uf059';
    }

    .fa-question-square:before {
        content: '\uf2fd';
    }

    .fa-quora:before {
        content: '\uf2c4';
    }

    .fa-quote-left:before {
        content: '\uf10d';
    }

    .fa-quote-right:before {
        content: '\uf10e';
    }

    .fa-random:before {
        content: '\uf074';
    }

    .fa-ravelry:before {
        content: '\uf2d9';
    }

    .fa-rebel:before {
        content: '\uf1d0';
    }

    .fa-rectangle-landscape:before {
        content: '\uf2fa';
    }

    .fa-rectangle-portrait:before {
        content: '\uf2fb';
    }

    .fa-rectangle-wide:before {
        content: '\uf2fc';
    }

    .fa-recycle:before {
        content: '\uf1b8';
    }

    .fa-red-river:before {
        content: '\uf3e3';
    }

    .fa-reddit:before {
        content: '\uf1a1';
    }

    .fa-reddit-alien:before {
        content: '\uf281';
    }

    .fa-reddit-square:before {
        content: '\uf1a2';
    }

    .fa-redo:before {
        content: '\uf01e';
    }

    .fa-redo-alt:before {
        content: '\uf2f9';
    }

    .fa-registered:before {
        content: '\uf25d';
    }

    .fa-rendact:before {
        content: '\uf3e4';
    }

    .fa-renren:before {
        content: '\uf18b';
    }

    .fa-repeat:before {
        content: '\uf363';
    }

    .fa-repeat-1:before {
        content: '\uf365';
    }

    .fa-repeat-1-alt:before {
        content: '\uf366';
    }

    .fa-repeat-alt:before {
        content: '\uf364';
    }

    .fa-reply:before {
        content: '\uf3e5';
    }

    .fa-reply-all:before {
        content: '\uf122';
    }

    .fa-replyd:before {
        content: '\uf3e6';
    }

    .fa-resolving:before {
        content: '\uf3e7';
    }

    .fa-retweet:before {
        content: '\uf079';
    }

    .fa-retweet-alt:before {
        content: '\uf361';
    }

    .fa-road:before {
        content: '\uf018';
    }

    .fa-rocket:before {
        content: '\uf135';
    }

    .fa-rocketchat:before {
        content: '\uf3e8';
    }

    .fa-rockrms:before {
        content: '\uf3e9';
    }

    .fa-rss:before {
        content: '\uf09e';
    }

    .fa-rss-square:before {
        content: '\uf143';
    }

    .fa-ruble-sign:before {
        content: '\uf158';
    }

    .fa-rupee-sign:before {
        content: '\uf156';
    }

    .fa-safari:before {
        content: '\uf267';
    }

    .fa-save:before {
        content: '\uf0c7';
    }

    .fa-schlix:before {
        content: '\uf3ea';
    }

    .fa-scribd:before {
        content: '\uf28a';
    }

    .fa-scrubber:before {
        content: '\uf2f8';
    }

    .fa-search:before {
        content: '\uf002';
    }

    .fa-search-minus:before {
        content: '\uf010';
    }

    .fa-search-plus:before {
        content: '\uf00e';
    }

    .fa-searchengin:before {
        content: '\uf3eb';
    }

    .fa-sellcast:before {
        content: '\uf2da';
    }

    .fa-sellsy:before {
        content: '\uf213';
    }

    .fa-server:before {
        content: '\uf233';
    }

    .fa-servicestack:before {
        content: '\uf3ec';
    }

    .fa-share:before {
        content: '\uf064';
    }

    .fa-share-all:before {
        content: '\uf367';
    }

    .fa-share-alt:before {
        content: '\uf1e0';
    }

    .fa-share-alt-square:before {
        content: '\uf1e1';
    }

    .fa-share-square:before {
        content: '\uf14d';
    }

    .fa-shekel-sign:before {
        content: '\uf20b';
    }

    .fa-shield:before {
        content: '\uf132';
    }

    .fa-shield-alt:before {
        content: '\uf3ed';
    }

    .fa-shield-check:before {
        content: '\uf2f7';
    }

    .fa-ship:before {
        content: '\uf21a';
    }

    .fa-shirtsinbulk:before {
        content: '\uf214';
    }

    .fa-shopping-bag:before {
        content: '\uf290';
    }

    .fa-shopping-basket:before {
        content: '\uf291';
    }

    .fa-shopping-cart:before {
        content: '\uf07a';
    }

    .fa-shower:before {
        content: '\uf2cc';
    }

    .fa-sign-in:before {
        content: '\uf090';
    }

    .fa-sign-in-alt:before {
        content: '\uf2f6';
    }

    .fa-sign-language:before {
        content: '\uf2a7';
    }

    .fa-sign-out:before {
        content: '\uf08b';
    }

    .fa-sign-out-alt:before {
        content: '\uf2f5';
    }

    .fa-signal:before {
        content: '\uf012';
    }

    .fa-simplybuilt:before {
        content: '\uf215';
    }

    .fa-sistrix:before {
        content: '\uf3ee';
    }

    .fa-sitemap:before {
        content: '\uf0e8';
    }

    .fa-skyatlas:before {
        content: '\uf216';
    }

    .fa-skype:before {
        content: '\uf17e';
    }

    .fa-slack:before {
        content: '\uf198';
    }

    .fa-slack-hash:before {
        content: '\uf3ef';
    }

    .fa-sliders-h:before {
        content: '\uf1de';
    }

    .fa-sliders-h-square:before {
        content: '\uf3f0';
    }

    .fa-sliders-v:before {
        content: '\uf3f1';
    }

    .fa-sliders-v-square:before {
        content: '\uf3f2';
    }

    .fa-slideshare:before {
        content: '\uf1e7';
    }

    .fa-smile:before {
        content: '\uf118';
    }

    .fa-snapchat:before {
        content: '\uf2ab';
    }

    .fa-snapchat-ghost:before {
        content: '\uf2ac';
    }

    .fa-snapchat-square:before {
        content: '\uf2ad';
    }

    .fa-snowflake:before {
        content: '\uf2dc';
    }

    .fa-sort:before {
        content: '\uf0dc';
    }

    .fa-sort-alpha-down:before {
        content: '\uf15d';
    }

    .fa-sort-alpha-up:before {
        content: '\uf15e';
    }

    .fa-sort-amount-down:before {
        content: '\uf160';
    }

    .fa-sort-amount-up:before {
        content: '\uf161';
    }

    .fa-sort-down:before {
        content: '\uf0dd';
    }

    .fa-sort-numeric-down:before {
        content: '\uf162';
    }

    .fa-sort-numeric-up:before {
        content: '\uf163';
    }

    .fa-sort-up:before {
        content: '\uf0de';
    }

    .fa-soundcloud:before {
        content: '\uf1be';
    }

    .fa-space-shuttle:before {
        content: '\uf197';
    }

    .fa-spade:before {
        content: '\uf2f4';
    }

    .fa-speakap:before {
        content: '\uf3f3';
    }

    .fa-spinner:before {
        content: '\uf110';
    }

    .fa-spinner-third:before {
        content: '\uf3f4';
    }

    .fa-spotify:before {
        content: '\uf1bc';
    }

    .fa-square:before {
        content: '\uf0c8';
    }

    .fa-stack-exchange:before {
        content: '\uf18d';
    }

    .fa-stack-overflow:before {
        content: '\uf16c';
    }

    .fa-star:before {
        content: '\uf005';
    }

    .fa-star-exclamation:before {
        content: '\uf2f3';
    }

    .fa-star-half:before {
        content: '\uf089';
    }

    .fa-staylinked:before {
        content: '\uf3f5';
    }

    .fa-steam:before {
        content: '\uf1b6';
    }

    .fa-steam-square:before {
        content: '\uf1b7';
    }

    .fa-steam-symbol:before {
        content: '\uf3f6';
    }

    .fa-step-backward:before {
        content: '\uf048';
    }

    .fa-step-forward:before {
        content: '\uf051';
    }

    .fa-stethoscope:before {
        content: '\uf0f1';
    }

    .fa-sticker-mule:before {
        content: '\uf3f7';
    }

    .fa-sticky-note:before {
        content: '\uf249';
    }

    .fa-stop:before {
        content: '\uf04d';
    }

    .fa-stop-circle:before {
        content: '\uf28d';
    }

    .fa-stopwatch:before {
        content: '\uf2f2';
    }

    .fa-street-view:before {
        content: '\uf21d';
    }

    .fa-strikethrough:before {
        content: '\uf0cc';
    }

    .fa-studiovinari:before {
        content: '\uf3f8';
    }

    .fa-stumbleupon:before {
        content: '\uf1a4';
    }

    .fa-stumbleupon-circle:before {
        content: '\uf1a3';
    }

    .fa-subscript:before {
        content: '\uf12c';
    }

    .fa-subway:before {
        content: '\uf239';
    }

    .fa-suitcase:before {
        content: '\uf0f2';
    }

    .fa-sun:before {
        content: '\uf185';
    }

    .fa-superpowers:before {
        content: '\uf2dd';
    }

    .fa-superscript:before {
        content: '\uf12b';
    }

    .fa-supple:before {
        content: '\uf3f9';
    }

    .fa-sync:before {
        content: '\uf021';
    }

    .fa-sync-alt:before {
        content: '\uf2f1';
    }

    .fa-table:before {
        content: '\uf0ce';
    }

    .fa-tablet:before {
        content: '\uf10a';
    }

    .fa-tablet-alt:before {
        content: '\uf3fa';
    }

    .fa-tablet-android:before {
        content: '\uf3fb';
    }

    .fa-tablet-android-alt:before {
        content: '\uf3fc';
    }

    .fa-tachometer:before {
        content: '\uf0e4';
    }

    .fa-tachometer-alt:before {
        content: '\uf3fd';
    }

    .fa-tag:before {
        content: '\uf02b';
    }

    .fa-tags:before {
        content: '\uf02c';
    }

    .fa-tasks:before {
        content: '\uf0ae';
    }

    .fa-taxi:before {
        content: '\uf1ba';
    }

    .fa-telegram:before {
        content: '\uf2c6';
    }

    .fa-telegram-plane:before {
        content: '\uf3fe';
    }

    .fa-tencent-weibo:before {
        content: '\uf1d5';
    }

    .fa-terminal:before {
        content: '\uf120';
    }

    .fa-text-height:before {
        content: '\uf034';
    }

    .fa-text-width:before {
        content: '\uf035';
    }

    .fa-th:before {
        content: '\uf00a';
    }

    .fa-th-large:before {
        content: '\uf009';
    }

    .fa-th-list:before {
        content: '\uf00b';
    }

    .fa-themeisle:before {
        content: '\uf2b2';
    }

    .fa-thermometer-empty:before {
        content: '\uf2cb';
    }

    .fa-thermometer-full:before {
        content: '\uf2c7';
    }

    .fa-thermometer-half:before {
        content: '\uf2c9';
    }

    .fa-thermometer-quarter:before {
        content: '\uf2ca';
    }

    .fa-thermometer-three-quarters:before {
        content: '\uf2c8';
    }

    .fa-thumbs-down:before {
        content: '\uf165';
    }

    .fa-thumbs-up:before {
        content: '\uf164';
    }

    .fa-thumbtack:before {
        content: '\uf08d';
    }

    .fa-ticket:before {
        content: '\uf145';
    }

    .fa-ticket-alt:before {
        content: '\uf3ff';
    }

    .fa-times:before {
        content: '\uf00d';
    }

    .fa-times-circle:before {
        content: '\uf057';
    }

    .fa-times-hexagon:before {
        content: '\uf2ee';
    }

    .fa-times-octagon:before {
        content: '\uf2f0';
    }

    .fa-times-square:before {
        content: '\uf2d3';
    }

    .fa-tint:before {
        content: '\uf043';
    }

    .fa-toggle-off:before {
        content: '\uf204';
    }

    .fa-toggle-on:before {
        content: '\uf205';
    }

    .fa-trademark:before {
        content: '\uf25c';
    }

    .fa-train:before {
        content: '\uf238';
    }

    .fa-transgender:before {
        content: '\uf224';
    }

    .fa-transgender-alt:before {
        content: '\uf225';
    }

    .fa-trash:before {
        content: '\uf1f8';
    }

    .fa-trash-alt:before {
        content: '\uf2ed';
    }

    .fa-tree:before {
        content: '\uf1bb';
    }

    .fa-tree-alt:before {
        content: '\uf400';
    }

    .fa-trello:before {
        content: '\uf181';
    }

    .fa-triangle:before {
        content: '\uf2ec';
    }

    .fa-tripadvisor:before {
        content: '\uf262';
    }

    .fa-trophy:before {
        content: '\uf091';
    }

    .fa-trophy-alt:before {
        content: '\uf2eb';
    }

    .fa-truck:before {
        content: '\uf0d1';
    }

    .fa-tty:before {
        content: '\uf1e4';
    }

    .fa-tumblr:before {
        content: '\uf173';
    }

    .fa-tumblr-square:before {
        content: '\uf174';
    }

    .fa-tv:before {
        content: '\uf26c';
    }

    .fa-tv-retro:before {
        content: '\uf401';
    }

    .fa-twitch:before {
        content: '\uf1e8';
    }

    .fa-twitter:before {
        content: '\uf099';
    }

    .fa-twitter-square:before {
        content: '\uf081';
    }

    .fa-uber:before {
        content: '\uf402';
    }

    .fa-uikit:before {
        content: '\uf403';
    }

    .fa-umbrella:before {
        content: '\uf0e9';
    }

    .fa-underline:before {
        content: '\uf0cd';
    }

    .fa-undo:before {
        content: '\uf0e2';
    }

    .fa-undo-alt:before {
        content: '\uf2ea';
    }

    .fa-uniregistry:before {
        content: '\uf404';
    }

    .fa-universal-access:before {
        content: '\uf29a';
    }

    .fa-university:before {
        content: '\uf19c';
    }

    .fa-unlink:before {
        content: '\uf127';
    }

    .fa-unlock:before {
        content: '\uf09c';
    }

    .fa-unlock-alt:before {
        content: '\uf13e';
    }

    .fa-untappd:before {
        content: '\uf405';
    }

    .fa-upload:before {
        content: '\uf093';
    }

    .fa-usb:before {
        content: '\uf287';
    }

    .fa-usd-circle:before {
        content: '\uf2e8';
    }

    .fa-usd-square:before {
        content: '\uf2e9';
    }

    .fa-user:before {
        content: '\uf007';
    }

    .fa-user-alt:before {
        content: '\uf406';
    }

    .fa-user-circle:before {
        content: '\uf2bd';
    }

    .fa-user-md:before {
        content: '\uf0f0';
    }

    .fa-user-plus:before {
        content: '\uf234';
    }

    .fa-user-secret:before {
        content: '\uf21b';
    }

    .fa-user-times:before {
        content: '\uf235';
    }

    .fa-users:before {
        content: '\uf0c0';
    }

    .fa-ussunnah:before {
        content: '\uf407';
    }

    .fa-utensil-fork:before {
        content: '\uf2e3';
    }

    .fa-utensil-knife:before {
        content: '\uf2e4';
    }

    .fa-utensil-spoon:before {
        content: '\uf2e5';
    }

    .fa-utensils:before {
        content: '\uf2e7';
    }

    .fa-utensils-alt:before {
        content: '\uf2e6';
    }

    .fa-vaadin:before {
        content: '\uf408';
    }

    .fa-venus:before {
        content: '\uf221';
    }

    .fa-venus-double:before {
        content: '\uf226';
    }

    .fa-venus-mars:before {
        content: '\uf228';
    }

    .fa-viacoin:before {
        content: '\uf237';
    }

    .fa-viadeo:before {
        content: '\uf2a9';
    }

    .fa-viadeo-square:before {
        content: '\uf2aa';
    }

    .fa-viber:before {
        content: '\uf409';
    }

    .fa-video:before {
        content: '\uf03d';
    }

    .fa-vimeo:before {
        content: '\uf40a';
    }

    .fa-vimeo-square:before {
        content: '\uf194';
    }

    .fa-vimeo-v:before {
        content: '\uf27d';
    }

    .fa-vine:before {
        content: '\uf1ca';
    }

    .fa-vk:before {
        content: '\uf189';
    }

    .fa-vnv:before {
        content: '\uf40b';
    }

    .fa-volume-down:before {
        content: '\uf027';
    }

    .fa-volume-mute:before {
        content: '\uf2e2';
    }

    .fa-volume-off:before {
        content: '\uf026';
    }

    .fa-volume-up:before {
        content: '\uf028';
    }

    .fa-watch:before {
        content: '\uf2e1';
    }

    .fa-weibo:before {
        content: '\uf18a';
    }

    .fa-weixin:before {
        content: '\uf1d7';
    }

    .fa-whatsapp:before {
        content: '\uf232';
    }

    .fa-whatsapp-square:before {
        content: '\uf40c';
    }

    .fa-wheelchair:before {
        content: '\uf193';
    }

    .fa-whmcs:before {
        content: '\uf40d';
    }

    .fa-wifi:before {
        content: '\uf1eb';
    }

    .fa-wikipedia-w:before {
        content: '\uf266';
    }

    .fa-window:before {
        content: '\uf40e';
    }

    .fa-window-alt:before {
        content: '\uf40f';
    }

    .fa-window-close:before {
        content: '\uf410';
    }

    .fa-window-maximize:before {
        content: '\uf2d0';
    }

    .fa-window-minimize:before {
        content: '\uf2d1';
    }

    .fa-window-restore:before {
        content: '\uf2d2';
    }

    .fa-windows:before {
        content: '\uf17a';
    }

    .fa-won-sign:before {
        content: '\uf159';
    }

    .fa-wordpress:before {
        content: '\uf19a';
    }

    .fa-wordpress-simple:before {
        content: '\uf411';
    }

    .fa-wpbeginner:before {
        content: '\uf297';
    }

    .fa-wpexplorer:before {
        content: '\uf2de';
    }

    .fa-wpforms:before {
        content: '\uf298';
    }

    .fa-wrench:before {
        content: '\uf0ad';
    }

    .fa-xbox:before {
        content: '\uf412';
    }

    .fa-xing:before {
        content: '\uf168';
    }

    .fa-xing-square:before {
        content: '\uf169';
    }

    .fa-y-combinator:before {
        content: '\uf23b';
    }

    .fa-yahoo:before {
        content: '\uf19e';
    }

    .fa-yandex:before {
        content: '\uf413';
    }

    .fa-yandex-international:before {
        content: '\uf414';
    }

    .fa-yelp:before {
        content: '\uf1e9';
    }

    .fa-yen-sign:before {
        content: '\uf157';
    }

    .fa-yoast:before {
        content: '\uf2b1';
    }

    .fa-youtube:before {
        content: '\uf167';
    }

    .sr-only {
        border: 0;
        clip: rect(0, 0, 0, 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }

    .sr-only-focusable:active,
    .sr-only-focusable:focus {
        clip: auto;
        height: auto;
        margin: 0;
        overflow: visible;
        position: static;
        width: auto;
    }
`;
