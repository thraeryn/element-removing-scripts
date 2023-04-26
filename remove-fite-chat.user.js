// ==UserScript==
// @name         Remove Fite.tv Chat
// @version      0.75
// @description  As it says on the tin.
// @author       Tim Thraeryn
// @homepage     https://thraeryn.red/
// @match        https://www.fite.tv/watch/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fite.tv
// @grant        GM_addStyle
// ==/UserScript==

var chatPane = document.getElementById('chat-block');
if (chatPane) {
    chatPane.parentNode.removeChild(chatPane);
}

var chatBlock = document.getElementsByClass('chat-wrapper');
if (chatBlock) {
    chatBlock.parentNode.removeChild(chatBlock);
}
