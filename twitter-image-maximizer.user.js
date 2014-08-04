// ==UserScript==
// @name       Twitter Image Maximizer
// @namespace  http://aycabta.github.io/
// @version    0.1.1
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
})();

