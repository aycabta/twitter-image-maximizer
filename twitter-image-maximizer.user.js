// ==UserScript==
// @name       Twitter Image Maximizer
// @namespace  http://aycabta.github.io/
// @version    0.2.6
// @description  Show whole images on Twitter
// @include    /^https?:\/\/twitter.com/
// @copyright  2014+, aycabta
// ==/UserScript==

(function() {
    var sheet;
    var style = document.createElement('style');
    style.setAttribute('id', 'great-css');
    style.type = "text/css";
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(style);
    sheet = style.sheet;
    sheet.insertRule('.AdaptiveMedia.is-square, .AdaptiveMedia.is-square .AdaptiveMedia-videoPreview {' +
                     '    max-height: none !important;' +
                     '}', sheet.cssRules.length);
    sheet.insertRule('.AdaptiveMedia {' +
                     '    max-height: none !important;' +
                     '}', sheet.cssRules.length);
    sheet.insertRule('.AdaptiveMedia-photoContainer img {' +
                     '    top: auto !important;' +
                     '    left: auto !important;' +
                     '    position: static !important;' +
                     '    width: 100% !important;' +
                     '    max-width: 100% !important;' +
                     '}', sheet.cssRules.length);
    sheet.insertRule('.AdaptiveMedia-halfWidthPhoto {' +
                     '    width: 100% !important;' +
                     '}', sheet.cssRules.length);
    sheet.insertRule('.AdaptiveMedia-doublePhoto {' +
                     '    height: auto !important;' +
                     '}', sheet.cssRules.length);
    sheet.insertRule('.AdaptiveMedia-twoThirdsWidthPhoto {' +
                     '    width: 100% !important;' +
                     '}', sheet.cssRules.length);
    sheet.insertRule('.AdaptiveMedia-triplePhoto {' +
                     '    height: auto !important;' +
                     '}', sheet.cssRules.length);
    sheet.insertRule('.AdaptiveMedia-halfHeightPhoto {' +
                     '    height: auto !important;' +
                     '}', sheet.cssRules.length);
    sheet.insertRule('.AdaptiveMedia-halfHeightPhotoContainer {' +
                     '    width: auto !important;' +
                     '    max-width: 100% !important;' +
                     '}', sheet.cssRules.length);
    sheet.insertRule('.AdaptiveMedia-threeQuartersWidthPhoto {' +
                     '    width: auto !important;' +
                     '    max-width: 100% !important;' +
                     '}', sheet.cssRules.length);
    sheet.insertRule('.AdaptiveMedia-quadPhoto {' +
                     '    height: auto !important;' +
                     '}', sheet.cssRules.length);
    sheet.insertRule('.AdaptiveMedia-thirdHeightPhotoContainer {' +
                     '    width: auto !important;' +
                     '    max-width: 100% !important;' +
                     '}', sheet.cssRules.length);
    sheet.insertRule('.content-main .expansion-container > li {' +
                     '    line-height: 18px !important;' +
                     '}', sheet.cssRules.length);
    sheet.insertRule('.MomentCapsuleCover-media .MomentMediaItem {' +
                     '    height: auto !important;' +
                     '    width: auto !important;' +
                     '}', sheet.cssRules.length);
    sheet.insertRule('.MomentMediaItem-entity {' +
                     '    margin-left: 0 !important;' +
                     '    margin-top: 0 !important;' +
                     '    width: 100% !important;' +
                     '    height: 100% !important;' +
                     '}', sheet.cssRules.length);
})();
