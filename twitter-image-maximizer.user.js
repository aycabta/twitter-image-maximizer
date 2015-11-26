// ==UserScript==
// @name       Twitter Image Maximizer
// @namespace  http://aycabta.github.io/
// @version    0.2.0
// @description  Show whole images on Twitter
// @include    /^https?:\/\/twitter.com/
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
    sheet.insertRule('.permalink-tweet .OldMedia-quadPhoto, .permalink-tweet .OldMedia-triplePhoto, .permalink-tweet .OldMedia-doublePhoto {' +
                     '    height: auto !important;' +
                     '    width: 100% !important;' +
                     '}', sheet.cssRules.length);
    sheet.insertRule('.OldMedia-photoContainer {' +
                     '    height: 100% !important;' +
                     '    width: 100% !important;' +
                     '}', sheet.cssRules.length);
    sheet.insertRule('.OldMedia-photoContainer img {' +
                     '    position: static !important;' +
                     '    width: 100% !important;' +
                     '    margin-bottom: 7px !important;' +
                     '}', sheet.cssRules.length);
    sheet.insertRule('.OldMedia-halfPhoto, .OldMedia-quarterPhotoContainer, .OldMedia-quarterPhoto {' +
                     '    width: auto !important;' +
                     '    height: auto !important;' +
                     '    margin-right: 0px !important;' +
                     '    margin-left: 0px !important;' +
                     '}', sheet.cssRules.length);
    sheet.insertRule('.OldMedia-quadPhoto, .OldMedia-triplePhoto, .OldMedia-doublePhoto {' +
                     '    height: auto !important;' +
                     '}', sheet.cssRules.length);
    sheet.insertRule('.OldMedia {' +
                     '    max-height: none !important;' +
                     '}', sheet.cssRules.length);
})();

