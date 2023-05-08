// ==UserScript==
// @name              KeepXFXingHuo
// @description       沉浸式体验科大讯飞的星火认知大模型，支持国产，感觉讯飞星火体验还不错
// @version           1.1
// @author            xcanwin
// @namespace         https://github.com/xcanwin/KeepXFXingHuo/
// @supportURL        https://github.com/xcanwin/KeepXFXingHuo/
// @updateURL         https://raw.githubusercontent.com/xcanwin/KeepXFXingHuo/main/KeepXFXingHuo.user.js
// @downloadURL       https://raw.githubusercontent.com/xcanwin/KeepXFXingHuo/main/KeepXFXingHuo.user.js
// @license           GPL-2.0-only
// @match             https://xinghuo.xfyun.cn/desk
// @run-at            document-idle
// ==/UserScript==

(function() {
    'use strict';

    const $ = (Selector, el) => (el || document).querySelector(Selector);
    const $$ = (Selector, el) => (el || document).querySelectorAll(Selector);

    window.onload = function() {
        setTimeout(function() {
            $(".pages_switchTheme__2DNsU").lastElementChild.click();//切换沉浸主题
            $(".pages_switchTheme__2DNsU").remove();//清理主题切换按钮
            $(".pages_window_switch__J40yj").lastElementChild.click();//进入历史对话
            $(".pages_window_switch__J40yj").firstElementChild.remove();//清理推荐对话
            //清理水印//各位先留着吧，支持国产
            //清理顶部//各位先留着吧，支持国产
            $(".welcome-window_prompt_wrapper__nExUq").remove();//清理首页提示词指引
            $(".affix_affix_content__-gEBT").parentElement.remove();//清理侧边栏
            $(".chat-window_tip__-THKF").remove();//清理尾部
        }, 1500);
    };

})();