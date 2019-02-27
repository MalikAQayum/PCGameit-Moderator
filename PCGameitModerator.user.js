// ==UserScript==
// @name         PCGameit Moderator Script
// @namespace    https://github.com/MalikAQayum/
// @version      0.1
// @description  A script to automate some of the moderator stuff.
// @author       MalikQayum
// @connect      api.steampowered.com
// @connect      store.steampowered.com
// @connect      steamcommunity.com
// @connect      spreadsheets.google.com
// @match        https://store.steampowered.com/curator/33779114-pcgameit/admin/pending
// @match        https://store.steampowered.com/curator/33779114-pcgameit/admin/pending/
// @match        https://steamcommunity.com/groups/pcgameit
// @match        https://steamcommunity.com/groups/pcgameit/
// @require     https://code.jquery.com/jquery-3.3.1.js
// @require     https://github.com/MalikAQayum/PCGameit-Moderator/raw/master/func/jsfile00.js
// @require     https://github.com/MalikAQayum/PCGameit-Moderator/raw/master/func/jsfile01.js
// @require     https://github.com/MalikAQayum/PCGameit-Moderator/raw/master/func/jsfile02.js
// @downloadURL https://github.com/MalikAQayum/PCGameit-Moderator/raw/master/PCGameitModerator.user.js
// @updateURL   https://github.com/MalikAQayum/PCGameit-Moderator/raw/master/PCGameitModerator.user.js
// @grant        GM_xmlhttpRequest
// @run-at      document-idle
// ==/UserScript==

if(($J(location).attr("href")=='https://store.steampowered.com/curator/33779114-pcgameit/admin/pending')||($J(location).attr("href")=='https://store.steampowered.com/curator/33779114-pcgameit/admin/pending/')){ModeratorSheet();}
if(($J(location).attr("href")=='https://steamcommunity.com/groups/pcgameit/')||($J(location).attr("href")=='https://steamcommunity.com/groups/pcgameit/')){execFunc1();}
