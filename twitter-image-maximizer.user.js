// ==UserScript==
// @name       Twitter Image Maximizer
// @namespace  http://aycabta.github.io/
// @version    0.1.4
// @description  Show whole images on Twitter
// @include    /^https:\/\/twitter.com
// @copyright  2014+, Code Ass
// ==/UserScript==

(function() {
    var sheet;
    var style = document.createElement('style');
    style.setAttribute('id', 'great-css');
    style.type = "text/css";
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(style);
    sheet = style.sheet;
    sheet.insertRule('.TwitterPhoto-media { max-height: 100% !important; }', sheet.cssRules.length);
    sheet.insertRule('.TwitterPhoto-mediaSource { margin-top: 0px !important; }', sheet.cssRules.length);
    sheet.insertRule('.media-thumbnail { max-height: 100% !important; }', sheet.cssRules.length);
    sheet.insertRule('.media-thumbnail img { margin-top: 0px !important; }', sheet.cssRules.length);
    sheet.insertRule('.FlexEmbed--2by1:before { padding-bottom: 0px !important; }', sheet.cssRules.length);
    sheet.insertRule('.FlexEmbed-item { position: relative !important; }', sheet.cssRules.length);
    sheet.insertRule('.TwitterMultiPhoto-image img {' +
                     '    width: 100% !important; height: auto !important;' +
                     '}', sheet.cssRules.length);
    sheet.insertRule('.TwitterMultiPhoto-image, .TwitterMultiPhoto-image img {' +
                     '    position: relative !important;' +
                     '    top: 0px !important;' +
                     '    bottom: 0px !important;' +
                     '    left: 0px !important;' +
                     '    right: 0px !important;' +
                     '}', sheet.cssRules.length);
    sheet.insertRule('.multi-photos { height: auto !important;}', sheet.cssRules.length);
    sheet.insertRule('.multi-photos .multi-photo {' +
                     '    height: auto !important;' +
                     '    width: auto !important;' +
                     '    margin-right: 0px !important;' +
                     '    margin-bottom: 6px !important;' +
                     '}', sheet.cssRules.length);
    sheet.insertRule('.multi-photos .multi-photo img {' +
                     '    top: 0px !important;' +
                     '    position: relative !important;' +
                     '    left: 0 !important;' +
                     '    width: 100% !important;' +
                     '    height: 100% !important;' +
                     '}', sheet.cssRules.length);
    sheet.insertRule('.QuoteTweet .multi-photo img {' +
                     '    left: 0px !important;' +
                     '    width: 100% !important;' +
                     '    height: auto !important;' +
                     '}', sheet.cssRules.length);
    sheet.insertRule('.QuoteTweet .multi-photos { width: 100% !important;}', sheet.cssRules.length);
    sheet.insertRule('.u-tableCell { display: block !important;}', sheet.cssRules.length);
    sheet.insertRule('.u-alignTop { vertical-align: baseline !important;}', sheet.cssRules.length);
})();

